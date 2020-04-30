import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import DataContainer from "../components/DataContainer";
import store from "../redux/store";

export default function HomeScreen({navigation}) {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <DataContainer navigation={navigation}/>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});