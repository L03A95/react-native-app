import { View, Text, StyleSheet, ScrollView } from "react-native";
import Head from "./Head";
import ClientCard from "./ClientCard";




export default function Clients ({navigation} : {navigation: any}): JSX.Element {

    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            <ClientCard name="Liam Marlon" lastname="Perez Lupia" dni="45898418"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#f9f9d9",
    }
})