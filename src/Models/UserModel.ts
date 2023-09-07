import { RegisterOptions } from "react-hook-form";

class UserModel {
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role: string;//User /Admin
	

    public static firstNameValidation: RegisterOptions<UserModel, "firstName">= {
        required: { value: true, message: "Missing firstName." },
        minLength: { value: 2, message: "FirstName too short" },
        maxLength: { value: 20, message: "FirstName too long" }
    };

    public static lastNameValidation: RegisterOptions<UserModel, "lastName">= {
        required: { value: true, message: "Missing lastName." },
        minLength: { value: 2, message: "LastName too short" },
        maxLength: { value: 20, message: "LastName too long" }
    };

    
    public static emailValidation: RegisterOptions<UserModel, "email">= {
        required: { value: true, message: "Missing email." },
        pattern:{value:/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,message:"email is not valid"}
        
    };

    public static passwordValidation: RegisterOptions<UserModel, "password">= {
        required: { value: true, message: "Missing password." },
        minLength: { value: 2, message: "Password too short" }
    };
}



export default UserModel;
