import { formatDate } from '@angular/common';

export class SingleWeatherforecast {
    constructor(
        public city: string,
        public date: Date,
        public temp: number,
        public feels_like: number,
        public icon : string
        ){}
}
