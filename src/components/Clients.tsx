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


    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            {usersView == undefined ? <Text style={styles.texto}>No hay usuarios...</Text> : usersView.map((c : any, i : number) => {
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