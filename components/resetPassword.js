import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Reset = props => (
  <View style={styles.resetContainer}>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>
        Reset your Password
      </Text>
    </View>
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
      }}
    >
      <TouchableOpacity onPress={() => props.toggleViewFunc()}>
        <Text>Enter Your Password again</Text>
      </TouchableOpacity>
    </View>

    <View
      style={{
        marginTop: 200,
        padding: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFF"
      }}
    >
      <TouchableOpacity onPress={() => props.resetPin()}>
        <View style={{ width: "100%", backgroundColor: "#FFF" }}>
          <Text style={{ color: "#fff" }}>Reset PIN</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  resetContainer: {
    flex: 1,
    position: "absolute",
    width: "100%",
    height: "100%",
    marginLeft: 20,
    marginBottom: 20,

    bottom: 0,
    margin: 10,

    alignItems: "center",
    backgroundColor: "#fafafa"
  }
});

export default Reset;
