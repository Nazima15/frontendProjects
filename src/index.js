import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Book from './ch03/Book';
//import App from './App';
// import Hello from './ch03/Hello'; 
//import Library from './ch03/Library';
//import ConfirmDialog from './ch04/ConfirmDialog';
//import Welcome from './ch05/Welcome';
//import { App } from './ch05/App';
import CommentList from './ch05/CommentList';

// 이전에 사용했던 Hello 컴포넌트 렌더링 예시
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <div>
//       <Hello toWhat="World!" />
//       <Hello toWhat="props-toWhat 연습!" />
//       <Hello toWhat="aaa" />
//     </div>
//   </React.StrictMode>
// );

// JSX 예시
// const name = '소풍';
// const element = <h1>안녕, {name}!</h1>;

// const user = {
//   firstName: '문수',
//   lastName: '박'
// };

// function formatName(user){
//   return user.firstName + ' ' + user.lastName;
// }

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

//const element =<div tabIndex="0"><p>나는 children</p></div>

//const element =<img src="https://media.istockphoto.com/id/2202617808/ko/%EC%82%AC%EC%A7%84/spring-of-jeamsan-jangheung-gun-jeollanam-do-with-pink-rhododendron-flowers-in-full-bloom.jpg?s=612x612&w=is&k=20&c=d-p0VTDAolPP1gqAg9c3EUKSYaMr0uSRBbcQzLxJV3o="/>

// const user={
//   avatarUrl:"https://media.istockphoto.com/id/1407036426/ko/%EC%82%AC%EC%A7%84/%EB%82%A8%EC%9E%90-%ED%99%94%EC%9D%B4-%EB%B0%B0%EA%B2%BD-%ED%8C%A8%EB%9D%BC-%EC%A0%84%EC%B2%B4-%EB%B0%B0%EA%B2%BD-%ED%81%B4%EB%A1%A4-%ED%94%BC%EC%A7%80-%ED%99%94%EC%9D%B4.jpg?s=612x612&w=is&k=20&c=Z5bX4YJHkq3nYH3jvUu0iXo5mYk6vJt1H3kQG7c2mU="
// }
// const element=<img src={user.avatarUrl} width="30%"/>;

// const element=(
//   <>
//     <h1>안녕허세요</h1>
//     <h2>열심해 리액트를 공부해보겠습니다</h2>
//   </>
// )

// ======================================
// Button 컴포넌트
// function Button(props){
//     return (
//         <button className={`bg-${props.color}`}>
//             <b>
//                 {props.children}
//             </b>
//         </button>
//     )
// }

// // ConfirmDialog 컴포넌트
// function ConfirmDialog(props){
//     return (
//         <div>
//             {/* 내용 안내 */}
//             <p>내용을 확인했으면 확인 버튼을 눌러주세요</p>
//             {/* 확인 버튼 */}
//             <Button color="green">확인</Button>
//         </div>
//     )
// }
// function tick(){
//   const element=(
//   <div>
//     <h1>안녕, 리액트</h1>
//     <h2>현재 시간:{new Date().toLocaleTimeString()}</h2>
//   </div>
// )

// root 렌더링

//   <>
//   <Welcome name="홍길동"/>
//   <Welcome name="고길동"/>
//   <Welcome name="김길동"/>
//   </>
// )

// setInterval(tick,1000);
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<CommentList/>);
//   // <App />
// )
