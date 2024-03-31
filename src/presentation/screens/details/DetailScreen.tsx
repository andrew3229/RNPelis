import { useRoute } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native'
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetail } from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';
export const DetailScreen = () => {

    const { movieId } = useRoute().params;


    const { isLoading, movie } = useMovie(movieId);

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            <MovieHeader movie={movie!} />

            <MovieDetail movie={movie!} />
        </ScrollView>
    )
}