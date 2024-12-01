import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
import "react-native-gesture-handler";
import "react-native-reanimated";
import { ThemeProvider } from "./src/theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
