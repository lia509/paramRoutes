import { View } from "react-native"
import styles from "./styles.js"
import Title from "../../components/Title/index.jsx"

export default function Profile({ route }){
    const { user } = route.params;
    return(
        <View style={styles.container}>
       <Title title={"Profile"}/>
       <Text> </Text>
        </View>
    )
}