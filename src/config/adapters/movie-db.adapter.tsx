import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseUrl: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: '56513e9105ba348a45b4f960046235fe',
        language: 'es'
    }
})