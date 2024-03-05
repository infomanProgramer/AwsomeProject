import React from "react";
import {Text, View, StyleSheet} from "react-native";
import Header from "../components/Header";

const Main = () => {
    return(
        <View style={styles.mainContainer}>
            <Header/>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#FFFFFF',
        color: '',
        padding: 20,
        height: '100%',
    }
});

export default Main;