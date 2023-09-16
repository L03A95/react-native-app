import {View, Text, StyleSheet} from 'react-native'

interface ClientProps {
    name: string,
    lastname: string,
    dni: string,
    index: number
}

export default function ClientCard ({name, lastname, dni, index} : ClientProps) {


    return (
        <View style={ index % 2 ? styles.backgroundL : styles.background } >
            <View style={styles.name}>
                <Text style={styles.text}>{name} </Text>
                <Text  style={styles.text}>{lastname} </Text>
            </View>
            <Text  style={styles.dni}>{dni}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundL: {
        backgroundColor: "#fee568",
        padding: 20,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 10
    },
    background: {
        backgroundColor: "#ffda27",
        padding: 20,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 10
    },
    name: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontWeight: '500'
    },
    dni: {
        fontSize: 18,
        fontWeight: '900'
    }
})