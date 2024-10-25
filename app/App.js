import React, { useState } from "react";
import { SafeAreaView, FlatList, RefreshControl } from "react-native";
import ProgrammingLanguageItem from "./components/ProgrammingLanguageItem";
import initialLangs from "./LanguageList.js";

const App = () => {
  const [langs, setLangs] = useState(initialLangs);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setLangs(initialLangs);
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({ item }) => (
    <ProgrammingLanguageItem
      logo={item.logo}
      name={item.lang}
      experience={item.experience}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={langs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default App;
