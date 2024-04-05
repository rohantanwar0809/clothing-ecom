import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes";
import { Provider } from "react-redux";
import store from "./src/store";
import StackRoutes from "./src/StackRoutes";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackRoutes />
        {/* <Routes /> */}
      </NavigationContainer>
    </Provider>
  );
}
