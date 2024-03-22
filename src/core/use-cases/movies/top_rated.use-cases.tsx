import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entiti";

export const moviesTopRatedUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
        return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        throw new Error('Error Now Playing');
    }

}