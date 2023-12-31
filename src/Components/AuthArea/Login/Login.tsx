import "./Login.css";
import { useForm } from "react-hook-form";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import notification from "../../../Utils/Notification";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notification.success("welcome back!");
            navigate("/home");

        } catch (err: any) {
            notification.err(err);
            // alert(err.message);

        }
    }
    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>
                <h2>Log in</h2>
                <label>Email: </label>
                <input type="email" {...register("email", CredentialsModel.emailValidation)} />
                <span className="err">{formState.errors.email?.message}</span>
                <label>Password: </label>
                <input type="password" {...register("password", CredentialsModel.passwordValidation)} />
                <span className="err">{formState.errors.password?.message}</span>

                <button>Log in</button>
            </form>

        </div>
    );
}

export default Login;
