import { Location } from "./Location";
import { Weather } from "./Weather";

export class LocationWeather {
    constructor(
        public location: Location,
        public current: Weather
    ) { }
}