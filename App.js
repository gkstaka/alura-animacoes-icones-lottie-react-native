import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Feather } from "react-native-vector-icons";
import LottieView from "lottie-react-native";

export default function App() {
    let animacao = React.createRef();

    function comecarAnimacao() {
        animacao.current.play();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={comecarAnimacao}>
                <Feather name="play" size={60} color="black" />
            </TouchableOpacity>
            <LottieView
                source={require("./assets/check.json")}
                style={{ width: 200, height: 200 }}
                loop={false}
                ref={animacao}
            />
            <Button title="Comecar animacao" onPress={comecarAnimacao} />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
