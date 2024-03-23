import { Text, View, StyleSheet, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import { Movie } from '../../../core/entities/movie.entiti'
import { FlatList } from 'react-native-gesture-handler'
import { MoviePoster } from './MoviePoster'
import { useEffect, useRef } from 'react'

interface Props {
    movies: Movie[],
    title?: string,
    loadNextPage?: () => void
}
export const HorizontalCarousel = ({ movies, title, loadNextPage }: Props) => {

    const isLoading = useRef(false);

    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false
        }, 200);
    }, [movies])

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        // buscamos si llegamos al final de la lista
        const isEndReaced = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

        if (!isEndReaced) return;

        isLoading.current = true;

        // Cargar las siguientes peliculas
        loadNextPage && loadNextPage();


    }

    return (
        <View
            style={{ height: title ? 260 : 220 }}
        >
            {
                title && (
                    <Text style={{
                        fontSize: 30,
                        fontWeight: '300',
                        marginLeft: 10,
                        marginBottom: 10
                    }}>{title}</Text>
                )
            }

            <FlatList
                keyExtractor={(item, index) => `${item.id}-${index}`}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} height={220} width={140} />}
                onScroll={onScroll}
            />
        </View>
    )
}