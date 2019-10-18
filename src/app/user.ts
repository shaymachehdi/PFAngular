import {Course} from './course'
import {Role} from './role'

export class User   {
    id: number;
    name: string;
    username: string;
    email : string;
    roles : Role[];
    password: string;
    cours:Course[];
    
    
    
}