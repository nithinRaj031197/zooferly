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
// ios: 1036756753438-8hdiqcjs34c69mpe32mtbmpv5i50uetk.apps.googleusercontent.com
// android: 1036756753438-5u02o3npqm6delu3l66kun39jlc5urpr.apps.googleusercontent.com
// expo go: 1036756753438-cgodumk8lpqfghtsbi49pkrms6hqipe1.apps.googleusercontent.com
