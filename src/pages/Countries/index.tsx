import * as C from './styles'
import { Input } from '../../components/input'
import { useState, useEffect } from 'react';
import { CountriesTS } from '../../types/Countries';
import { CountryItem } from '../../components/CountryItem';
import { useForm } from '../../contexts/ThemeContext';
import { api } from '../../api'



export const Countries = () => {
    const {state} = useForm()
    const [countries, setCountries] = useState<CountriesTS[]>([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getAllCountries()
    }, [])

    const getAllCountries = async () => {
        setLoading(true)
        let countries = await api.getCountries()
        setCountries(countries)
        console.log(countries)
        setLoading(false)
    }

    const lowerSearch = search.toLocaleLowerCase()

    const filteredCountries = countries.filter(country => country
        .name.toLowerCase().includes(lowerSearch) || country.region.toLocaleLowerCase().includes(lowerSearch))

        
    return (
        <C.CountryArea theme={state.theme}>
            <Input
             value={search}
             setSearch={setSearch}
            />
            <div className="countries">
                <>
              
                {loading &&
                <div className="loading">Please wait, Loading....</div>
                }
                {!loading &&
                    filteredCountries.map((item) => {
                       return ( <CountryItem
                        name={item.name}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        flag={item.flags.png}
                       /> )
                    })
                }

                </>
            </div>
        </C.CountryArea>
    )
}