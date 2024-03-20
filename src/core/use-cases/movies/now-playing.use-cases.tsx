import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infrastructure/interface/movie-db.responses";
import type { Movie } from '../../entities/movie.entiti';

export const moviesNowPlayingUseCases = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');
        console.log(nowPlaying);

        return [];

    } catch (error) {
        throw new Error('Error Now Playing');
    }

}