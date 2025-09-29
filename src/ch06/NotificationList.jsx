import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
  { id:1,message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id:2,message: "점심 식사 시간입니다." },
  { id:3,message: "회의가 10분 후에 시작됩니다." },
];

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notifications: [] };
  }

  componentDidMount() {
    const timer = setInterval(() => {
      const { notifications } = this.state;
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        const nextNotifications = [
          ...notifications,
          reservedNotifications[index],
        ];
        this.setState({ notifications: nextNotifications });
      } else {
        this.setState({ notifications: [] });
        clearInterval(timer);
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        {this.state.notifications.map((n) => (
          <Notification key={n.id} id={n.id} message={n.message} />
        ))}
      </div>
    );
  }
}

export default NotificationList;

