export class Weather {
    constructor(
        public name: string ,
        public dt: number,
        public temp: number,
        public feels_like: number,
        public sunrise: number,
        public sunset: number,
        ){}
    
}
