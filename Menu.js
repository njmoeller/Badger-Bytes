import React from 'react';
import {Text, StyleSheet, ScrollView, View, Image, ImageBackground, ActivityIndicator} from "react-native";
import ButtonWithBackground from "./button";
const client = require('./Utilities/client');


class Menu extends React.Component {
    state = {
        names: [
        ],
        cart: [

        ],
        shouldShowActivityIndicator: false
    };

    removeActivityIndicator = () => {
        this.setState({shouldShowActivityIndicator: false});
    };

    getMenuItems = () => {
        this.setState({shouldShowActivityIndicator: true});
        client.get('/api/menuItem/', {})
            .then((response) => {
                this.removeActivityIndicator();
                let tempNames = [];
                for(let i=0; i<response.data.length; i++) {
                    let newFood = {
                        "name": response.data[i].name,
                        "price": response.data[i].price,
                        "imageURL": response.data[i].imageURL,
                        "available": response.data[i].available,
                        "_id": response.data[i]._id
                    };
                    tempNames.push(newFood)
                }
                this.setState({names: tempNames})
            })
            .catch((error) => {
                this.removeActivityIndicator();
                alert(error.response.data.message || 'Error getting menu items')
            });
    };

    addItemToCart = (itemName) => {
        let itemToAdd = {};
        for(let i=0; i<this.state.names.length; i++) {
            if(this.state.names[i].name === itemName) {
                itemToAdd = this.state.names[i];
            }
        }
        let currCart = this.state.cart;
        currCart.push(itemToAdd);
        this.setState({cart: currCart});
        alert(itemName + " successfully added to cart.")
    };

    moveToCart = (navigate) => {
        navigate('Cart', {cart: this.state.cart});
    };

    componentDidMount() {
        this.setState({shouldShowActivityIndicator: true});
        this.getMenuItems()
    }

    render() {
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.view}>
                <ActivityIndicator size='large' color="#FFFFFF" animating={this.state.shouldShowActivityIndicator}/>
                <View style={styles.carContainer}>
                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />
                    <ScrollView>
                        {
                            this.state.names.map((item, index) => (
                                <View key = {item.name} style = {styles.item}>
                                    <View>
                                        <Text>{item.name}</Text>
                                        <Text>{'$' + item.price}</Text>
                                        <Image source={{uri: item.imageURL}} style= {{ height:100, width: 100 }} />
                                    </View>
                                    <View>
                                        <ButtonWithBackground onPress={() => this.addItemToCart(item.name)} disabled={!item.available} text={item.available ? "Add to Cart" : "Unavailable"} color={item.available ? "#d12a3b": "#808080"} />
                                    </View>
                                </View>
                            ))
                        }
                        <View style={styles.cart}>
                            <ButtonWithBackground onPress={() => this.moveToCart(navigate)} text='Go to Cart' color='#d12a3b' />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Menu

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#d2f7f1'
    },
    view: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    carContainer: {
        width: '100%',
        height: '100%',
    },

    cart: {
        marginTop: '5%',
        marginBottom: '10%',
        alignItems: 'center',
    },

});
