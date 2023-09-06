import "./Greeting.css";
import { memo } from "react"

//memoization

interface GreetingProps {
    hour: number;
}

function Greeting(props: GreetingProps): JSX.Element {

    function getGreeting(): string {
        if (props.hour >= 6 && props.hour <= 10) return "Good Morning";
        if (props.hour >= 11 && props.hour <= 15) return "Good Afternoon";
        if (props.hour >= 16 && props.hour <= 20) return "Good Evening";
        return "Good Night";
    }
    return (
        <div className="Greeting">
            <span>{getGreeting()}</span>
        </div>
    );
}

// higher order component (HOC)
export default memo(Greeting); 

// export default memo(Greeting, (prevProps, nextProps) => {
//     return prevProps.hour === nextProps.hour // can change this default
// }); 

