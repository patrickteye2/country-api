import * as C from './styles';
import { InputTS } from '../../types/Input';
import { useForm } from '../../contexts/ThemeContext';
import {useState} from 'react';


export const Input = ({value, setSearch}: InputTS) => {
    const {state} = useForm()
    // const [input, setInput] = useState('')

    
    return(
        <C.InputArea theme={state.theme} >
            <input 
                type="text" 
                placeholder='Search by Country'
                value={value}
                onChange={e => setSearch(e.target.value)}
            />
            <select title='Region' onChange={e => setSearch(e.target.value)} >
                <option value='Filter by Region' disabled selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>

            </select>
        </C.InputArea>
    )
}