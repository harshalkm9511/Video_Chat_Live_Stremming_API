import { useEffect, useState } from "react"
import "./dashboard.css"
import axios from "axios"
import {useContext} from "react"
import UserContext from "../context"
import { useNavigate } from "react-router"

const Dashboard = () => {

    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const chat = ()=>{
        navigate("/chat");
    }

    return (
        <div className="dashboard">

            <div className="navbar">
                <div className="user-crediential">
                    <p>Username: &nbsp; {user.username} </p>
                </div>
            </div>

            <div className="main">
                <h1>Dashboard Page</h1>
                <p>{user.data}</p>
                <div className="startVideo">
                    <button>Start video</button>
                    <button onClick={chat}>Start chat</button>
                </div>

            </div>

            <div className="footer">

            </div>
        </div>
    );
}

export default Dashboard;