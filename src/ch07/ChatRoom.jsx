import React from "react";
import {useEffect, useState} from "react";
import { createConnection } from "./createConnection";

function ChatRoom(props){
    useEffect(() => {
        const connection=createConnection(props.roomId);
        connection.connect();
        return () => {connection.disconnect();}
    }, [props.roomId]);

    return <h1>Welcome to the {props.roomId} 방!</h1>
}


export function ChatRoomContainer() {
    const [roomId, setRoomId] = React.useState("general");

    return (
        <>
            <label>방 선택: </label>
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                <option value="general">일반</option>
                <option value="react">리액트</option>
                <option value="vue">뷰</option>
            </select>
            <ChatRoom roomId={roomId} />
        </>
    );
}
