import {View, Text, StyleSheet} from 'react-native'

interface ClientProps {
    name: string,
    lastname: string,
    dni: string
}

export default function ClientCard ({name, lastname, dni} : ClientProps) {


    return (
        <View style={styles.background}>
            <Text>{name}</Text>
            <Text>{lastname}</Text>
            <Text>{dni}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: ''
    }
})