import React from "react";
import Card from "./Card";  // ✅ 경로 수정

export default function ProfileCard() {
  return (
    <Card title="Nazima" backgroundColor="#fbff00ff">
    <h2>Nazima's Profile 입니다 </h2>
      <p>안녕하세요. 저는 나지마입니다.</p>
      <p>리액트를 열심히 공부하고 있어요!</p>
    </Card>
  );
}
