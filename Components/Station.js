import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';


export  default class Station extends React.Component {
  constructor(props) {
      super(props)
  }
  
  render() {
      return (
          <View>
       <Card title={this.props.stationName} 
       image={require('this.props.stationImage')}

       >
          <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
          <Text>Lines: {this.props.stationLines} </Text>
          <Text>Zone: {this.props.stationZones}</Text>
          <Button title='MORE INFO'  
          buttonStyle={{
          backgroundColor: "rgba(92, 99,216, 1)",
          width: 100,
          height: 35,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 85
  }} />
          </Card>



          

        </View>
   
      )
  }
  
};