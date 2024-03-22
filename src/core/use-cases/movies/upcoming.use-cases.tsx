import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { UpComingResponse } from "../../../infrastructure/interface/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { Movie } from "../../entities/movie.entiti";

export const moviesUpcomingUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const upComming = await fetcher.get<UpComingResponse>('/upcoming');
        return upComming.results.map(MovieMapper.fromMovieDBResultToEntity);

    } catch (error) {
        throw new Error('Error Now Playing');
    }

}