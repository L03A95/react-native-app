import {View, Text, StyleSheet, Button} from 'react-native'
import { store } from '../store/store'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface ClientProps {
    name: string,
    lastname: string,
    dni: string,
    index: number,
    handleUsersView: Function,
    navigation: any
}

export default function ClientCard ({name, lastname, dni, index, handleUsersView, navigation} : ClientProps) {

    const handleButton = () => {
        handleUsersView(dni)
        const storeUser = store.getString('usuario')
        if(storeUser !== undefined) {
            const objectUser = JSON.parse(storeUser)
            const deletedUser = objectUser.filter((u : any) => u.dni != dni)
            store.set('usuario', JSON.stringify(deletedUser))
        }
    }

    return (
        <View style={ index % 2 ? styles.backgroundL : styles.background } >
            <View style={styles.name}>
                <Text style={styles.text}>{name} </Text>
                <Text  style={styles.text}>{lastname} </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(dni)}>
                <Text  style={styles.dni}>{dni}</Text>
            </TouchableOpacity>
            <Button title='X' onPress={() => {handleButton()}}></Button>
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