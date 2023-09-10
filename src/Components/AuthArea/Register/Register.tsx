import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import "./Register.css";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import notification from "../../../Utils/Notification";

function Register(): JSX.Element {

    const {register,handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel){
        try{
            await authService.register(user);
            notification.success("welcome!");
            navigate("/home");

        }catch(err: any){
            // alert(err.message);
            notification.err(err);
            
        }
    }
    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <h2>Register</h2>

                <label>First name: </label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)}/>
                <span className="err">{formState.errors.firstName?.message}</span>

                <label>Last name: </label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)}/>
                <span className="err">{formState.errors.lastName?.message}</span>

                <label>Email: </label>
                <input type="email" {...register("email", UserModel.emailValidation)}/>
                <span className="err">{formState.errors.email?.message}</span>

                <label>Password: </label>
                <input type="password" {...register("password", UserModel.passwordValidation)}/>
                <span className="err">{formState.errors.password?.message}</span>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
