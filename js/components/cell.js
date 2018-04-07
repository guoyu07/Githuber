import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    RefreshControl,
    ListView,
    TouchableOpacity
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 16,
        marginBottom: 2,
        color: '#000'
    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'
    },
    cell_container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 3,
        borderColor: '#dddddd',
        borderStyle: null,
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
    iconSize: { height: 20, width: 20 }
});

class Cell extends Component {
    state = {};
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.cell_container}>
                    <Text style={styles.title}>
                        {this.props.item.full_name}
                    </Text>
                    <Text style={styles.description}>
                        {this.props.item.description}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <Text>Author:</Text>
                            <Image
                                style={styles.iconSize}
                                source={{
                                    uri: this.props.item.owner.avatar_url
                                }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}
                            >
                                <Text>Stars:</Text>
                                <Text>{this.props.item.stargazers_count}</Text>
                            </View>
                        </View>

                        <Image
                            style={styles.iconSize}
                            source={require('../../res/images/ic_star.png')}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default Cell;
