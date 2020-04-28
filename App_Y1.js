/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import { StyleSheet, ScrollView, View, Alert } from 'react-native';
import ListItemPopAnket from "./src/listItemPopAnket";
import ButtonCommon from "./src/button";

class App extends Component {
  state = {
    items: [
        { id: 1, value: 'A3 Çerçeve' },
        { id: 2, value: 'BAK-KAL Görselleri' },
        { id: 3, value: 'Dik Dolap' },
        { id: 4, value: 'Cam Giydirme' },
        { id: 5, value: 'Süt Stand' },
        { id: 6, value: 'Gazetelik' },
        { id: 7, value: 'Ayaklı Pano' },
        { id: 8, value: 'Dik Tabela' },
        { id: 9, value: 'Işıklı/Işıksız Tabela' },
        { id: 10, value: 'Ayran İnce Dış Mekan Dolabı' },
        { id: 11, value: 'Farbela' },
        { id: 12, value: 'Bombeli Sticker' },
        { id: 13, value: 'Sütlük Üstü Giydirme' },
        { id: 14, value: 'Vinil Germe' },
    ],
}
static navigationOptions = {
  title: 'Pop Anket Formu',
};
    showAlert = () => {
        Alert.alert(
            '',
            'Başarılı şekilde kaydedildi.',
            [
                { text: 'Tamam', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

  render() {
    const temps = this.state.items.map(temp => (
      <ListItemPopAnket
          key={temp.id}
          text={temp.value} />
  ))
    return (
      <View style={styles.container}>
      <View style={styles.listView}>
          <ScrollView>
              {temps}
          </ScrollView>
      </View>
      <View style={styles.button}>
          <ButtonCommon 
              name="Kaydet" 
              color="#007934" 
              onPress={() => this.showAlert()} // Cift tiklama sorunu var. Coz!
              />
      </View>
  </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
      flex: 10,
  },
  listView: {
      flex: 9,
  },
  button: {
      flex: 1,
      padding:10,
      marginLeft: 20,
      marginRight: 20,
  }
});
export default App;
