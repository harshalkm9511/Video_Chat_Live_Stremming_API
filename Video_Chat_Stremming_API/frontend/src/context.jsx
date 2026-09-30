import { createContext, useState, useEffect } from "react"
import { useNavigate } from "react-router";
import axios from "axios"
import {Outlet} from "react-router"

const UserContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    const getUser = async () => {
        try {
            console.log("before authme");
            const result = await axios.get("http://localhost:3000/auth/authme", {
                withCredentials: true
            });
            console.log("After authme");
            console.log(result.data);
            setUser(result.data.user);
        }catch(err){
           if(err.status === 401){
            console.log("redirect to login page");
            navigate("/signin");
           }
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }} >
            {children}
        </UserContext.Provider>
    );
}

export { AuthProvider };
export default UserContext;