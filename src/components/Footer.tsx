import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import liLogo from '../images/linkedin.png'
import gitLogo from '../images/github-icon-2048x1988-jzvzcf2t.png'



export default function Footer (): JSX.Element {


    return (
        <View style={styles.background}>
            
            <Text style={styles.text}>App desarrollada con 💚 por Liam  M. Perez Lupia</Text>
            <Text style={styles.text}>2023 © Coppel todos los derechos reservados</Text>
            <View style={styles.images_wrapper}>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/liam-perez-lupia-33a189257/')}>
                    <Image source={liLogo} style={styles.image}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://github.com/L03A95')}>
                    <Image source={gitLogo}  style={styles.image}></Image>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#06375d",
        marginTop: 20,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: "wrap",
    },
    text: {
        margin: 5,
        fontSize: 10,
        color: "#c4c4c4"
    },
    image: {
        height: 30,
        width: 30,
        marginVertical: 5,
        marginHorizontal: 10
    },
    images_wrapper: {
        flexDirection: "row",
        alignSelf: "flex-end"
    }
})