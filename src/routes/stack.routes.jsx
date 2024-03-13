import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Category from "../screens/Category";

const Satck = createNativeStackNavigator();

const StackRoutes = () => {
    return(
        <StackRoutes.Navigator>
            <Satck.Screen name="Home" component={Home}/>
            <Satck.Screen name="Profile" component={Profile}/>
            <Satck.Screen name="Category" component={Category}/>
        </StackRoutes.Navigator>
    )
}
export default StackRoutes;