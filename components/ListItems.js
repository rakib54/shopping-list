import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

const ListItems = ({item,handleDelete}) => {
    return (
        <TouchableOpacity style={styles.ListItems}>
            <View style={styles.ListItemsView}>
                <Text style={styles.ListItemsText}>{item.text}</Text>
                <AntDesign 
                name="close" 
                size={24} color="firebrick" 
                onPress={() => handleDelete(item.id)} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ListItems:{
       padding:15,
       backgroundColor:'grey',
       borderBottomWidth:1,
       borderColor:"#eee" 
    },
    ListItemsView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    ListItemsText:{
        fontSize:18
    }
})

export default ListItems;