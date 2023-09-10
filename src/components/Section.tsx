import { StyleSheet, View } from "react-native";


interface PropsInterface {
    children: JSX.Element
}

export default function Section ({children} : PropsInterface) {

    return (
        <View style={styles.background}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffda27",
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
})