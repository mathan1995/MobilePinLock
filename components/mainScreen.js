/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import ResetPw from "./resetPassword";

export default class App extends Component {
  state = {
    errorInfo: "",
    toggleView: true,
    validPin: "7890",
    blocked: false,
    pin: "",
    maxAttempt: 3,
    successInfo: ""
  };

  //making promises for the pin maxAttempt fail
  handleInputPin = async number => {
    console.log(number);
    await this.setState({ pin: this.state.pin + number }, () =>
      console.log(this.state.pin)
    );
    if (
      (await this.state.pin.length) === 4 &&
      (await this.state.pin) === this.state.validPin
    ) {
      //  Success the message Printed
      Alert.alert(
        "Success !",
        "Login Success !!!",
        [{ text: "DONE", onPress: () => this.handleClearInfo() }],
        { cancelable: false }
      );
      await this.setState({ pin: "" }, () => console.log(this.state.pin));
      await this.setState({ maxAttempt: 3 }, () =>
        console.log(this.state.maxAttempt)
      );
      console.log("Success");
    } else if ((await this.state.pin.length) === 4) {
      //  Error the message Printed
      if ((await this.state.maxAttempt) === 3) {
        await this.setState(
          { errorInfo: "PIN incorrect" },
          this.handleclearSuccessInfo()
        );
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.maxAttempt--;
        return;
      }
      if ((await this.state.maxAttempt) === 2) {
        await this.setState(
          {
            errorInfo: "PIN incorrect => Next incorrect maxAttempt cause Block."
          },
          this.handleclearSuccessInfo()
        );
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.maxAttempt--;
        return;
      }
      if ((await this.state.maxAttempt) <= 1) {
        await this.setState(
          {
            errorInfo: "You are currently block => Please reset your pin"
          },
          this.handleclearSuccessInfo()
        );
        await this.setState({ pin: "" }, () => console.log(this.state.pin));
        await this.state.maxAttempt--;
        return;
      }
    }
  };
  //clearing success iNfo
  handleclearSuccessInfo = () => {
    this.setState({ successInfo: "" });
  };
  //clearing Error iNfo
  handleclearErrorInfo = () => {
    this.setState({ errorInfo: "" });
  };

  //Clearing the error info by settingNewValue to state
  handleClearInfo = () => {
    this.setState({ errorInfo: "" }, () =>
      console.log("Cleared Error Message !!")
    );
    this.setState({ successInfo: "" }, () =>
      console.log("Cleared Success Message !!")
    );
  };

  //Clear Pin in the pin Block
  handleClearPin = () => {
    this.setState({ pin: "" }, () => console.log(this.state.pin));
    console.log(this.state.pin);
  };

  //View Toggle Window
  toggleViewFunc = () => {
    this.setState({ toggleView: !this.state.toggleView });
    this.setState(
      { successInfo: "Your New pin 1234" },
      this.handleclearErrorInfo()
    );
  };

  //Valid Pin Reset Value
  resetPinvalue = () => {
    this.setState({ validPin: "1234" });
  };

  /*Calling Reset Pin value function and makeing 
  Validation on resetting Process*/
  resetPin = () => {
    this.resetPinvalue();
    Alert.alert(
      "Confirm Reset !",
      "Do You want To reset your Pin ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "RESET", onPress: () => this.toggleViewFunc() }
      ],
      { cancelable: false }
    );
  };

  //Rendering The login pattern UI Pattern
  renderLogin = () => {
    if (this.state.toggleView === true) {
      return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
          <View style={styles.loginContainer}>
            <View style={{ flex: 0.5, backgroundColor: "#000" }} />
            <Text style={styles.title}>Enter Your Pin No </Text>
            <View
              style={{ flexDirection: "row", marginTop: 50, marginTop: 40 }}
            >
              <View
                style={
                  this.state.pin.length > 0
                    ? {
                        backgroundColor: "#000",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#485460",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 1
                    ? {
                        backgroundColor: "#000",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#485460",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 2
                    ? {
                        backgroundColor: "#000",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#485460",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                }
              />
              <View
                style={
                  this.state.pin.length > 3
                    ? {
                        backgroundColor: "#000",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20,
                        marginRight: 20
                      }
                    : {
                        borderColor: "#485460",
                        borderWidth: 2,
                        padding: 10,
                        borderRadius: 20
                      }
                }
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                width: "50%",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.state.errorInfo}
              </Text>
              <Text
                style={{
                  color: "green",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                {this.state.successInfo}
              </Text>
            </View>
            <View style={{ marginTop: 50, width: "80%" }}>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("1")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>1</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("2")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>2</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("3")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>3</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("4")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>4</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("5")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>5</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("6")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20,
                      border: "#000"
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>6</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity onPress={() => this.handleInputPin("7")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>7</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("8")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>8</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("9")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>9</Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 35
                    }}
                  >
                    <Text style={{ fontSize: 20 }} />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleInputPin("0")}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 10,
                      paddingRight: 20,
                      marginLeft: 25
                    }}
                  >
                    <Text style={{ fontSize: 20 }}>0</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.handleClearPin()}>
                  <View
                    style={{
                      width: "100%",
                      paddingTop: 10,
                      paddingBottom: 10,
                      paddingLeft: 20,
                      paddingRight: 20
                    }}
                  >
                    <Image
                      style={{ width: 30, height: 30 }}
                      source={require("./assets/delete.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                fontSize: 20,
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "#00416A"
              }}
            >
              <Text style={{ color: "#00416A" }}>Forgot PIN?</Text>
              <TouchableOpacity onPress={() => this.toggleViewFunc()}>
                <Text style={{ color: "#00416A" }}>Tap here to reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogin()}
        {this.state.toggleView === false ? (
          <ResetPw
            toggleViewFunc={this.toggleViewFunc.bind(this)}
            resetPin={this.resetPin.bind(this)}
          />
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loginContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#FFF",
    elevation: 2
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#00416A"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  gridfill:{
    
  }
});
