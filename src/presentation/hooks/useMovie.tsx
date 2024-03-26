import { useEffect, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movie-db.adapter';
import { FullMovie } from '../../core/entities/movie.entiti';
export const useMovie = (movieId: number) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState<FullMovie>()

    useEffect(() => {
        loadMovie()
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true);

        const fullMovie = await UseCases.getMovieByIdUseCases(movieDBFetcher, movieId);

        setMovie(fullMovie);
        setIsLoading(false);

    }





    return {
        isLoading,
        movie
    }
}