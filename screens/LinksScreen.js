import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';

class LinksScreen extends React.Component {
    render() {
        if (!this.props.accessToken) {
            return <LoginScreen />;
        }
        return (
            <ScrollView style={styles.container}>
                {this.props.accessToken ? <Text>You are logged in~</Text> : <LoginScreen />}
            </ScrollView>
        );
    }
}

LinksScreen.navigationOptions = {
    title: '',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => ({ accessToken: state.auth.access || null })

export default connect(mapStateToProps, null)(LinksScreen);