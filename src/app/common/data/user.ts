export class User {
    constructor(
        public id: number = Math.random(),
        public username: string,
        public firstName:string,
        public password: string,
        public email: string,
    ){}
}
