import { Text, StyleSheet } from "react-native";

interface TitleProps {
    title: string
}

export default function SectionTitle ({title} : TitleProps) {
    return (
        <Text style={styles.title}>-{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "#0a6cb7",
        fontSize: 24,
        width:'100%',
        margin: "auto",
        fontWeight: "900"
    }
})