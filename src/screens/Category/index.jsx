import { View, TouchableOpacity } from "react-native"
import styles from "./styles.js"
import Title from "../../components/Title/index.jsx"
import { useNavigation } from "@react-navigation/native"

export default function Category(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
       <Title title={"Category"}/>
       
       <Title title={"Home"}/>

       <TouchableOpacity 
       style={styles.button} 
       onPress={() => navigation.navigate("Profile", { user })}>
        <Text style={styles.text}> Go to Profile</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       style={styles.button} 
       onPress={() => navigation.navigate("Category")}>
        <Text style={styles.text}> Go to Category</Text>
       </TouchableOpacity>

        </View>
    )
}