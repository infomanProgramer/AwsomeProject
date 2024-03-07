import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";

const CategoriaHabitos = ({navigation}) => {
    const irCategoriaHabitos = () => {
        navigation.navigate('CategoriaHabitos')
    };
    const irListaHabitos = () => {
        navigation.navigate('ListaHabitos')
    };
    const irRegistroHabitos = () => {
        navigation.navigate('RegistroHabitos')
    };
    const irMain = () => {
        navigation.navigate('Home')
    };
    return(
        <View style={style.container}>
            <Button style={[style.button_style, {backgroundColor: "#87C644"}]} onPress={irCategoriaHabitos} title="Categoria Habitos"/>
            <Button style={[style.button_style, {backgroundColor: "#44C6B9"}]} onPress={irListaHabitos} title="Lista Habitos"/>
            <Button style={[style.button_style, {backgroundColor: "#AE44C6"}]} onPress={irRegistroHabitos} title="Registro Habitos"/>
            <Button style={[style.button_style, {backgroundColor: "#C67444"}]} onPress={irMain} title="Main"/>
            <Text sytle={style.text_categoria_habito}>Categoria Habitos</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    text_categoria_habito: {
        width: '100%',
        marginTop: '5',
        marginBottom: '5',
        backgroundColor: "#D0D7C9"
    },
    button_style: {
        width: '100%',
        borderRadius: '5',
        height: '50',
        marginBottom: '5',
        marginTop: '5',
    }
});

export default CategoriaHabitos