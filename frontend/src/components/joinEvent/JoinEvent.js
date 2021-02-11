import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import styled from "styled-components";
import Item from "./Item";

const items = [
  {
    id: Math.random(),
    name: "London Bridge",
    description:
      "Clean all the rubish we can find on the bridge and next to river Thames up to Tower Bridge. Bring some bags, there are plenty of bins around",
    location: "London Bridge"
  },
  {
    id: Math.random(),
    name: "Brighton beach",
    description:
      "Let's gather around and clean the beach because it looks terrible. Bring some gloves and bags, there are bins around",
    location: "Brighton beach"
  },
  {
    id: Math.random(),
    name: "Trafalgar Square",
    description:
      "Let's meet in the public square and pick up all the rubish. Bring some rubish bags and gloves.",
    location: "Trafalgar Square"
  }
];

export default function JoinEvent() {
  return (
    <AnimateSharedLayout>
      <motion.ul
        layout
        initial={{ borderRadius: 25 }}
        className="join-event-container"
      >
        <JoinHeading>Join an existing event</JoinHeading>
        {items.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

const JoinHeading = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;