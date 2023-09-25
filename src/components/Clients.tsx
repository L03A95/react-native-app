import { View, Text, StyleSheet, ScrollView } from "react-native";
import Head from "./Head";
import ClientCard from "./ClientCard";
import { useEffect, useState } from "react";
import { store } from "../store/store";

export default function Clients ({navigation} : {navigation: any}): JSX.Element {

        let users : any 

        const storeUsers = store.getString('usuario')

        if (storeUsers !== undefined) {
            users = JSON.parse(storeUsers)
        }

        const [usersView, setUsersView] = useState(users)

        const handleUsersView = (id : string) => {
            const deletedUserView = usersView.filter((u : any) => u.dni != id)
            setUsersView(deletedUserView)
        }


        const words = ['No cargaste náda, ponete las pilas...','¿Probáste haciendo solicitúdes?', 'Fijate si subiste bien esos dátos...', '¡Hóy se llega a 12!', 'Error 404, cliéntes not found...', 'Dale que quiero ver esto lléno al final del día...', 'Y nádie vino...', '¡SI SE PUÉDE, SI SE PUÉDE!', 'Menos celú, mas solicitúdes...', '¿No hay nádie en la cálle?']

        const inspirationHandler = () => {
            const random : number = Math.random()
            return words[Math.floor( random * 10)]
        }

    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            {usersView == false ? <Text style={styles.texto}>{inspirationHandler()}</Text> : usersView.map((c : any, i : number) => {
                return <ClientCard name={c.name} lastname={c.lastname} handleUsersView={handleUsersView} dni={c.dni} index={i} key={i} navigation={navigation}/>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f9f9d9"
    },
    texto: {
        fontSize: 24,
        color: '#a9a9a9',
        textAlign: 'center'
        
    }
})