import {
    IsEnum, IsString
} from 'class-validator';
import { UserRole } from '../enum/user.enum';

export class CreateUserDto {
    @IsString()
    name: string

    @IsString()
    lastName: string

    @IsEnum(UserRole)
    role: UserRole
}
