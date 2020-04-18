import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions';
import { ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';

class FavoriteScreen extends React.Component {
    componentDidMount() {
        console.log(this.props.fetchProducts);
    }
    render() {
        if (!this.props.accessToken) {
            return <LoginScreen />;
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    style={styles.container}
                    contentContainerStyle={styles.contentContainer}>
                    <View>
                        {
                            this.props.products.filter((item,index) => index % 2 === 1).map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.image_url }, rounded: false, size: "medium" }}
                                    title={<Text style={{ fontWeight: 'bold', fontSize: 16, color: 'blue' }}>{l.name}</Text>}
                                    subtitle={<Text numberOfLines={3}>{l.description}</Text>}
                                    bottomDivider
                                    rightIcon={<Icon name='heart' size={30} color="blue" solid />}
                                />
                            ))
                        }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

FavoriteScreen.navigationOptions = {
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
        backgroundColor: '#fff',
    },
});

const mapStateToProps = state => ({ products: state.products.products, accessToken: state.auth.access || null })

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchProducts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteScreen);