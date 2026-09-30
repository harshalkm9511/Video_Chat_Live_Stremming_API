import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import {useContext} from "react"
import UserContext from "../context"

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {setUser} = useContext(UserContext); 

    const onSubmit = async (event) => {
        event.preventDefault()

        const result = await axios.post("http://localhost:3000/auth/signin",
            {
                username, password
            },
            {
                withCredentials: true
            });

        const user = {
            username: result.data.username,
            data: result.data.data
        }
        setUser(user);

        navigate("/dashboard");
    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign_In</h1>

            <label htmlFor="username">Username</label>
            <input type="text"
                id="username"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}>
            </input>

            <label htmlFor="password">Password</label>
            <input type="password"
                id="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}>
            </input>

            <button type="submit">Submit</button>
        </form>
    );
}


export default Signin;