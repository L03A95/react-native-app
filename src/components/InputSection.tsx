import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

interface InputSectionProps {
    title: string;
}

export default function InputSection ({title} : InputSectionProps) : JSX.Element {
    return (
        <View style={styles.background1}>
            <Text style={styles.title1}>{title}</Text>
            <TextInput style={styles.input1}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    background1: {
        borderRadius: 5,
        padding: 5,
        paddingBottom:10,
        paddingTop: 10,
        marginTop:10
    },

    input1: {
        backgroundColor:'#fff',
        borderRadius: 5,
        height: 40,
        color: "#0a6cb7",
        fontWeight: "500",
        fontSize: 16
    },

    title1: {
        marginBottom: 10,
        fontSize: 18,
        color: "#0a6cb7",
        fontWeight: "800"
    }

})