import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const Tab1 = () => {
    const data = [
        { id: '1', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '2', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '3', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '4', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '5', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '6', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '7', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' },
        { id: '8', image: require('../../Assets/flatlistimg.png'), title: 'First Stripe Earned', des: 'Top 10% of highest spending players in a month' }
    ];
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.itemContainer}>
                            <Image
                                source={item.image}
                            />

                            <View style={styles.textContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.des}</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Tab1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 5,
        alignItems: 'center',
        top: 10
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 20
    },
    title: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333333'
    },
    description: {
        maxWidth: 240,
        top: 5,
        color: '#727682',
        fontSize: 14,
        fontWeight: '500'
    }
});
