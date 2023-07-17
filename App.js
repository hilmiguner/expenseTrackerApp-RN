import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ManageExpense from "./screens/ManageExpense";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return(
    <BottomTabs.Navigator screenOptions={{
      
    }}>
      <BottomTabs.Screen name="AllExpense" component={AllExpenses}/>
      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses}/>
    </BottomTabs.Navigator>
  );
}

function App() {
  return(
    <>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="ExpensesOverview" 
          component={ExpensesOverview}
          options={{
            headerShown: false,
          }}
          />
          <Stack.Screen name="ManageExpense" component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;