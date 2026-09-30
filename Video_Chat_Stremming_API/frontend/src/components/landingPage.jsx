
import {useNavigate} from "react-router"
import "./landingPage.css"

const LandingPage = () => {
    const navigate = useNavigate();
    
    const onclick = async ()=>{
        navigate("/dashboard");
    }

    return (
        <div>
            <h1>Hii, This is the landing page</h1>
            <span>
                <button onClick={() => navigate("/signin")} >Signin</button>
                <button onClick={() => navigate("/signup")}>Signup</button>
            </span>

            <div className="start">
                <button onClick={onclick}>Start</button>
            </div>
        </div>
    );
}

export default LandingPage;