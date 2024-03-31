import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
export const FullScreenLoader = () => {
    return (
        <View
            style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}
        >
            <ActivityIndicator size="large" color="indigo" />
        </View>
    )
}