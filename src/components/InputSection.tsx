import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

interface InputSectionProps {
    title: string;
}

export default function InputSection ({title} : InputSectionProps) : JSX.Element {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>{title}</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        margin: 20
    },

    input: {
        backgroundColor:'#d3d9f9',
        borderRadius: 5,
        height: 40
    },

    title: {
        marginBottom: 10,
        fontSize: 18
    }

})