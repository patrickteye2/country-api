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

const ThemeContext = createContext<Contexttype | undefined>(undefined)

export enum themeActions {
    setTheme
}

export const reducer = (state: State, action: Actions) => {
    switch(action.type) {
        case themeActions.setTheme: 
        return {...state, theme: action.payload}
        break
    }
}

export const ThemeProvider = ({children}: Provider) => {
    const [state, dispatch] = useReducer(reducer, initialData)
    const value = {state, dispatch}

    return(
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(ThemeContext)
    if(context === undefined) {
        throw new Error('useForm needs to be used inside ThemeProvider')
    }
    return context
}