import { ScrollView, Text, StyleSheet, View, Image, Button, TouchableOpacity } from "react-native";
import Coppel_logo from "../images/Coppel.png"
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import goBackBtn from '../images/anterior.png'

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
    jobEarning: string,
    ref1Name: string,
    ref1Address: string,
    ref1Phone: string,
    ref2Name: string,
    ref2Address: string,
    ref2Phone: string
}

export default function ClientScreen ({navigation, name, lastname, dni, birthdate, civil, scholarity, city, address, phone, disponability, jobType, jobDescription, jobEarning, ref1Name, ref1Address, ref1Phone, ref2Name, ref2Address, ref2Phone} : clientProps) : JSX.Element {

    return  <ScrollView style={styles.background}>
                <View style={styles.backgroundHeader}>
                    <Image source={Coppel_logo} style={{ width: 170, height: 70}}/>
                    <TouchableOpacity  onPress={() => navigation.navigate("Clients")} style={styles.btn_wrapper}>
                        <Image source={goBackBtn} style={styles.btn}></Image>
                    </TouchableOpacity>
                </View>
                {/* info personal */}
                <Section>
                    <>
                    <SectionTitle title="Datos personales"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {name ? name : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Apellido:</Text> {lastname ? lastname :  <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>DNI:</Text> {dni}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Fecha de nacimiento:</Text> {birthdate ? birthdate : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Estado civil:</Text> {civil ? civil : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Escolaridad:</Text> {scholarity ? scholarity : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Barrio y localidad:</Text> {city ? city : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección y numeración:</Text> {address ? address :  <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {phone ? phone : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Disponibilidad horaria:</Text> {disponability ? disponability : <Text style={styles.blank}>Vacío</Text>}</Text>
                    </>
                </Section>

                {/* info de empleo */}
                <Section>
                    <>
                    <SectionTitle title="Datos de empleo"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Típo de empléo:</Text> {jobType ? jobType : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Monto de ingresos:</Text> {jobEarning ? jobEarning : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Descripción de empléo:</Text> {jobDescription ? jobDescription : <Text style={styles.blank}>Vacío</Text>}</Text>
                    </>
                </Section>

                {/* info referentes 1 y 2 */}
                <Section>
                    <>
                    <SectionTitle title="Datos de referente 1"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {ref1Name ? ref1Name : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección:</Text> {ref1Address ? ref1Address : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {ref1Phone ? ref1Phone : <Text style={styles.blank}>Vacío</Text>}</Text>
                    </>
                </Section>
                <Section>
                    <>
                    <SectionTitle title="Datos de referente 2"></SectionTitle>
                    <Text style={styles.text}><Text style={styles.data}>Nombre:</Text> {ref2Name ? ref2Name : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Dirección:</Text> {ref2Address ? ref2Address : <Text style={styles.blank}>Vacío</Text>}</Text>
                    <Text style={styles.text}><Text style={styles.data}>Número de teléfono:</Text> {ref2Phone ? ref2Phone : <Text style={styles.blank}>Vacío</Text>}</Text>
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
        marginVertical: 3,
        borderRadius: 5
    },
    data: {
        backgroundColor: "#0a6cb7",
        color: '#fff',
        
    },
    btn: {
        width: 30,
        height: 30
    },
    btn_wrapper: {
        backgroundColor: "#0a6cb7",
        padding: 5,
        borderRadius: 5
    },
    blank: {
        color: '#c5c5c5'
    }
})