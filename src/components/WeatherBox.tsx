import { LocationWeather } from "../models/LocationWeather"

interface Props {
    locationWeather: LocationWeather | null
}
export default function WeatherBox({ locationWeather }: Props) {

    return (
        <div>
            <div className={`hero mt-40 px-5 text-center`} >
                {
                    locationWeather ?
                        <div className="hero-content flex-col lg:flex-row">
                            <div className="flex">
                                <h1 className="text-5xl font-bold">{locationWeather.current.temp_c}</h1>
                                <span className="degree">&deg;</span>

                            </div>
                            <div className="mt-10 flex items-center gap-4">
                                <img
                                    src={`https:${locationWeather.current.condition.icon}`}
                                    className="max-w-sm rounded-lg" />
                                <h3 className="text-xl font-bold">{locationWeather.current.condition.text}</h3>
                            </div>
                            <div>
                                <p className="py-6">
                                    {locationWeather.location.name}, {locationWeather.location.region}, {locationWeather.location.country}
                                </p>
                            </div>
                        </div>

                        : <p>No location selected yet!</p>
                }

            </div>

        </div>
    )
}
