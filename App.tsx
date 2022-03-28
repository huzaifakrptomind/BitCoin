import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "./src/routes/";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
