import * as C from './style';
import { themeActions, useForm } from '../../contexts/ThemeContext';

export const Header = () => {
    const {state, dispatch} = useForm()

    const handleChangeTheme = () =>{
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }
    return(
        <C.Header theme={state.theme} >
            <div className="container">
                <h1>Where in the world?</h1>
                <div onClick={handleChangeTheme} >
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
</svg>
                </div>
            </div>
        </C.Header>
    )
}