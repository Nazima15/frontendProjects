import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid gray",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

class Notification extends React.Component {
  componentDidMount() {
    // 컴포넌트가 마운트된 후 실행되는 코드
    console.log(`${this.props.id}Notification 컴포넌트가 마운트되었습니다`);
  }
  componentDidUpdate() {
    // 컴포넌트가 업데이트된 후 실행되는 코드
    console.log(`${this.props.id}Notification 컴포넌트가 업데이트되었습니다.`);
  }
  componentWillUnmount() {
    // 컴포넌트가 언마운트되기 전에 실행되는 코드
    console.log(`${this.props.id}Notification 컴포넌트가 언마운트됩니다.`);
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {this.props.message || "알림 메시지가 없습니다."}
        </span>
      </div>
    );
  }
}

export default Notification;





