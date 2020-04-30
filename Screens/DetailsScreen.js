import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import DetailContainer from "../components/DetailContainer";
import store from "../redux/store";

export default function DetailsScreen() {
  return (
    <Provider store={store}>
        <ScrollView style={styles.container}>
          <DetailContainer />
        </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});