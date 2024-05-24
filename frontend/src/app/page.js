"use client";
import Image from "next/image";
import MainSection from "@/components/MainSection";

const Home = () =>{
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        width="1050"
        height="60"
        src="https://acswiki-bucket.s3.ap-northeast-2.amazonaws.com/bolimwine.jpg"
        alt="NextUI hero Image"
        className="w-full h-auto"
      />
      <div style={{ height: '20px' }}></div> {/* 빈 div로 공간 추가 */}
      <MainSection />
    </main>
  );
};

export default Home;


// https://acswiki-bucket.s3.ap-northeast-2.amazonaws.com/bolimwine.jpg
// 
