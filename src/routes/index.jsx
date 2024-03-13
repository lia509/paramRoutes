import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { StatusBar } from "expo-status-bar";
import TabRoutes from "./tab.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            {/* <StackRoutes/> */}
            <TabRoutes/>
            <StatusBar style="auto"/>

        </NavigationContainer>
    )
}