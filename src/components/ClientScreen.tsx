import { View, Text } from "react-native";

interface clientProps {
    navigation: any,
    name: string,
    lastname: string,
    dni: string,
    birthdate: string,
    civil: string,
    scholarity: string,
    city: string
}


export default function ClientScreen ({navigation, name, lastname, dni, civil, scholarity, city} : clientProps) : JSX.Element {

    return <View><Text>{name}</Text></View>
}