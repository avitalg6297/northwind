import "./Login.css";
import { useForm } from "react-hook-form";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";

function Login(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            alert("welcome back!");
            navigate("/home");

        } catch (err: any) {
            alert(err.message);

        }
    }
    return (
        <div className="Login">

            <form onSubmit={handleSubmit(send)}>
                <h2>Log in</h2>
                <label>Email: </label>
                <input type="email" {...register("email")} />
                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Log in</button>
            </form>

        </div>
    );
}

export default Login;
