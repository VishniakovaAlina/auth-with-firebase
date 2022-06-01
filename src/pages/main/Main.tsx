import {FC, useEffect} from "react";
import {useNavigate} from "react-router";

import "./Main.scss";

const MainPage: FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const idToken = localStorage.getItem("idToken");

        if(!idToken) navigate("/auth");
    })
    return <div className="main-page">
        <h1>Welcome</h1>
        <p>You are logged in!</p>
    </div>
}

export default MainPage;