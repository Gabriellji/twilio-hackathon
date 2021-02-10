const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')

const User = require('../user/user.model')
const Event = require('../event/event.model')

//Private
// GET /event  
// gets user events

router.get('/event', auth, async (req, res) => {
    try {
        const user = await Event.findOne({
            user: req.user.id,
        }).populate('User', ['name'])

        if (!user) {
            res.status(404).json({ msg: 'There is no events for this user' })
        }

        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    }
})

// Public
// GET /all_events 
// gets all exists events

router.get('/all_events', async (req, res) => {
    try {
        const profiles = await Profile.find().populate('User', ['name'])
        res.json(profiles)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// Private
// POST /event
// Creates or updates event

router.post(
    '/',
    [
        auth,
        check('description', 'Description is required').isLength({
            min: 4,
        }),
        check('address', 'Address is required').isLength({
            min: 4,
        }),
        check('city', 'City is required').isLength({
            min: 4,
        }),
        check('date', 'Date is required').isLength({
            min: 10,
        }),
        check('time', 'Time is required').not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        console.log(req.user)
        const eventFields = {
                user: req.user.id,
                name: req.user.info[0],
            ...req.body,
        }
        try {
            // Using upsert option (creates new doc if no match is found):
            const event = await Event.findOneAndUpdate(
                { user: req.user.id },
                { $set: eventFields },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            )

            res.status(201).json(event)
        } catch (err) {
            console.error(err.message)
            return res.status(500).send('Server Error')
        }
    }
)

// Public
// GET /profiles/user/:user_id
// gets profiles based on user id

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({
            user: req.params.user_id,
        }).populate('User', ['name'])

        if (!profile) {
            return res
                .status(404)
                .json({ msg: 'There is no profile for this user' })
        }
        res.json(profile)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router