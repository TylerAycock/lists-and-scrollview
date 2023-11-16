import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const pressHandler = (id) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id !== id)
    })
  }

  const [people, setPeople] = useState([
    { name: 'Tyler', id: 1 },
    { name: 'Yoshi', id: 2 },
    { name: 'Mario', id: 3 },
    { name: 'Luigi', id: 4 },
    { name: 'Peach', id: 5 },
    { name: 'Toad', id: 6 },
    { name: 'Bowser', id: 7 },
  ])
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item} >{item.name}</Text>
          </TouchableOpacity>
        )}
        numColumns={2}
      />
      {/* this is one way to create a list */}
      {/* <ScrollView>
        {people.map(person => {
          return (
            <View key={person.key}>
              <Text style={styles.item} >{person.name}</Text>
            </View>
          )
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
