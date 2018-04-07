import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
class Favorite extends Component {
    state = {};
    render() {
        return (
            <View style={styles.container}>
                <Text>Favorite</Text>
            </View>
        );
    }
}

export default Favorite;
