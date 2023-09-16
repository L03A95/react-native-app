import { View, Text, StyleSheet, ScrollView } from "react-native";
import Head from "./Head";
import ClientCard from "./ClientCard";

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

    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            {clientes.map((c, i) => {
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