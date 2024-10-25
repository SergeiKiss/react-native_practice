import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import ProgrammingLanguageItem from "./components/ProgrammingLanguageItem.js";
import langs from "./LanguageList.js";

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={langs}
        renderItem={({ item }) => (
          <ProgrammingLanguageItem
            logo={item.logo}
            name={item.lang}
            experience={item.experience}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default App;
