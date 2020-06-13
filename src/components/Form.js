import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Email"
                    placeholderTextColor="#ffffff"
                />

                <TextInput style={styles.inputBox}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 300,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13,

    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'

    },

});
