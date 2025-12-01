function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left" style={{color:'red'}}>
        {props.left}
      </div>
      <div className="SplitPane-right" style={{color:'blue'}}>
        {props.right}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SplitPane
      left={<h1>안녕하세요</h1>}
      right={<h2>리액트를 배우고 있습니다</h2>}
    />
  );
}
