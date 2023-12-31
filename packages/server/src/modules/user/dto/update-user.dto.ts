import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {


    id : number
    name : string
    email : string
    password : string
    role : string
    gender : string
    age : number
    address : string
    registration_number : number
    qualification : string
}
