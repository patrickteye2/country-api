import * as C from './style';
import { useForm } from '../../contexts/ThemeContext';
import { SingleCountryTS } from '../../types/SingleCountry';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {CountryTS} from '../../types/Country';



export const SingleCountry = ({
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencie,
    languages,
    borders,
    flag
}: SingleCountryTS) => {
    const {state} = useForm();
    const [country, setCountry] = useState([]);
    const [borderCountry, setBorderCountry] = useState<CountryTS[]>([]);

    
    useEffect(() => {
        const fetchCountryData = async (name: string) => {
            try {
                const url = `https://restcountries.com/v2/name/${name}?fullText=true`;
                const res = await fetch(url);
                const data = await res.json();
                setCountry(data[0]);
                data[0]?.borders?.forEach((border: string) => {
                    return findCountry(border);
                });

            }catch(error){
                console.log(error)
            }
        }
        fetchCountryData(name)

        const findCountry = async (border: string) => {
            try{
                const url = `https://restcountries.com/v2/alpha/${border}`;
                const res = await fetch(url);
                const data = await res.json();
                setBorderCountry((cur) => [...cur, data.name])
            }
            catch (error){
                console.log(error)
            }
        }
    }, [name])

    return(
    <C.CountryData theme={state.theme} >
        <img src={flag} alt={`Flag of: ${name}`} />
        <div className="data--area">
            <h1>{name}</h1>
            <div className="data--firstArea">
                <p><span>Native Name: </span>{nativeName}</p>
                <p><span>Population: </span>{population}</p>
                <p><span>Region: </span>{region}</p>
                <p><span>Subregion: </span>{subregion}</p>
            {capital &&
                <p><span>Capital: </span>{capital}</p>
            }
            <p className='topLevel' ><span>Top Level Domain</span>{topLevelDomain}</p>
            {currencie &&
                <p><><span>Currency: </span>{currencie.map(item => item.name)}</></p>
            }
            <p><><span>Language: </span>{languages.map((item, index) =>
             (
                <span key={index} className='language' >{item.name}</span>
             )) } 
             </></p>
            </div>
         
            <div className="border--area">
                <p>Boarder Countries: </p>
                <div className="borders">
                    
                    {/* {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link> )}     */}

                     {borderCountry?.length ? (
                        borderCountry.map((country, index) => (
                            <Link
                                key={index}
                                to={`/country/${country}`} >
                                <>{country}</>
                            </Link>
                         
                        ))
                     ) : (<p>No Border</p>)}

               </div>
            </div>
        </div>
        
    </C.CountryData>
    )
}