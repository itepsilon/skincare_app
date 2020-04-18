import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { SearchBar } from 'react-native-elements';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions';

class HomeScreen extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View>
                        {
                            this.props.products.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.image_url }, rounded: false, size: "medium" }}
                                    title={<Text style={{ fontWeight: 'bold', fontSize: 16, color: 'blue' }}>{l.name}</Text>}
                                    subtitle={<Text numberOfLines={3}>{l.description}</Text>}
                                    bottomDivider
                                    rightIcon={<Icon name='heart' size={30} color="blue" />}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    title: 'Home',
    headerStyle: {
        backgroundColor: '#3080E2',
        elevation: 0,
        shadowOpacity: 0
    },
    headerTintColor: '#333333',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#ffffff'
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        // paddingTop: 30,
    },

    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});


const mapStateToProps = state => ({ products: state.products.products })

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

