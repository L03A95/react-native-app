import { View, Text, StyleSheet, ScrollView } from "react-native";
import Head from "./Head";
import ClientCard from "./ClientCard";
import { useEffect } from "react";
import { store } from "../store/store";

const clientes = [
    {name: 'Liam Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lai Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lena Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lorena Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Adrian Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Liam Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lai Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lena Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Lorena Marlon', lastname: 'Perez Lupia', dni: '45898418'},
    {name: 'Adrian Marlon', lastname: 'Perez Lupia', dni: '45898418'}
]


export default function Clients ({navigation} : {navigation: any}): JSX.Element {

        let users : any = []

        const storeUsers = store.getString('usuario')

        if (storeUsers !== undefined) {
            users = JSON.parse(storeUsers)
        } else {
            users = []
        }


    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            {users.map((c, i) => {
                return <ClientCard name={c.name} lastname={c.lastname} dni={c.dni} index={i}/>
            })}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f9f9d9",
    }
})