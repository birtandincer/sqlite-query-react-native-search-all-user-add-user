/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} 
            style={[styles.button, {backgroundColor: props.color}]}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: 'white',
        fontWeight: "bold",
    },
});

export default button;