import { ScrollView, StyleSheet, Text } from "react-native";
import Section from "./Section";
import InputSection from "./InputSection";
import SectionTitle from "./SectionTitle";
import Head from "./Head";
import { Picker } from "@react-native-picker/picker";

export default function Home ({navigation} : {navigation: any}): JSX.Element {

    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            <Section>
                <>
                <SectionTitle title='Datos personales'/>
                <InputSection title='Nombre(s)'/>
                <InputSection title='Apellido(s)'/>
                <InputSection title='DNI'/>
                <InputSection title='Fecha de nacimiento'/>
                <Text style={styles.title}>Estado Civil</Text>
                <Picker style={styles.input}>
                    <Picker.Item label="Soltero" value="Soltero"/>
                    <Picker.Item label="Casado" value="Casado"/>
                    <Picker.Item label="Viudo" value="Viudo"/>
                </Picker>
                <Text style={styles.title}>Escolaridad</Text>
                <Picker style={styles.input}>
                    <Picker.Item label="Primario" value="Primario"/>
                    <Picker.Item label="Secundario" value="Secundario"/>
                    <Picker.Item label="Terciario" value="Terciario"/>
                    <Picker.Item label="Universitario incompleto" value="Universitario incompleto"/>
                    <Picker.Item label="Universitario" value="Universitario"/>
                </Picker>
                <InputSection title='Direccion'/>
                <InputSection title='Numero telefonico'/>
                <InputSection title='Disponibilidad horaria'/>
                </>
            </Section>
            <Section>
                <>
                <SectionTitle title='Datos de empresa'/>
                <InputSection title='Empresa'/>
                <InputSection title='Descripción de empleo'/>
                <Text style={styles.title}>Tipo de empleo</Text>
                <Picker style={styles.input}>
                    <Picker.Item label="Bajo relacion de dependencia" value="Bajo relacion de dependencia"/>
                    <Picker.Item label="Monotributista / Autonomo" value="Monotributista / Autonomo"/>
                    <Picker.Item label="Empleado municipal" value="Empleado municipal"/>
                </Picker>
                </>  
            </Section>
            <Section>
                <>
                <SectionTitle title="Referente (1)"/>
                <InputSection title="Nombre completo"/>
                <InputSection title="Dirección"/>
                <InputSection title="Número telefónico"/>
                <SectionTitle title="Referente (2)"/>
                <InputSection title="Nombre completo"/>
                <InputSection title="Dirección"/>
                <InputSection title="Número telefónico"/>
                </>
            </Section>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: "#f9f9d9",
    },
    input: {
        backgroundColor:'#fff',
        color: "#0a6cb7",
        fontWeight: "500",
        fontSize: 16,
        marginHorizontal: 5,
    },
    title: {
        marginBottom: 10,
        fontSize: 18,
        color: "#0a6cb7",
        fontWeight: "800",
        marginHorizontal: 5,
        marginTop: 20
    }
  })