/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-dupe-class-members */
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
      item:[],
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
      console.log(testArr);
      this.empty();
      this.searchItem();
      //this.fetchData();
      this.setState({item: testArr, loading: false}, () =>
        console.log("data :",this.state.data),
      );
    });
  }

  empty() {
    //empty your array
    testArr = [];
  }

  deleteItem(name) {
    console.log(name);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM UserData WHERE UserData.name = ?',
        [name],
        (tx, res) => {
          console.log(res);
        },
      );
    });
    this.empty();
    this.fetchData();
    this.setState({data: testArr, loading: false}, () =>
      console.log(this.state.data),
    );
  }

  fetchData() {
    var query = 'SELECT name FROM UserData';
    var params = [];
    db.transaction(function(tx) {
      tx.executeSql(query, params, (tx, res) => {
        console.log(res);
        console.log(res.rows);
        if (res.rows.length > 0) {
          for (i = 0; i < res.rows.length; i++ > 0) {
            testArr.push(res.rows.item(i).name);
          }
          console.log(testArr);
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
  
  empty() {
    //empty your array
    testArr = [];
  }
  searchItem() {
  // db.transaction(tx => {

  //   console.log("********************")
  //     tx.executeSql(
  //       'SELECT * FROM UserData WHERE name LIKE ?',
  //       [`%ek%`],
  //       (tx, results) => {
  //         for (var i = 0; i < results.rows.length; i++) {
  //           var row = results.rows.item(0);
  //           this.setState({item: row.name});
  //           console.log('item:', results.rows.item(i));
  //           testArr.push(res.rows.item(i).name);

  //         }
      
  //           for (i = 0; i < results.rows.length; i++ > 0) {
  //             testArr.push(res.rows.item(i).name);
  //           }
  //           console.log(testArr);
        
  //       },
  //     );
  //   });
  console.log("**************")
  var query = 'SELECT * FROM UserData WHERE name LIKE ?';
  var params = [`%ek%`];
  db.transaction(function(tx) {
    tx.executeSql(query, params, (tx, res) => {
    //  console.log("res:",res);
     // console.log("res.rows:",res.rows);
      if (res.rows.length > 0) {
        for (i = 0; i < res.rows.length; i++ > 0) {
          testArr.push(res.rows.item(i).name);
        }
        console.log("arama :",testArr);
      }
    });
  });
  this.empty();
  this.setState({item: testArr, loading: false});
  }


  render() {
    //console.log(this.state.data);
    console.log("testArr:",testArr);
    return (
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Search by name"
          onChangeText={text => this.setState({searchQuery: text})}
          value={this.state.searchQuery}
        />
        <View>
          <TouchableOpacity onPress={() => this.searchItem()}>
            <Icon name="trash" size={50} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => this.deleteItem(item)}>
                <Icon name="trash" size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

// "react": "16.11.0",
// "react-native": "0.62.2",
// "react-native-elements": "^1.2.1",
// "react-native-gesture-handler": "^1.4.1",
// "react-native-sqlite-storage": "^4.1.0",
// "react-native-vector-icons": "^6.6.0",
// "react-navigation": "^4.0.6",
// "react-navigation-stack": "^1.8.0"


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
      this.setState({data: testArr, loading: false}, () =>
        console.log('didmount data:', this.state.data),
      );
    });
  }
  searchItem() {
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'DELETE FROM UserData WHERE UserData.name = ?',
    //     [name],
    //     (tx, res) => {
    //       console.log('delete res:', res);
    //     },
    //   );
    // });
    // this.empty();
    // this.fetchData();
    // this.setState({data: testArr, loading: false}, () =>
    //   console.log('delete data:', this.state.data),
    // );
  }
  empty() {
    //empty your array
    testArr = [];
  }

  deleteItem(name) {
    console.log(name);
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM UserData WHERE UserData.name = ?',
        [name],
        (tx, res) => {
          console.log('delete res:', res);
        },
      );
    });
    this.empty();
    this.fetchData();
    this.setState({data: testArr, loading: false}, () =>
      console.log('delete data:', this.state.data),
    );
  }

  searchItem() {
    // db.transaction(tx => {
    //   tx.executeSql(
    //     'DELETE FROM UserData WHERE UserData.name = ?',
    //     [name],
    //     (tx, res) => {
    //       console.log('delete res:', res);
    //     },
    //   );
    // });
    // this.empty();
    // this.fetchData();
    // this.setState({data: testArr, loading: false}, () =>
    //   console.log('delete data:', this.state.data),
    // );
  }

  fetchData() {
    var query = 'SELECT * FROM UserData WHERE name LIKE ?';
    var params = [`%ek%`];
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
    return (
      <View style={{flex: 1}}>
        <SearchBar
          placeholder="Search by name"
          onChangeText={text => this.setState({searchQuery: text})}
          value={this.state.searchQuery}
        />
        <View>
          <Text>Like '%ek' querysi çıktısı</Text>
        </View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>{item}</Text>
              <TouchableOpacity onPress={() => this.deleteItem(item)}>
                <Icon name="trash" size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}
