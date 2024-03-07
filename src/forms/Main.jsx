import React, {useRef, useEffect} from "react";
import {Animated, StyleSheet, Text, View, Button} from "react-native";

const FadeInView = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  
    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 10000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);
  
    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        {props.children}
      </Animated.View>
    );
  };

const Main = ({navigation}) => {
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
            <Button style={style.button_style} onPress={irCategoriaHabitos} title="Categoria Habitos"/>
            <Button style={style.button_style} onPress={irListaHabitos} title="Lista Habitos"/>
            <Button style={style.button_style} onPress={irRegistroHabitos} title="Registro Habitos"/>
            <Button style={style.button_style} onPress={irMain} title="Main"/>
            <Text sytle={style.text_categoria_habito}>Primera Animacion</Text>
            <FadeInView
                style={{
                width: 250,
                height: 50,
                backgroundColor: 'powderblue'
            }}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
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
        color: 'green'
    }
});

export default Main