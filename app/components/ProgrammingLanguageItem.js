import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  languageName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  experience: {
    fontSize: 14,
    color: "#666",
  },
});

const ProgrammingLanguageItem = ({ logo, name, experience }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.languageName}>{name}</Text>
        <Text style={styles.experience}>Опыт: {experience} лет</Text>
      </View>
    </View>
  );
};

export default ProgrammingLanguageItem;
