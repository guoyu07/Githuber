import React, { Component } from 'react';
import { View, Text, StyleSheet, RefreshControl, ListView } from 'react-native';
import Cell from '../components/cell';
import { fetchNetRepository } from '../libs/fetch';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class Tab1 extends Component {
    constructor() {
        super();
        this.onLoad();
    }
    state = {
        isLoading: true,
        refreshing: true,
        dataSource: new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
    };
    onRefresh() {
        this.updateState({
            isLoading: true,
            isLoadingFail: false
        });
        setTimeout(() => {
            this.updateState({
                isLoading: false,
                isLoadingFail: true
            });
        }, 2000);
    }
    onLoad() {
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 2000);
    }
    componentDidMount() {
        const API_URL =
            'https://api.github.com/search/repositories?q=deeplearning&sort=stars';
        fetchNetRepository(API_URL)
            .then(items => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(items)
                });
            })
            .catch(err => {
                alert(err);
            });
    }
    renderRow(item) {
        return (
            <Cell item={item} />
        );
    }
    renderSeparator(sectionID, rowID, adjacentRowHighlighted) {}

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    renderRow={item => this.renderRow(item)}
                    enableEmptySections={true}
                    dataSource={this.state.dataSource}
                    renderSeparator={(
                        sectionID,
                        rowID,
                        adjacentRowHighlighted
                    ) =>
                        this.renderSeparator(
                            sectionID,
                            rowID,
                            adjacentRowHighlighted
                        )
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={() => this.onLoad()}
                        />
                    }
                />
            </View>
        );
    }
}

export default Tab1;
