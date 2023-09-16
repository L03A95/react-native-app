import { ScrollView, StyleSheet } from "react-native";
import Section from "./Section";
import InputSection from "./InputSection";
import SectionTitle from "./SectionTitle";
import Head from "./Head";

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
                </>
            </Section>
            <Section>
                <>
                <SectionTitle title='Datos de empresa'/>
                <InputSection title='Empresa'/>
                </>
                
            </Section>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: "#f9f9d9",
    }
  })