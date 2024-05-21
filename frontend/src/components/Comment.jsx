"use client";
import React, { useState } from "react";
import axios from 'axios';
const COFFEE_API_ADDR = process.env.COFFEE_API_ADDR;
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";

const Comment = ({ coffee_id, reviewModalOpen, setReviewModalOpen}) => {
  const [reviews, setReviews] = useState([]);
  const [nickName, setNickName] = useState('');
  const [content, setContent] = useState('');

  const handleClick = () => {
    setReviewModalOpen(false);
  };

  // 댓글 추가
  const submitComment = async () => {
    try {
      console.log(coffee_id,nickName,content);
      await axios.post(`${COFFEE_API_ADDR}/comment/coffee/${coffee_id}`, {
        nickName,
        content
      });
      setReviews([...reviews, { nickName, content }]);
      setNickName('');
      setContent('');
      setReviewModalOpen(false);
    } catch (error) {
      console.error("Failed to post review:", error);
    }
  };
  
  return (
      <Modal isOpen={reviewModalOpen} onClose={handleClick}>
          <ModalContent style={{ width: '100%', maxWidth: '55%' }}>
            <ModalHeader>댓글 추가</ModalHeader>
            <ModalBody>
                <Input clearable bordered fullWidth label="닉네임" placeholder="닉네임을 입력하세요." value={nickName} onChange={(e) => setNickName(e.target.value)} />
                <Textarea clearable bordered fullWidth label="댓글" placeholder="댓글을 입력하세요." value={content} onChange={(e) => setContent(e.target.value)} />
            </ModalBody>
            <ModalFooter>
                <Button auto onClick={submitComment}>댓글 추가</Button>
                <Button auto onClick={handleClick}>닫기</Button>
            </ModalFooter>
          </ModalContent>
      </Modal>
  );
};
  
export default Comment;