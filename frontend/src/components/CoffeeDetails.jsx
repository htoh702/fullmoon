"use client";
import React, { useState, useEffect } from "react";
import fetchCoffeeById from './utils/fetchCoffeeById';
import Comments from './Comments';
import styles from './ButtonStyles.modules.css';
import {
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

const CoffeeDetails = ({ coffeeId, handleAddReview, onOpenChange }) => {
  const [coffee, setCoffee] = useState(null);

  const handleClick = () => {
    handleAddReview();
  };

  const handleClose = () => {
    onOpenChange();
  };

  useEffect(() => {
    const getCoffeeDetails = async () => {
      const coffeeData = await fetchCoffeeById(coffeeId);
      setCoffee(coffeeData);
    };

    getCoffeeDetails();
  }, [coffeeId]);

  if (!coffee) {
    return <p>Loading...</p>;
  }
  
  return (
    <ModalContent style={{ width: '100%', maxWidth: '55%' }}>
      <ModalHeader>{coffee?.modelName}</ModalHeader>
      <ModalBody>
        <div className="flex">
          {/* 왼쪽 섹션: 커피 사진 및 기본 정보 */}
          <div className="flex flex-col items-center overflow-x-auto">
            <Image
              src={coffee.imageUrl}
              alt={coffee?.modelName}
              style={{ width: '70%', height: 'auto', display: 'block' }}
            />
            <table className="min-w-full divide-y divide-gray-200 mt-4" style={{ margin: 'auto' }}>
              <tbody className="p-3 text-lg text-gray-900 font-bold">
                <tr><td>원산지</td><td>{coffee?.origin}</td></tr>
                <tr><td>제조사</td><td>{coffee?.manuFacturer}</td></tr>
                <tr><td>커피 강도</td><td>{coffee?.coffeeStrength}</td></tr>
                <tr><td>산미</td><td>{coffee?.acidity}</td></tr>
                <tr><td>바디감</td><td>{coffee?.body}</td></tr>
                <tr><td>테이스팅</td><td>{coffee?.tastes.join(', ')}</td></tr>
              </tbody>
            </table>
          </div>
          {/* 오른쪽 섹션: 리뷰 정보 */}
          <Comments coffeeId={coffeeId} />
        </div>
      </ModalBody>
      <ModalFooter>
      <Button 
        flat 
        auto 
        onClick={handleClick}
        className={styles.addButton}
      >
      댓글 추가
      </Button>
      <Button flat auto onClick={handleClose}>닫기</Button>
      </ModalFooter>
    </ModalContent>
  );
};
  
export default CoffeeDetails;