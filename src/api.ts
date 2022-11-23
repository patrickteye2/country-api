import axios from "axios";
// create base URL
const http = axios.create({
    baseURL: 'https://restcountries.com/v2'
})

export const api = {
    //fetching all 
    getCountries: async () => {
        let response = await http.get('/all')
        return response.data
    },
    //fetching with name
    getCountry:async (name: string) => {
        let response = await http.get(`/name/${name}?fullText=true`)
        return response.data
    },
    //fetching with code
    getCountryByCode:async (code: string) => {
        let response = await http.get(`/alpha?codes=${code}`)
        return response.data
    },

}