import { useEffect, useState } from "react"
import { AutoComplete } from "../models/AutoComplete"
import axios from "axios"
import { SEARCH_CITIES_URL } from "../constants/api"
import { LocationWeather } from "../models/LocationWeather"


interface Props {
    fetchWeather: (place: string) => void,
    locationWeather: LocationWeather | null

}
export default function InputBox(props: Props) {
    const [autoCompletes, setAutoCompletes] = useState<AutoComplete[]>([])
    const [inp, setInp] = useState("")

    useEffect(() => {
        if (props.locationWeather) {
            setInp(props.locationWeather.location.name)
        }
    }, [props.locationWeather])


    const searchCity = async (inpValue: string) => {
        if (inpValue.length >= 3) {
            const response = await axios.get(SEARCH_CITIES_URL + inpValue);
            setAutoCompletes(response.data)
        } else {
            setAutoCompletes([])
        }
    }
    return (
        <div className="py-4 px-4">
            <input type="text" placeholder="Type your city here..." value={inp} onChange={(e: any) => setInp(e.target.value)} onKeyUp={(e: any) => searchCity(e.target.value)} className="input input-bordered w-full text-slate-50" />
            {
                autoCompletes.length ?
                    <ul className="menu bg-base-200 rounded-box w-full">
                        {
                            autoCompletes.map((aC) =>
                                <li key={aC.name}>
                                    <a className="text-slate-50" onClick={() => {
                                        props.fetchWeather(aC.url);
                                        setAutoCompletes([])
                                    }}
                                    >{aC.name}, {aC.country}</a>
                                </li>
                            )
                        }
                    </ul>
                    : null

            }
        </div>
    )
}
