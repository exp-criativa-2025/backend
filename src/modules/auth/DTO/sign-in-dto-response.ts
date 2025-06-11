import { IsDate, IsEmail, IsIn, IsNotEmpty, IsString, IsStrongPassword, MinLength } from "class-validator";
import { UserRole } from "src/modules/users/dto/CONSTANTS/user-dto-roles";

export class SignInDtoResponse {
   user: {
        id: number;
        username: string;
        userEmail: string;
    };
    token: string;
}