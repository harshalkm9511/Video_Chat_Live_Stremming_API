
import {useNavigate} from "react-router"

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hii, This is the landing page</h1>
            <span>
                <button onClick={() => navigate("/signin")} >Signin</button>
                <button onClick={() => navigate("/signup")}>Signup</button>
            </span>
        </div>
    );
}

export default LandingPage;