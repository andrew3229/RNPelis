import { Text, View, StyleSheet } from 'react-native'
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
export const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isLoading, nowPlayingResponse } = useMovies();

    if (isLoading) {
        return (<Text>Cargando...</Text>)
    }

    return (
        <ScrollView>
            <View
                style={{ marginTop: top + 20, paddingBottom: 30 }}
            >
                <PosterCarousel
                    movies={nowPlayingResponse}
                />
            </View>
        </ScrollView>
    )
}