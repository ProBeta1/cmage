import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux";
import { setCurrentData } from "../redux";

import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Switch,
  ActivityIndicator,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";

function DataContainer({
  navigation,
  loading,
  userData,
  fetchData,
  setCurrentData,
}) {
  //console.log(userData);
  const [query, setQuery] = useState("ice cream");
  const [data, setData] = useState("");
  const [content, setContent] = useState({
    urls: {
      regular: "https://indianmemetemplates.com/storage/abhi-hum-zinda-hai.jpg",
    },
    alt_description: "Rdx is still alive , head back",
    created_at: "Not found",
    likes: "Infinite , cant fit here..",
    user: { name: "Fetching...." },
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const [loader, setLoader] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const ld = (
    <View style={styles.load}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );

  useEffect(() => {
    fetchData(query);
    setData(userData);
    setLoader(loading);
  }, [loading, query]);

  const handleTouch = (item) => {
    setContent(item);
    //console.log("CONTENT IS " + content.urls.regular)
    //console.log(loader);
    const passIt = [
      content.urls.regular,
      content.alt_description,
      content.created_at,
      content.likes,
      content.user.name,
    ];
    setCurrentData(passIt);
    navigation.navigate("Details", { showIt: passIt });
  };

  return !loader ? (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.searchBar}>
          <TextInput
            onChangeText={(text) => setQuery(text)}
            value={query}
            autoCorrect
            autoFocus
          />
        </View>
        <View>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => (
            <View>
              <Card style={styles.walls} theme={isEnabled}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => handleTouch(item)}
                >
                  <Image
                    source={{ uri: item.urls.regular }}
                    style={{ width: 120, height: 120 }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </Card>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  ) : (
    <View style={styles.load}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    userData: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (query) => dispatch(fetchData(query)),
    setCurrentData: (item) => dispatch(setCurrentData(item)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  load: {
    flex: 1,
    justifyContent: "center",
  },
  searchBar: {
    padding: 5,
    height: 40,
    width: "80%",
    marginLeft: 30,
    borderColor: "black",
    borderWidth: 2,
    alignItems: "center",
    borderRadius: 20,
    borderTopWidth: 5,
    borderBottomWidth: 5,
  },
  walls: {
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    alignItems: "center",
    marginBottom: 50,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);
