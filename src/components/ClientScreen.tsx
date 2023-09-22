import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";
import Coppel_logo from "../images/Coppel.png"
import Section from "./Section";
import SectionTitle from "./SectionTitle";

interface clientProps {
    navigation: any,
    name: string,
    lastname: string,
    dni: string,
    birthdate: string,
    civil: string,
    scholarity: string,
    city: string,
    address: string,
    phone: string,
    disponability: string,
    jobType: string,
    jobDescription: string,
    ref1Name: string,
    ref1Address: string,
    ref1Phone: string,
    ref2Name: string,
    ref2Address: string,
    ref2Phone: string
}

export default function ClientScreen ({navigation, name, lastname, dni, civil, scholarity, city, address, phone, disponability, jobType, jobDescription, ref1Name, ref1Address, ref1Phone, ref2Name, ref2Address, ref2Phone} : clientProps) : JSX.Element {

    return  <ScrollView style={styles.background}>
                <View style={styles.backgroundHeader}>
                    <Image source={Coppel_logo} style={{ width: 170, height: 70}}/>
                    <Button title="<" onPress={() => navigation.navigate("Clients")}></Button>
                </View>
                {/* info personal */}
                <Section>
                    <>
                    <SectionTitle title="Datos personales"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {name}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Apellido:</Text> {lastname}</Text>
                    <Text style={styles.text}><Text style={styles.data}>DNI:</Text> {dni}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Estado civil:</Text> {civil}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Escolaridad:</Text> {scholarity}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Barrio y localidad:</Text> {city}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección y numeración:</Text> {address}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {phone}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Disponibilidad horaria:</Text> {disponability}</Text>
                    </>
                </Section>

                {/* info de empleo */}
                <Section>
                    <>
                    <SectionTitle title="Datos de empleo"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Típo de empléo:</Text> {jobType}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Descripción de empléo:</Text> {jobDescription}</Text>
                    </>
                </Section>

                {/* info referentes 1 y 2 */}
                <Section>
                    <>
                    <SectionTitle title="Datos de referente 1"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {ref1Name}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección:</Text> {ref1Address}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {ref1Phone}</Text>
                    </>
                </Section>
                <Section>
                    <>
                    <SectionTitle title="Datos de referente 2"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {ref2Name}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección:</Text> {ref2Address}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {ref2Phone}</Text>
                    </>
                </Section>
            </ScrollView>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f9f9d9'
    },
    backgroundHeader: {
        backgroundColor: "#ffda27",
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color:'#444',
        backgroundColor: "#f9f9d9",
        padding: 6,
        fontWeight: '600',
        marginVertical: 3
    },
    data: {
        backgroundColor: "#0a6cb7",
        margin: 2,
        color: '#fff'
    }
})