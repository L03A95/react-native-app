import { ScrollView, StyleSheet } from "react-native";
import Section from "./Section";
import InputSection from "./InputSection";
import SectionTitle from "./SectionTitle";

export default function Home (): JSX.Element {

    return (
        <ScrollView style={styles.background}>
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
      paddingTop: 20
    }
  })