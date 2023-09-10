import { Text, TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

interface InputSectionProps {
    title: string;
}

export default function InputSection ({title} : InputSectionProps) : JSX.Element {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput></TextInput>
        </View>
    )
}