import { View } from "react-native"
import styles from "./styles.js"
import Title from "../../components/Title/index.jsx"

export default function Category(){
    return(
        <View style={styles.container}>
       <Title title={"Category"}/>
        </View>
    )
}