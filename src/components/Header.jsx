import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
    return(
        <View style={styles.container_header}>
            <Icon name="menu" size={50} color={"white"}/>
            <Text style={styles.source_text}> Menú</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container_header: {
        backgroundColor: "#4A4AD7",
        height: "8%",
        flexDirection: "row",
        alignItems: "center",
    },
    source_text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        //alignSelf: "center",
    }
});

export default Header;