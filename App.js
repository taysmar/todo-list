/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  FlatList,
  TextInput,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type Props = {};
export default class App extends Component<Props>{

  constructor(props) {
    super(props)
    this.state = {
      text:"",
      itens:[
        {key: "0", desc:"Item 1", done:false},
        {key: "1", desc:"Item 2", done:false},
      ]
    }
      this.inserirItem = this.inserirItem.bind(this)


  } 
  renderItem(obj){
    return(
      <Text style={styles.cell}>{obj.item.desc}</Text>
    )
  }

  inserirItem() {
    let newItem= {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      done:false
    }

  

    let itens = this.state.itens;
    itens.push(newItem)
    this.setState({itens})

    let text= ""
    this.setState({text})

   
  }

  render () {
    return (
      <View style={styles.container}>
       <FlatList style={styles.lista} data = {this.state.itens} renderItem={this.renderItem} extraData={this.state} />
       <View style={styles.inputView}>
         <TextInput style={styles.Input} onChangeText={(text) => {this.setState({text})}} value ={ this.state.text} />
         <Button onPress={this.inserirItem} title="Inserir"></Button>
       </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: '#F5FCFF'
  },
  lista:{
    marginTop: 24,
  },
  cell:{
    paddingTop:20,
    paddingBottom: 20,
    backgroundColor: '#94B8EB',
    fontSize: 18,
    marginBottom: 2,

  },
  inputView:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  Input :{
    backgroundColor: 'white',
    borderColor: "#CCC",
    borderWidth: 3,
    padding: 10,
    margin:20,
    flex: 1
  }
});

