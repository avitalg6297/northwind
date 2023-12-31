import { useSelector } from "react-redux";
import "./AuthMenu.css";
import { AppState } from "../../../Redux/AppState";
import { NavLink } from "react-router-dom";
import authService from "../../../Services/AuthService";
import notification from "../../../Utils/Notification";

function AuthMenu(): JSX.Element {

    function logMeOut(): void {
        authService.logout();
        notification.success("Bye Bye...");
    }

    const user = useSelector((appState: AppState) => appState.user)
    return (
        <div className="AuthMenu">
            {user &&

                <div>
                    <span>Hello {user.firstName} {user.lastName} |</span>
                    <NavLink to="/home" onClick={logMeOut}>Logout</NavLink>
                </div>

            }

            {
                !user &&
                <div>
                    <span>Hello Guest |</span>
                    <NavLink to="/login">Login</NavLink>
                    <span>|</span>
                    <NavLink to="/register">Register</NavLink>

                </div>

            }
        </div>
    );
}

export default AuthMenu;
