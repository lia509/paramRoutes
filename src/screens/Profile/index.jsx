import { View, Text } from "react-native-reanimated/lib/typescript/Animated"
import styles from "./styles.js"
import Title from "../../components/Title/index.jsx"

export default function Profile(){
    return(
        <View style={styles.container}>
       <Title title={Profile}/>
        </View>
    )
}