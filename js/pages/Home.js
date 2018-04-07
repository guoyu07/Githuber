import React, { Component } from 'react';
import { View, Platform, Text, StyleSheet, Button } from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    headerRihgtContainerStyle: {
        padding: 10,
        margin: 20,
        borderRadius: 10
    },
    headerRightButtonStyle: {
        fontSize: 18,
        borderColor: '#ccc'
    },
    buttonContainerStyle: {
        padding: 10,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        backgroundColor: '#673ab7'
    },
    buttonStyle: {
        fontSize: 18,
        color: 'white'
    }
});

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let headerTitle = 'Main';
        const headerRight = (
            <Button title="+1" color="#fff" onPress={params.increaseCount} />
        );
        const headerLeft = (
            <Button
                onPress={() => navigation.navigate('FullScreen')}
                title="FullScreen"
                color="#fff"
            />
        );

        return {
            headerLeft,
            headerTitle,
            headerRight
        };
    };
    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }
    state = {
        count: 0
    };

    _increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Hello React Native</Text>

                <Text style={styles.instructions}>{instructions}</Text>

                <Button
                    title=" Go to Trending"
                    color="#841584"
                    onPress={() =>
                        this.props.navigation.navigate('Trending', {
                            title: 'Trendingxxx',
                            itemId: 86
                        })
                    }
                />
            </View>
        );
    }
}

export default Home;
