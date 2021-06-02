import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const AddItems = ({addItem}) => {
    const [text, setText] = useState('')

    const onChange = (value) =>{
        setText(value)
    }
    return (
        <View>
            <TextInput onChangeText={onChange} placeholder="Add item" style={styles.input} />
            <TouchableOpacity style={styles.btn} onPress={()=> addItem(text)}>
                <Text style={styles.btnText}> <AntDesign name="plus" size={24} color="black" />Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height:60,
        padding:8,
        fontSize:16
    },
    btn: {
        backgroundColor:'tomato',
        padding:5,
        margin:5
    },
    btnText: {
        color:'white',
        fontSize:20,
        textAlign:'center'

    }
})

export default AddItems;