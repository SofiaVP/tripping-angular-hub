export class Weather {
    constructor(
        public name: string ,
        public dt: Date ,
        public temp: number,
        public feels_like: number,
        public sunrise: number,
        public sunset: number,
        ){}
    
}
