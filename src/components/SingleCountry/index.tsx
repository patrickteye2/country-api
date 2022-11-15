import * as C from './style';
import { useForm } from '../../contexts/ThemeContext';
import { SingleCountryTS } from '../../types/SingleCountry';
import { Link } from 'react-router-dom';

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
    const {state} = useForm()

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
            {borders &&
            <div className="border--area">
                <p>Boarder Countries: </p>
                <div className="borders">
                    {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link> )}
                </div>
            </div>
        }
        </div>
        
    </C.CountryData>
    )
}