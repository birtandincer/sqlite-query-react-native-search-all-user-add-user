/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { StyleSheet, Text, View, Picker } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class listItemPopAnket extends Component {
    state = {
        selected: "",
        items: [
            { id: 0 },
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 4 },
            { id: 5 },
            { id: 6 },
            { id: 7 },
            { id: 8 },
            { id: 9 }
        ],
    }

    pickerChangeSelected(index) {
        this.state.items.map((v, i) => {
            if (index === i) {
                this.setState({
                    selected: this.state.items[index].id
                })
            }
        })
    }

    render () {
        return (
            <View style={styles.row}>
                <View style={styles.left}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
                <View style={styles.middle}>
                    <Picker
                        selectedValue={this.state.selected}
                        style={styles.list}
                        onValueChange={itemIndex => this.pickerChangeSelected(itemIndex)}>{
                            this.state.items.map((v) => {
                                return <Picker.Item key={v.id} label={v.id.toString()} value={v.id} />
                            })
                        }
                    </Picker>
                </View>
                <View style={styles.right}>
                    <Icon 
                        name='ios-camera' 
                        size={35}
                        onPress={() => alert(this.props.text + "\niçin Kamera çalışacak")}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        height: 60,
        backgroundColor: "white",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderColor: "#333",
    },
    left: {
        flex: 8,
    },
    middle: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    right: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        margin: 10,
        color: "black"
    },
    list: {
        width: "100%",
        left: "20%",
    }
})

export default listItemPopAnket;