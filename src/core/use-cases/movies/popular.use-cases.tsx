import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from '../../entities/movie.entiti';

export const moviesPopularUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<PopularResponse>('/popular');
        return popular.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        throw new Error('Error Now Playing');
    }

}