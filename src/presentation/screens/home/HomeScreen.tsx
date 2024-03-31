import { Text, View, StyleSheet } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loader/FullScreenLoader';
export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlayingResponse, popularResponse, topRatedResponse, upComingResponse, popularNextPage } = useMovies();

    if (isLoading) {
        return <FullScreenLoader />
    }

    return (
        <ScrollView>
            <View
                style={{ marginTop: top + 20, paddingBottom: 30 }}
            >
                {/* Principal */}
                <PosterCarousel
                    movies={nowPlayingResponse}
                />
                {/* Populares */}

                <HorizontalCarousel
                    movies={popularResponse}
                    title="Populares"
                    loadNextPage={popularNextPage}
                />

                {/* Top Rated */}
                <HorizontalCarousel
                    movies={topRatedResponse}
                    title="Top Rated"
                />

                {/* Proximamente */}
                <HorizontalCarousel
                    movies={upComingResponse}
                    title="Proximamente"
                />


            </View>
        </ScrollView>
    )
}