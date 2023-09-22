import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";
import Coppel_logo from "../images/Coppel.png"

interface clientProps {
    navigation: any,
    name: string,
    lastname: string,
    dni: string,
    birthdate: string,
    civil: string,
    scholarity: string,
    city: string,
    address: string,
    phone: string,
    disponability: string,
    jobType: string,
    jobDescription: string,
    ref1Name: string,
    ref1Address: string,
    ref1Phone: string,
    ref2Name: string,
    ref2Address: string,
    ref2Phone: string
}

export default function ClientScreen ({navigation, name, lastname, dni, civil, scholarity, city, address, phone, disponability, jobType, jobDescription, ref1Name, ref1Address, ref1Phone, ref2Name, ref2Address, ref2Phone} : clientProps) : JSX.Element {

    return  <ScrollView style={styles.background}>
                <View style={styles.backgroundHeader}>
                    <Image source={Coppel_logo} style={{ width: 170, height: 70}}/>
                    <Button title="<" onPress={() => navigation.navigate("Clients")}></Button>
                </View>
                {/* info personal */}
                <Text>{name}</Text>
                <Text>{lastname}</Text>
                <Text>{dni}</Text>
                <Text>{civil}</Text>
                <Text>{scholarity}</Text>
                <Text>{city}</Text>
                <Text>{address}</Text>
                <Text>{phone}</Text>
                <Text>{disponability}</Text>

                {/* info de empleo */}
                <Text>{jobType}</Text>
                <Text>{jobDescription}</Text>

                {/* info referentes 1 y 2 */}
                <Text>{ref1Name}</Text>
                <Text>{ref1Address}</Text>
                <Text>{ref1Phone}</Text>

                <Text>{ref2Name}</Text>
                <Text>{ref2Address}</Text>
                <Text>{ref2Phone}</Text>
            </ScrollView>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#f9f9d9'
    },
    backgroundHeader: {
        backgroundColor: "#ffda27",
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 20
    }
})