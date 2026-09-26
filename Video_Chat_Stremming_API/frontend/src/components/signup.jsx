import axios from "axios"
import { useState } from "react"

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault()
        const result = await axios.post("http://localhost:3000/auth/signup", {
            username, password
        });
    }

    return (
        <form onSubmit={onSubmit}>
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

export default Signup;