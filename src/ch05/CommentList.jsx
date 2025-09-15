import Comment from "./Comment";

const comments = [
  { name: "홍길동", comment: "내가 만든 리액트 컴포넌트입니다" },
  { name: "고길동", comment: "리액트 정말 재미있습니다" },
  { name: "박지민", comment: "리액트 너무 재미있습니다" },
];

function CommenList() {
  return (
    <div>
      {comments.map((c) => {
        return <Comment name={c.name} comment={c.comment}/>;
      })}
    </div>
  );
}

export default CommenList;
