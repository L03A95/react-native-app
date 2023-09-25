import {View, Text, StyleSheet, Button, Image} from 'react-native'
import { store } from '../store/store'
import { TouchableOpacity } from 'react-native-gesture-handler'
import trash_logo from '../images/basura.png'

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
            <TouchableOpacity onPress={() => navigation.navigate(dni)} style={styles.name}>
                <Text style={styles.text}>{name} </Text>
                <Text  style={styles.text}>{lastname} </Text>
            </TouchableOpacity>
                <Text  style={styles.dni}>{dni}</Text>
                <TouchableOpacity onPress={() => {handleButton()}} style={styles.logo_wrapper}>
                    <Image source={trash_logo} style={styles.logo}></Image>
                </TouchableOpacity>
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
        marginVertical: 10,
        alignItems: 'center'
    },
    background: {
        backgroundColor: "#ffda27",
        padding: 20,
        flexDirection: 'row',
        marginHorizontal: 10,
        justifyContent: "space-between",
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center'
    },
    name: {
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        color: '#666'
    },
    dni: {
        fontSize: 20,
        fontWeight: '900',
        color: '#333'
    },
    logo: {
        width: 25,
        height: 25
    },
    logo_wrapper: {
        backgroundColor: "#0a6cb7",
        padding: 5,
        borderRadius: 5
    }
})