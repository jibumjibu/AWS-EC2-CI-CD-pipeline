
export class User {
    id: number;
    name: string;
    email: string;
    password: string;

    constructor(id?:number, name?:string, email?:string, password?:string){
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
    }
}