import "./chat.css"
import socket from "../socket"
import { useState, useEffect } from "react"

const Chat_Form = () => {
    const [msg, setMsg] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.connect();

        socket.on("connect", () => {
            console.log("User is connectes successfully from browser");
        });

        socket.on("chat message", (msg) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socket.off("chat message");
            socket.disconnect();
        };

    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!msg.trim()) return;
        socket.emit("chat message", msg);
        setMsg("");
    }

    const messageList = messages.map((m, i) => {
        return <li key={i}>{m}</li>
    });

    return (
        <div className="chat-form">
            <ul id="messages">{messageList}</ul>
            <form id="form" onSubmit={sendMessage}>
                <input
                    value={msg}
                    id="input"
                    autoComplete="off"
                    onChange={(m) => { setMsg(m.target.value) }}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chat_Form;