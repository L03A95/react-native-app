import { View, StyleSheet, Image, Button, TouchableOpacity, Text} from "react-native";
import Coppel_logo from "../images/Coppel.png"
import Person_logo from "../images/person_logo.png"
import Write_logo from "../images/write_logo.png"


export default function Head ({navigation} : {navigation: any}) : JSX.Element {

    return (
        <View style={styles.background}>
            <Image source={Coppel_logo} style={{ width: 170, height: 70}}/>
            <TouchableOpacity onPress={() => navigation.navigate('Clients')} style={styles.touchableUser}>
                <Image source={Person_logo} style={styles.userLogo}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image source={Write_logo} style={styles.writeImg}/>
            </TouchableOpacity>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#ffda27",
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 20
    },
    writeImg: {
        width: 20,
        height: 20,
        padding: 18
    },
    userLogo: { 
        width: 25,
        height: 32
    },
    touchableUser: {
        padding: 10
    }
})