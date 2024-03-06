import React from "react";
import {Text, View, StyleSheet, Image, Button, Alert} from "react-native";
import Header from "../components/Header";

const Main = () => {
    const onPressButtonClick = () => {
        Alert.alert("Hola mundo");
    };
    return(
        <View style={styles.mainContainer}>
            <Header/>
            <Image source={require('../media_resources/marathon-1.jpg')} style={{width: 300, height: 300}}/>
            <View style={[styles.row, styles.containerBody]}>
                <View style={[styles.box, {backgroundColor: 'powderblue'}]} />
                <View style={[styles.box, {backgroundColor: 'skyblue'}]} />
                <View style={[styles.box, {backgroundColor: 'steelblue'}]} />
            </View>
            <View>
                <Button onPress={onPressButtonClick} title="Press me"/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor:'#FFFFFF',
        height: '100%',
    },
    box: {
        width: 80,
        height: 80,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    containerBody: {
        width: '100%',
        backgroundColor: 'red',
        padding: '3'
    }
});

export default Main;