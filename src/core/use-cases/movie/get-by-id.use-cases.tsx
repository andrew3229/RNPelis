import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDB } from "../../../infrastructure/interface/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entiti";

export const getMovieByIdUseCases = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {

    try {
        // usar fetcher
        const movie = await fetcher.get<MovieDB>(`/${movieId}`);
        //mapeo
        const fullMovie = MovieMapper.fromMovieDBToEntity(movie);

        return fullMovie
    }
    catch (error) {
        throw new Error('Error getMovieByIdUseCases');
    }
}