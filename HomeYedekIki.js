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

let db = SQLite.openDatabase('UserDatabase.db');
let testArr = [];
export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      loading: true,
      data: [],
      musteriAra: '',
    };
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'UserData' +
          ' (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,age INTEGER)',
      );
    });
  }

  componentDidMount() {
    this.props.navigation.addListener('willFocus', () => {
      console.log('didmount testar:', testArr);
      this.empty();
      this.fetchData();
     
    });
  }

  empty() {
    testArr = [];
  }

  fetchData() {
    var query = 'SELECT name FROM UserData';
    var params = [];
    db.transaction(function(tx) {
      tx.executeSql(query, params, (tx, res) => {
        console.log('fetch res :', res);
        console.log('fetch res.rows :', res.rows);
        console.log('fetch res.rows.lengt :', res.rows.length);

        if (res.rows.length > 0) {
          for (i = 0; i < res.rows.length; i++ > 0) {
            testArr.push(res.rows.item(i).name);
          }
          console.log('fetch testarr :', testArr);
        }
      });
      this.empty();
      this.setState({data: testArr, loading: false}, () =>
      console.log('didmount data:', this.state.data),
    );
    });
  }

  searchData() {
    this.empty();

    var query = 'SELECT * FROM UserData WHERE name LIKE ?';
    var params = [`%${this.state.searchQuery}%`];
    db.transaction(function(tx) {
      tx.executeSql(query, params, (tx, res) => {
        console.log('fetchdata res:', res);
        console.log('fetchdata res.rows:', res.rows);
        if (res.rows.length > 0) {
          for (i = 0; i < res.rows.length; i++ > 0) {
            testArr.push(res.rows.item(i).name);
          }
          console.log('fetchdata testarr:', testArr);
        }
      });
    });
  }

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
    console.log('render data:', this.state.data);
    console.log('render testarrr:', testArr);
    console.log('searchquery:', this.state.searchQuery);
    return (
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Search by name"
          onChangeText={text => this.setState({searchQuery: text})}
          value={this.state.searchQuery}
          onFocus={this.searchData()}
        />
        <FlatList data={this.state.data} />
      </View>
    );
  }
}
