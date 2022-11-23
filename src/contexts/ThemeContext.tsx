import { create } from "domain";
import { createContext, useContext, useReducer, useState } from "react";


interface State {
    theme: string
}

interface Actions {
    type: themeActions,
    payload: any
}

interface Provider{
    children: JSX.Element
}

const initialData = {
    theme: 'light'
}

interface Contexttype{
    state: State,
    dispatch: (action: Actions) => void
}

//setting up a context for ThemeContext
const ThemeContext = createContext<Contexttype | undefined>(undefined)

export enum themeActions {
    setTheme
}

//reducer function takes and updates state 
export const reducer = (state: State, action: Actions) => {
    switch(action.type) {
        case themeActions.setTheme: 
        return {...state, theme: action.payload}
        break
    }
}

//using the usereducer to manage the state
export const ThemeProvider = ({children}: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData)
    const value = {state, dispatch}

    return(
        //provides the state 
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

//provides context to created context
export const useForm = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside ThemeProvider')
    }
    return context
}