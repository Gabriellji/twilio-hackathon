import React, { useState, useEffect } from "react";

import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import Item from "./Item";

export default function JoinEvent() {
  const [items, setAllItems] = useState("");

  const getAllEvents = () => {
    fetch(`http://localhost:5000/event/all_events`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllItems(data);
      });
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className="join-event-container"
      >
        <JoinHeading>Join an existing event</JoinHeading>
        {items && items.map((item) => <Item item={item} key={item.id} />)}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

const JoinHeading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;
