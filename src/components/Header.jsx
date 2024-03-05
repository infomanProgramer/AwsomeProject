import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return(
        <View>
            <EntypoIcon name="menu" size={50}/>
            <Text>Menú</Text>
            <Text>Rafael</Text>
        </View>
    );
};

export default Header;