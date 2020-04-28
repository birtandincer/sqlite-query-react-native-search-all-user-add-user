/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';
import SQLite from 'react-native-sqlite-storage';
let testArr = [];

var db = SQLite.openDatabase('UserDatabase.db');
export default class Home extends Component {
  state = {
    searchQuery: '',
    loading: true,
    datas: [],
    musteriAra: '',
  };
  componentDidMount() {
    this.searchData();
  }
  empty = () => {
    testArr = [];
  };

  searchData = () => {
    var query = 'SELECT * FROM UserData WHERE name LIKE ?';
    var params = [`%${this.state.searchQuery}%`];
    db.transaction(tx => {
      tx.executeSql(query, params, (tx, results) => {
        console.log('length:', results.rows.length);
        for (let m = 0; m < results.rows.length; m++) {
          testArr.push(results.rows.item(m).name);
        }
        console.log('ARAMA SONUCU FİLTRE:', testArr);
        this.setState({
          datas: testArr,
        });
      });
    });
    this.empty();
  };

  static navigationOptions = ({navigation}) => ({
    title: 'Home',
    headerRight: (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddUser'), {onBack: this.onBack};
          }}>
          <Icon name="plus" size={20} style={{marginRight: 20}} />
        </TouchableOpacity>
        <Icon name="edit" size={20} />
      </View>
    ),
  });

  render() {
    const veriler = this.state.datas;
    console.log('*********************  RENDER CALISTI ****************');
    console.log('ARAMA HARFİ:', this.state.searchQuery);
    console.log('veriler', veriler);
    return (
      <View>
        <SearchBar
          placeholder="Search by name"
          onChangeText={text => this.setState({searchQuery: text})}
          value={this.state.searchQuery}
          onKeyPress={this.searchData}
        />

        <FlatList
          data={veriler}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View key={item.id} style={{backgroundColor: 'white', padding: 10}}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
