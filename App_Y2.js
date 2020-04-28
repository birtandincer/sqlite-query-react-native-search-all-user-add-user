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

import AsyncStorage from '@react-native-community/async-storage';


let popAnketFormlari = [];
let aCerceve = [];
let bakkalGorsel = [];
let dikDolap = [];
let camGiydirme = [];
let sutStand = [];
let gazetelik = [];
let ayakliPano = [];
let dikTabela = [];
let isikliIsiksizTabela = [];
let ayranDisDolap = [];
let farbela = [];
let bombeliSticker = [];
let sutlukUstuGiydirme = [];
let vinilGerme = [];
class App extends Component {
  state = {
    items: [
      {id: 1, value: 'A3 Çerçeve'},
      {id: 2, value: 'BAK-KAL Görselleri'},
      {id: 3, value: 'Dik Dolap'},
      {id: 4, value: 'Cam Giydirme'},
      {id: 5, value: 'Süt Stand'},
      {id: 6, value: 'Gazetelik'},
      {id: 7, value: 'Ayaklı Pano'},
      {id: 8, value: 'Dik Tabela'},
      {id: 9, value: 'Işıklı/Işıksız Tabela'},
      {id: 10, value: 'Ayran İnce Dış Mekan Dolabı'},
      {id: 11, value: 'Farbela'},
      {id: 12, value: 'Bombeli Sticker'},
      {id: 13, value: 'Sütlük Üstü Giydirme'},
      {id: 14, value: 'Vinil Germe'},
    ],
    selected: false,
    aCerceve: [],
    bakkalGorsel: [],
    dikDolap: [],
    camGiydirme: [],
    sutStand: [],
    gazetelik: [],
    ayakliPano: [],
    dikTabela: [],
    isikliIsiksizTabela: [],
    ayranDisDolap: [],
    farbela: [],
    bombeliSticker: [],
    sutlukUstuGiydirme: [],
    vinilGerme: [],
    selectedaCerceve: null,
    selectedaCerceveValue: null,
    selectedbakkalGorsel: null,
    selectedbakkalGorselValue: null,
    selecteddikDolap: null,
    selecteddikDolapValue: null,
    selectedcamGiydirme: null,
    selectedcamGiydirmeValue: null,
    selectedsutStand: null,
    selectedsutStandValue: null,
    selectedgazetelik: null,
    selectedgazetelikValue: null,
    selectedayakliPano: null,
    selectedayakliPanoValue: null,
    selecteddikTabela: null,
    selecteddikTabelaValue: null,
    selectedisikliIsiksizTabela: null,
    selectedisikliIsiksizTabelaValue: null,
    selectedayranDisDolap: null,
    selectedayranDisDolapValue: null,
    selectedfarbela: null,
    selectedfarbelaValue: null,
    selectedbombeliSticker: null,
    selectedbombeliStickerValue: null,
    selectedsutlukUstuGiydirme: null,
    selectedsutlukUstuGiydirmeValue: null,
    selectedvinilGerme: null,
    selectedvinilGermeValue: null,
  };
  componentDidMount() {
    (aCerceve = []),
      (bakkalGorsel = []),
      (dikDolap = []),
      (camGiydirme = []),
      (sutStand = []),
      (gazetelik = []),
      (ayakliPano = []),
      (dikTabela = []),
      (isikliIsiksizTabela = []),
      (ayranDisDolap = []),
      (farbela = []),
      (bombeliSticker = []),
      (sutlukUstuGiydirme = []),
      (vinilGerme = []);
  }
  _retrieveData = async key => {
    const value = await AsyncStorage.getItem(key);

      popAnketFormlari = JSON.parse(value) == null ? [] : JSON.parse(value);
    
  };
  _storeData = async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      // Error retrieving data
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
      aCerceve: this.state.selectedaCerceveValue,
      bakkalGorsel: this.state.selectedbakkalGorselValue,
      dikDolap: this.state.selecteddikDolapValue,
      camGiydirme: this.state.selectedcamGiydirmeValue,
      sutStand: this.state.selectedsutlukUstuGiydirmeValue,
      gazetelik: this.state.selectedgazetelikValue,
      ayakliPano: this.state.selectedayakliPanoValue,
      dikTabela: this.state.selecteddikTabelaValue,
      isikliIsiksizTabela: this.state.selectedisikliIsiksizTabelaValue,
      ayranDisDolap: this.state.selectedayranDisDolapValue,
      farbela: this.state.selectedfarbelaValue,
      bombeliSticker: this.state.selectedbombeliStickerValue,
      sutlukUstuGiydirme: this.state.selectedsutlukUstuGiydirmeValue,
      vinilGerme: this.state.selectedvinilGermeValue,
    };

    if (
      this.state.selectedaCerceve == null ||
      this.state.selectedaCerceve === 1
    ) {
      this.alertValue('A3 Çerçeve Adedi Seçmelisiniz.');
    } else if (
      this.state.selectedbakkalGorsel == null ||
      this.state.selectedbakkalGorsel === 1
    ) {
      this.alertValue('Bakkal Görsel Adedi Seçmelisiniz.');
    } else {
      this.alertValue('Başarılı şekilde kaydedildi.');
      popAnketFormlari.push(popAnketFormu);
      this._storeData(popAnketFormlari);
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
        } else if (item === this.state.selectedbakkalGorsel) {
          this.setState({
            selectedbakkalGorsel: item[index].Id,
            selectedbakkalGorselValue: item[index].Name,
          });
        } else if (item === this.state.selecteddikDolap) {
          this.setState({
            selecteddikDolap: item[index].Id,
            selecteddikDolapValue: item[index].Name,
          });
        } else if (item === this.state.selectedcamGiydirme) {
          this.setState({
            selectedcamGiydirme: item[index].Id,
            selectedcamGiydirmeValue: item[index].Name,
          });
        } else if (item === this.state.selectedsutlukUstuGiydirme) {
          this.setState({
            selectedsutlukUstuGiydirme: item[index].Id,
            selectedsutlukUstuGiydirmeValue: item[index].Name,
          });
        } else if (item === this.state.selectedgazetelik) {
          this.setState({
            selectedgazetelik: item[index].Id,
            selectedgazetelikValue: item[index].Name,
          });
        } else if (item === this.state.selectedayakliPano) {
          this.setState({
            selectedayakliPano: item[index].Id,
            selectedayakliPanoValue: item[index].Name,
          });
        } else if (item === this.state.selecteddikDolap) {
          this.setState({
            selecteddikDolap: item[index].Id,
            selecteddikDolapValue: item[index].Name,
          });
        } else if (item === this.state.selectedisikliIsiksizTabela) {
          this.setState({
            selectedisikliIsiksizTabela: item[index].Id,
            selectedisikliIsiksizTabelaValue: item[index].Name,
          });
        } else if (item === this.state.selectedayranDisDolap) {
          this.setState({
            selectedayranDisDolap: item[index].Id,
            selectedayranDisDolapValue: item[index].Name,
          });
        } else if (item === this.state.selectedfarbela) {
          this.setState({
            selectedfarbela: item[index].Id,
            selectedfarbelaValue: item[index].Name,
          });
        } else if (item === this.state.selectedbombeliSticker) {
          this.setState({
            selectedbombeliSticker: item[index].Id,
            selectedbombeliStickerValue: item[index].Name,
          });
        } else if (item === this.state.selectedsutlukUstuGiydirme) {
          this.setState({
            selectedsutlukUstuGiydirme: item[index].Id,
            selectedsutlukUstuGiydirmeValue: item[index].Name,
          });
        } else if (item === this.state.selectedvinilGerme) {
          this.setState({
            selectedvinilGerme: item[index].Id,
            selectedvinilGermeValue: item[index].Name,
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
