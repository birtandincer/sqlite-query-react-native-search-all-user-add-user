/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Alert} from 'react-native';
import ListItemPopAnket from './src/listItemPopAnket';
import ButtonCommon from './src/button';


let popAnketFormlari = [];
let aCerceve = [];

class App extends Component {
  state = {
    items: [
      {id: 1, value: 'A3 Çerçeve'}
    ],
    selected: false,
    aCerceve: [],
    selectedaCerceve: null,
    selectedaCerceveValue: null,
   
  };
  componentDidMount() {
    (aCerceve = [])
     }
  _retrieveData = async key => {
    const value = await AsyncStorage.getItem(key);

      popAnketFormlari = JSON.parse(value) == null ? [] : JSON.parse(value);
    
  };
  _storeData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
    }
  };
  changeSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  alertValue = (text) => {
    Alert.alert(
        '',
        text,
        [
            { text: 'Tamam' },
        ]
    );
}
  kaydet = () => {
    this._storeData();
    const popAnketFormu = {
      aCerceve: this.state.selectedaCerceveValue
    };

    if (
      this.state.selectedaCerceve == null ||
      this.state.selectedaCerceve === 1
    ) {
      this.alertValue('A3 Çerçeve Adedi Seçmelisiniz.');
    } 
  };

  pickerChange(item, index) {
    item.map((v, i) => {
      if (index === i) {
        if (item === this.state.selectedaCerceve) {
          this.setState({
            selectedaCerceve: item[index].Id,
            selectedaCerceveValue: item[index].Name,
          });
        }
      }
    });
  }

  static navigationOptions = {
    title: 'Pop Anket Formu',
  };
  showAlert = () => {
    Alert.alert('', 'Başarılı şekilde kaydedildi.', [
      {text: 'Tamam', onPress: () => console.log('OK Pressed')},
    ]);
  };

  render() {
    const temps = this.state.items.map(temp => (
      <ListItemPopAnket key={temp.id} text={temp.value} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.listView}>
          <ScrollView>{temps}</ScrollView>
        </View>
        <View style={styles.button}>
          <ButtonCommon
            name="Kaydet"
            color="#007934"
            //            onPress={() => this.showAlert()} // Cift tiklama sorunu var. Coz!
            onPress={() => this.kaydet()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 10,
  },
  listView: {
    flex: 9,
  },
  button: {
    flex: 1,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});
export default App;
