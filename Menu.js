import React from 'react';
import {Text, StyleSheet, ScrollView, View, Image, ImageBackground} from "react-native";
import ButtonWithBackground from "./button";


class Menu extends React.Component {
    state = {
        names: [
            {'name': 'Hamburger', 'price': 10, 'imageURL':
                    'http://www.pngall.com/wp-content/uploads/5/Junk-Food-Hamburger-PNG-File.png', 'available': true},
            {'name': 'Chicken', 'price': 5, 'imageURL':
                    'https://www.ldoceonline.com/media/english/illustration/chicken.jpg', 'available': true},
            {'name': 'Salad', 'price': 15, 'imageURL':
                    'https://www.jessicagavin.com/wp-content/uploads/2019/07/caesar-salad-9-600x900.jpg', 'available': false},
        ]
    };

    render() {
        return(
            <View style={styles.view}>
                <View style={styles.carContainer}>
                    <ImageBackground
                        source={require('./assets/HomeScreen.png')}
                        style={styles.image}
                    />
                    <View style={styles.marginView}>
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
                                            <ButtonWithBackground text={item.available ? "Add to Cart" : "Unavailable"} color={item.available ? "#d12a3b": "#808080"} />
                                        </View>
                                    </View>
                                ))
                            }
                        </ScrollView>
                    </View>
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
    marginView: {
        marginTop: 50
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

});
