import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import Deck from './Deck'
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as api from '../utils/api';

class Decks extends React.Component {
    state = {
        refreshing: false,
    };

    _onRefresh() {
        this.setState({refreshing: true});
        this.props.actions.findAll().then(() => {
            this.setState({refreshing: false});
        });
    }
    componentDidMount() {
        // api.clear();
        this.props.actions.findAll();
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data ? Object.values(this.props.data) : []}
                    keyExtractor={(item, index) => index+''}
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    renderItem={(item) => <Deck {...item} navigation={this.props.navigation}/>}
                />
            </View>
        );
    }
}
function mapState(state) {
    const {data} = state;
    return {
        data
    }
}

function mapDispatch (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    }
}
export default connect(mapState, mapDispatch)(Decks);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
