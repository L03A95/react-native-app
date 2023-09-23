import { ScrollView, StyleSheet, Text, View, TextInput, Button } from "react-native";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Head from "./Head";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { store } from "../store/store";

interface homeProps {
    navigation: any,
    userScreenHandler: Function
}

export default function Home ({navigation, userScreenHandler} : homeProps): JSX.Element {

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        dni: '',
        birthdate: '',
        civil: 'Soltero',
        scholarity: 'Primario',
        city: '',
        address: '',
        phone: '',
        disponability: '',
        jobType: 'Bajo relacion de dependencia',
        jobDescription: '',
        ref1Name: '',
        ref1Address: '',
        ref1Phone: '',
        ref2Name: '',
        ref2Address: '',
        ref2Phone: ''
    })

    const blankUser = {
        name: '',
        lastname: '',
        dni: '',
        birthdate: '',
        civil: 'Soltero',
        scholarity: 'Primario',
        city: '',
        address: '',
        phone: '',
        disponability: '',
        jobType: 'Bajo relacion de dependencia',
        jobDescription: '',
        ref1Name: '',
        ref1Address: '',
        ref1Phone: '',
        ref2Name: '',
        ref2Address: '',
        ref2Phone: ''
    }

    const handleUserInput = (input : string, value: string) => {
        setUser({...user, [input]: value})
    }

    const handleButton = () => {

        if (!user.name) { return null}
        if (!user.dni) {return null}
        const storeUsers : string | undefined = store.getString('usuario')
        if(storeUsers !== undefined) {
            const userObject = JSON.parse(storeUsers)
            if(userObject.find((u : any) => u.dni == user.dni && u.dni != '')) {
                return null
            }
            userObject.push(user)
            store.set('usuario', JSON.stringify(userObject))
        } else {
            store.set('usuario', JSON.stringify([user]))
        }
        
        userScreenHandler(user)
        setUser(blankUser)
    }

    return (
        <ScrollView style={styles.background}>
            <Head navigation={navigation}></Head>
            <Section>
                <>
                <SectionTitle title='Datos personales'/>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Nombre(s)*</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.name}
                    onChangeText={(text) => handleUserInput("name", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Apellido(s)*</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.lastname}
                    onChangeText={(text) => handleUserInput("lastname", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>DNI*</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.dni}
                    onChangeText={(text) => handleUserInput("dni", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Fecha de nacimiento*</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.birthdate}
                    onChangeText={(text) => handleUserInput("birthdate", text)}
                    />
                </View>

                <Text style={styles.title}>Estado Civil</Text>
                <Picker style={styles.input} onValueChange={(value : string) => handleUserInput("civil", value)} selectedValue={user.civil}>
                    <Picker.Item label="Soltero" value="Soltero"/>
                    <Picker.Item label="Casado" value="Casado"/>
                    <Picker.Item label="Viudo" value="Viudo"/>
                </Picker>

                <Text style={styles.title}>Escolaridad</Text>
                <Picker style={styles.input} onValueChange={(value : string) => handleUserInput("scholarity", value)} selectedValue={user.scholarity}>
                    <Picker.Item label="Primario" value="Primario"/>
                    <Picker.Item label="Secundario" value="Secundario"/>
                    <Picker.Item label="Terciario" value="Terciario"/>
                    <Picker.Item label="Universitario incompleto" value="Universitario incompleto"/>
                    <Picker.Item label="Universitario" value="Universitario"/>
                </Picker>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Barrio y localidad</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.city}
                    onChangeText={(text) => handleUserInput("city", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Direccion y numeración</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.address}
                    onChangeText={(text) => handleUserInput("address", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Número de telefono</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.phone}
                    onChangeText={(text) => handleUserInput("phone", text)}
                    />
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Disponibilidad horaria</Text>
                    <TextInput
                    style={styles.input1}
                    value={user.disponability}
                    onChangeText={(text) => handleUserInput("disponability", text)}
                    />
                </View>
                </>
            </Section>
            <Section>
                <>
                <SectionTitle title='Datos de empresa'/>
                <Text style={styles.title}>Tipo de empleo</Text>
                <Picker style={styles.input} onValueChange={(value : string) => handleUserInput("jobType", value)} selectedValue={user.jobType}>
                    <Picker.Item label="Bajo relacion de dependencia" value="Bajo relacion de dependencia"/>
                    <Picker.Item label="Monotributista / Autonomo" value="Monotributista / Autonomo"/>
                    <Picker.Item label="Empleado municipal" value="Empleado municipal"/>
                </Picker>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Descripción de empleo</Text>
                    <TextInput style={styles.input1}
                    value={user.jobDescription}
                    onChangeText={(text) => handleUserInput("jobDescription", text)}
                    ></TextInput>
                </View>
                </>  
            </Section>
            <Section>
                <>
                <SectionTitle title="Referente (1)"/>
                <View style={styles.background1}>
                    <Text style={styles.title1}>Nombre completo</Text>
                    <TextInput style={styles.input1}
                    value={user.ref1Name}
                    onChangeText={(text) => handleUserInput("ref1Name", text)}
                    ></TextInput>
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Dirección</Text>
                    <TextInput style={styles.input1}
                    value={user.ref1Address}
                    onChangeText={(text) => handleUserInput("ref1Address", text)}
                    ></TextInput>
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Número telefónico</Text>
                    <TextInput style={styles.input1}
                    value={user.ref1Phone}
                    onChangeText={(text) => handleUserInput("ref1Phone", text)}
                    ></TextInput>
                </View>

                <SectionTitle title="Referente (2)"/>
                <View style={styles.background1}>
                    <Text style={styles.title1}>Nombre completo</Text>
                    <TextInput style={styles.input1}
                    value={user.ref2Name}
                    onChangeText={(text) => handleUserInput("ref2Name", text)}
                    ></TextInput>
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Dirección</Text>
                    <TextInput style={styles.input1}
                    value={user.ref2Address}
                    onChangeText={(text) => handleUserInput("ref2Address", text)}
                    ></TextInput>
                </View>

                <View style={styles.background1}>
                    <Text style={styles.title1}>Número telefónico</Text>
                    <TextInput style={styles.input1}
                    value={user.ref2Phone}
                    onChangeText={(text) => handleUserInput("ref2Phone", text)}
                    ></TextInput>
                </View>
                </>
            </Section>
            <Button title="Subir datos" onPress={() => handleButton()}></Button>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
      backgroundColor: "#f9f9d9",
    },
    input: {
        backgroundColor:'#fff',
        color: "#0a6cb7",
        fontWeight: "500",
        fontSize: 16,
        marginHorizontal: 5,
    },
    title: {
        marginBottom: 10,
        fontSize: 18,
        color: "#0a6cb7",
        fontWeight: "800",
        marginHorizontal: 5,
        marginTop: 20
    },
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