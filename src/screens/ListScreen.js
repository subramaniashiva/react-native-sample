import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const ListScreen = () => {
  const shopList = [{
    name: 'Viggy shop',
    location: '0.3 miles'
  }, {
    name: 'Siva shop',
    location: '1.8 miles'
  }, {
    name: 'Annachi shop',
    location: '2.1 miles'
  }, {
    name: 'Petti kadai',
    location: '3.7 miles'
  }]
  return (
    <View style={styles.container}>
      <Text>Shops near you:</Text>
      <FlatList
        keyExtractor={shop => shop.name}
        data={shopList}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>Location - {item.location}</Text>
          </View>)}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ListScreen;