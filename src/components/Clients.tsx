import { View, Text, StyleSheet, ScrollView } from "react-native";
import Head from "./Head";
import ClientCard from "./ClientCard";
import { useEffect } from "react";
import { store } from "../store/store";

export default function Clients ({navigation} : {navigation: any}): JSX.Element {

        let users : any 

        const storeUsers = store.getString('usuario')

        if (storeUsers !== undefined) {
            users = JSON.parse(storeUsers)
        }


    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            {users == undefined ? <Text style={styles.texto}>No hay usuarios</Text> : users.map((c : any, i : number) => {
                return <ClientCard name={c.name} lastname={c.lastname} dni={c.dni} index={i} key={i}/>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f9f9d9",
    },
    texto: {
        fontSize: 240,
        color: '#f00'
    }
})