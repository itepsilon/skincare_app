import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import LoginScreen from './LoginScreen';

export default class LinksScreen extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <LoginScreen />
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
