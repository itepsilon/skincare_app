import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';

import { Avatar } from 'react-native-elements';

class AccountScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.fetchProducts);
    }
    render() {
        if (!this.props.accessToken) {
            return <LoginScreen />;
        }
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={['#3080E2', 'transparent']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: 300,
                    }}
                />
                <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                        }}
                    />
                </View>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View>
                        {
                            [
                                {
                                    key: "First Name",
                                    value: "Emily"
                                }, {
                                    key: "Last Name",
                                    value: "Williams"
                                },{
                                    key: "Age",
                                    value: "27"
                                },{
                                    key: "Skin Type",
                                    value: "Combination"
                                },{
                                    key: "Daily Water Intake",
                                    value: "Drinks around 2 liters of water"
                                }].map((l, i) => (
                                <ListItem
                                    key={i}
                                    title={<Text style={{ fontWeight: 'bold', fontSize: 16, color: 'blue' }}>{l.key}</Text>}
                                    subtitle={<Text>{l.value}</Text>}
                                    bottomDivider
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

AccountScreen.navigationOptions = {
    title: 'Favorite Products',
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
        paddingTop: 15,
        backgroundColor: '#fff'
    },
});

const mapStateToProps = state => ({ products: state.products.products, accessToken: state.auth.access || null })

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);