import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    }
});

class Trending extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params ? params.title : 'Trending'
        };
    };

    state = {};
    render() {
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        const title = (params && params.title) || null;

        return (
            <View style={styles.container}>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>title: {JSON.stringify(title)}</Text>

                <Button title="Trending" />
            </View>
        );
    }
}

export default Trending;
