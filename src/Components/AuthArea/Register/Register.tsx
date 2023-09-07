import { useForm } from "react-hook-form";
import UserModel from "../../../Models/UserModel";
import "./Register.css";
import authService from "../../../Services/AuthService";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {

    const {register,handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel){
        try{
            await authService.register(user);
            alert("welcome!");
            navigate("/home");

        }catch(err: any){
            alert(err.message);
            
        }
    }
    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
                <h2>Register</h2>

                <label>First name: </label>
                <input type="text" {...register("firstName")}/>
                <label>Last name: </label>
                <input type="text" {...register("lastName")}/>
                <label>Email: </label>
                <input type="email" {...register("email")}/>
                <label>Password: </label>
                <input type="password" {...register("password")}/>

                <button>Register</button>
            </form>
        </div>
    );
}

export default Register;
