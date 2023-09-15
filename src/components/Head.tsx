import { View, StyleSheet, Image, Text } from "react-native";
import Coppel_logo from "../images/Coppel.png"
import Person_logo from "../images/person_logo.png"
import Write_logo from "../images/write_logo.png"


export default function Head () : JSX.Element {

    return (
        <View style={styles.background}>
            <Image source={Coppel_logo} style={{ width: 170, height: 70}}/>
            <Image source={Person_logo} style={{ width: 20, height: 30}}/>
            <Image source={Write_logo} style={{ width: 30, height: 30}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffda27",
        paddingLeft: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})