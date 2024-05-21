"use client";
import React, { useState } from "react";
import CoffeeList from './CoffeeList';
import CoffeeDetails from './CoffeeDetails';
import Comment from './Comment';
import {
  Modal,
  useDisclosure,
} from "@nextui-org/react";

const MainSection = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [coffeeId, setCoffeeId] = useState(0);
  const [reviewModalOpen, setReviewModalOpen ] = useState(false);

  const handleAddReview = () => {
    setReviewModalOpen(true);
    console.log("Add review clicked");
  };

  const handleCoffeeItemClick = (coffeeId) => {
    onOpen();
    setCoffeeId(coffeeId);
  }
  return (
    <div>
      <CoffeeList handleCoffeeItemClick={handleCoffeeItemClick} />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} width="90%">
        <CoffeeDetails coffeeId={coffeeId} handleAddReview={handleAddReview} onOpenChange={onOpenChange} />
      </Modal>
      <Comment coffee_id={coffeeId} reviewModalOpen={reviewModalOpen} setReviewModalOpen={setReviewModalOpen} />
    </div>
  );
};

export default MainSection;
