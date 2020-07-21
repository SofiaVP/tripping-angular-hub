export class Item {
    constructor(
        public id: number ,
        public itemLabel: string ,
        public quantity: number ,
        public liste: {
                id: number,
                category: string,
                user : string //this is optional, but not the id
            },
        public inBag: boolean,
){}
}
