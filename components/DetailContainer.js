import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchData, fetchDataSuccess } from "../redux";

import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
import Card from "./Card";

function DetailContainer({ item }) {
  const [data, setData] = useState("");

  useEffect(() => {
    setData(item);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: data[0] }}
          style={{ width: 400, height: 400 }}
          resizeMode="cover"
        ></Image>
      </View>
      <Card theme={true} style={styles.box}>
        <Text>Description : {data[1]} </Text>
        <Text>Existing since : {data[2]}</Text>
        <Text>Loved by : {data[3]} users</Text>
        <Text>Credits : {data[4]}</Text>
      </Card>
    </View>
  );
}

const mapStateToProps = (state) => {
  return {
    item: state.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchDataSuccess: (query) => dispatch(fetchDataSuccess(query)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image:{
    justifyContent:'center',
    alignItems:'center',
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer);
