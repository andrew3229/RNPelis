import { Text, View, StyleSheet } from 'react-native'
import { FullMovie } from '../../../core/entities/movie.entiti';
import { Formatter } from '../../../config/helpers/formatter';

interface Props {
    movie: FullMovie;
}

export const MovieDetail = ({ movie }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>{movie.rating}</Text>

                    <Text style={{ marginLeft: 5 }}>
                        -{movie.generes.map(genre => genre).join(', ')}
                    </Text>
                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia
                </Text>

                <Text style={{ fontSize: 18 }}>
                    {movie.description}
                </Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>
                    {Formatter.currency(movie.budget)}
                </Text>

                {/* Casting */}

                <View style={{ marginTop: 10, marginBottom: 100 }}>

                    <Text style={{ fontSize: 23, marginVertical: 10, fontWeight: 'bold', marginHorizontal: 20 }}>
                        {/* Actores */}
                    </Text>

                </View>
            </View>

        </>
    )
}