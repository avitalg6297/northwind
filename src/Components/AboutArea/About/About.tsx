import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WhoAreWe from "../WhoAreWe/WhoAreWe";
import "./About.css";
import Tune from "../Tune/Tune";
import useTitle from "../../../Utils/UseTitle";
import Greeting from "../../SharedArea/Greeting/Greeting";
import Spinner from "../../SharedArea/Spinner/Spinner";

function About(): JSX.Element {

    useTitle("About");

    const [currentDate, setCurrentDate] = useState<string>('---');
    function showDate(): void {
        const now = new Date();
        setCurrentDate(now.toLocaleDateString());

    }

    const [currentTime, setCurrentTime] = useState<string>();

    function showTime(args: SyntheticEvent): void {
        console.log((args.target as HTMLButtonElement).innerHTML);
        const now = new Date();
        setCurrentTime(now.toLocaleTimeString());
    }

    function showNow(args: SyntheticEvent): void {
        console.log(args.target)
        const now = new Date();
        alert(now.toLocaleString);
    }

    const navigate = useNavigate(); // React hook
    function navigateToHome(): void {
        navigate("/home");
    }

    const [topProduct, setTopProduct] = useState<string>("---");
    // const topProduct = arr[0] // the state data
    // const setTopProduct = arr[1] // function  performing two things a - change data b- re-render the component

    function displayTopProduct(): void {
        setTopProduct("Ice Coffee");
    }

    const [topSeller, setTopSeller] = useState<string>("---");
    function displayTopSeller(): void {
        setTopSeller("AVITAL");
    }

    // function showNow(args: ChangeEvent<HTMLButtonElement>): void {
    //     console.log(args.target)
    //     console.log(args.target.innerHTML);
    //     const now = new Date();
    //     alert(now.toLocaleTimeString());
    // }

    const [clock, setClock] = useState<string>("---");

    //Call a function once when component is ready to use (mounted - מחובר ומוכן לשימוש):
    //useEffect(()=>{},[]);

    //Call a function whenever some dependencies changed:
    // useEffect(()=>{},[value1, value2, value3]);

    //Call a function once when component destroyed (unmounted -כשלא מופיעה יותר באתר רגע לפני שמנותקת מהמערכת):
    // useEffect(() => {return () => {}}, [])

    useEffect(() => {
        const timerId = window.setInterval(() => {
            const now = new Date();
            setClock(now.toLocaleTimeString());
            console.log(now.toLocaleTimeString());
        }, 1000);

        return () => { clearInterval(timerId) }; // Invoke when component destroyed
    }, [])

    return (
        <div className="About">
            <Greeting hour={new Date().getHours()} />
            <WhoAreWe />

            <hr />
            <button onClick={showDate}>Show Current Date</button>
            <span>{currentDate}</span>
            <button onClick={showTime}>{currentTime ? currentTime : 'Show Current Time'}</button>
            <button onClick={showNow}>Show Current Date And Time</button>
            <button onClick={navigateToHome}>Navigate To Home</button>
            <hr />
            <button onClick={displayTopProduct}>Display Top Product</button>
            <span>{topProduct}</span>
            <button onClick={displayTopSeller}>Display top seller</button>
            <span>{topSeller}</span>
            <hr />

            <span>{clock}</span>

            <hr />
            <Tune />


        </div>
    );
}

export default About;
