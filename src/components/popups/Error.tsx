import {View, StyleSheet} from 'react-native'




export default function Error ({error} : {error: string}) {


    return (
        <View style={styles.background}>
            <View style={styles.error_wrapper}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#111',
        height: '100%',
        width: '100%',
        position: 'absolute',
        opacity: 0.7
    },
    error_wrapper: {
        backgroundColor: "#ffda27",
        width: 300,
        height: 300,

    }
})