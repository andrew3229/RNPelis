import { useEffect, useState } from "react"
import { NowPlayingResponse } from '../../infrastructure/interface/movie-db.responses';
import { Movie } from "../../core/entities/movie.entiti";

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from "../../config/adapters/movie-db.adapter";

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [nowPlayingResponse, setNowPlayingResponse] = useState<Movie[]>([]);
    const [popularResponse, setPopularResponse] = useState<Movie[]>([]);
    const [upComingResponse, setUpcomingResponse] = useState<Movie[]>([]);
    const [topRatedResponse, setTopRatedResponse] = useState<Movie[]>([]);

    useEffect(() => {
        initialLoad();
    }, []);

    const initialLoad = async () => {
        const [nowPlayingMovies, upcomingMovies, pupularMovies, topRatedMovies] = await Promise.all([
            await UseCases.moviesNowPlayingUseCases(movieDBFetcher),
            await UseCases.moviesUpcomingUseCases(movieDBFetcher),
            await UseCases.moviesPopularUseCases(movieDBFetcher),
            await UseCases.moviesTopRatedUseCases(movieDBFetcher)
        ]);

        setNowPlayingResponse(nowPlayingMovies);
        setPopularResponse(upcomingMovies);
        setUpcomingResponse(pupularMovies);
        setTopRatedResponse(topRatedMovies);

        setIsLoading(false);

    }
    return {
        isLoading,
        nowPlayingResponse,
        popularResponse,
        upComingResponse,
        topRatedResponse,
    }
}