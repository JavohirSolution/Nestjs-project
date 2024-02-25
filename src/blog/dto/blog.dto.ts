import { IsNotEmpty, IsString, } from "class-validator";

export class Blog {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    except: string;
    
    @IsString()
    @IsNotEmpty()
    description: string;
}
