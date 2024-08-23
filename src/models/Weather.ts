export class Weather {
    constructor(
        public temp_c: number,
        public is_day: number,
        public condition: {
            text: string,
            icon: string
        }
    ) { }
}