import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

Header.defaultProps = {
    title:'Grocery Shop Item'
}

const styles = StyleSheet.create({
    container:{
        height:60,
        padding:15,
        backgroundColor:'tomato'
    },
    text : {
        color:'white',
        fontSize:23,
        textAlign:'center',
    }

})

export default Header;