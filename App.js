import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Alert } from 'react-native'
import Header from './components/Header'
import { uuid } from 'uuidv4';
import ListItems from './components/ListItems';
import AddItems from './components/AddItems';

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Rice' },
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'IceCream' },
    { id: uuid(), text: 'juice' }
  ])

  const handleDelete = (id) => {
    setItems(restItem => {
      return restItem.filter(item => item.id != id)
    })
  }
  const addItem = (text) => {
    if(!text){
      Alert.alert('Error', 'please enter an item',{text: 'Ok'})
    }else{
      setItems(restItem => {
        return [{ id: uuid(), text }, ...restItem]
      })
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItems addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItems item={item} handleDelete={handleDelete} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }

});

export default App;