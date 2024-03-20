import { View, Text } from "react-native"
import styles from "./styles.js"
import Title from "../../components/Title/index.jsx"

export default function Profile({ route }){
    const { user } = route.params;
    return(
        <View style={styles.container}>
       <Title title={"Profile"}/>
       <Text> Nome: {user.name}</Text>
       <Text> Email: {user.email}</Text>
       <Text> Idade: {user.idade}</Text>
        </View>
    )
}