import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const App = () => {
  
  this.state = {
    image: [],
    photo: [],
  };
  
  const PrintImage = () =>{
    
    fetch('https://api.unsplash.com/collections/1580860/photos', {method: 'GET'})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState(
                {
                  image: responseJson
                },
            );
        });
    if(image != null){
      return(
        <View>
          <ScrollView>
            <FlatList data={this.state.image} renderItem = {({items}) => <Image source = {require(items)} style={styles.img}></Image>}></FlatList>
          </ScrollView>
        </View>
      );
    }
  }
  
  const PrintPhoto = () =>{
    fetch('https://api.unsplash.com/collections/139386/photos', {method: 'GET'})
    .then((response) => response.json())
    .then((responseJson) => {
        this.setState(
            {
              photo: responseJson
            },
        );
    });
    if(image != null){
      return(
        <View>
           <ScrollView>
              <FlatList data={this.state.photo} renderItem = {({items}) => <Image source = {require(items)} style={styles.img}></Image>}></FlatList>
           </ScrollView>
        </View>
      );
    }
  }
  return (
    <View style = {styles.header}>
      <Text style = {styles.text}>Image App</Text>
      <Icon name = "Select" size= {50} color = 'green' onPress={PrintImage}>Pets</Icon>    <Icon name = "Select" size= {50} color = 'blue' onPress={PrintPhoto}>Nature</Icon>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center'
  },
  img: {
    width: 50,
    height: 80,
  }
});


export default App;
