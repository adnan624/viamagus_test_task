import { Alert, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { SheetManager } from 'react-native-actions-sheet'
import { ProgressBar, MD3Colors } from 'react-native-paper';

const TodaysGame = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Today's Games</Text>
            </View>
            <View style={{ width: 341, height: 104, backgroundColor: '#6231AD', alignSelf: 'center', top: 25 }}>
                <Image
                    style={{ height: 75, width: 130, position: 'absolute', bottom: 0, right: 0, }}
                    source={require('../Assets/Bcoin.png')}
                />
                <View style={{ flexDirection: 'row', marginTop: 22, marginLeft: 15 }}>
                    <Text style={{ color: '#D2BAF5', fontSize: 12, fontWeight: '600', lineHeight: 14.63 }}>UNDER OR COVER</Text>
                    <Image
                        style={{ height: 13.63, width: 13.63, resizeMode: 'contain', marginLeft: 10 }}
                        source={require('../Assets/info.png')}
                    />
                    <Text style={{ color: '#B296DC', fontSize: 13, fontWeight: '500', lineHeight: 14.63, marginLeft: 35 }}>Starting in</Text>
                    <Image
                        style={{ height: 13.63, width: 13.63, resizeMode: 'contain', marginLeft: 13 }}
                        source={require('../Assets/clock.png')}
                    />
                    <Text style={{ color: '#D2BAF5', fontSize: 12, fontWeight: '600', lineHeight: 14.63, marginLeft: 13 }}>03:23:12</Text>
                </View>
                <View style={{ marginLeft: 15, marginTop: 12 }}>
                    <Text style={{ color: '#D2BAF5', fontWeight: '600', fontSize: 14, lineHeight: 19, letterSpacing: 1, }}>Bitcoin price will be under</Text>
                    <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 14, lineHeight: 20, letterSpacing: 0.5, top: 2 }}>$24,524 at 7 a ET on 22nd Jan’21</Text>

                </View>
            </View>

            <View style={styles.statsContainer}>
                <Text style={styles.statsText}>PRIZE POOL</Text>
                <Text style={styles.statsText}>UNDER</Text>
                <Text style={styles.statsText}>OVER</Text>
                <Text style={styles.statsText}>ENTRY FEES</Text>
            </View>

            <View style={styles.statsValuesContainer}>
                <Text style={[styles.statsValueText,{marginLeft: 40}]}>$12,000</Text>
                <Text style={[styles.statsValueText,{marginLeft: 53}]}>3.25x</Text>
                <Text style={[styles.statsValueText,{marginLeft: 38}]}>1.25x</Text>
                <Text style={[styles.statsValueText,{marginLeft: 60}]}>5</Text>
                <Image
                    style={styles.coinIcon}
                    source={require('../Assets/coin.png')}
                />
            </View>

            <Text style={styles.predictionText}>What’s your prediction?</Text>
            <View style={styles.predictionButtonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Profile')}
                    style={styles.predictionButton}>
                    <Image
                        style={styles.predictionButtonIcon}
                        source={require('../Assets/under.png')}
                    />
                    <Text style={styles.predictionButtonText}>Under</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        SheetManager.show('example-sheet', {
                            payload: { data: 'hello world' },
                        })
                    }}
                    style={styles.predictionButton}>
                    <Image
                        style={styles.predictionButtonIcon}
                        source={require('../Assets/over.png')}
                    />
                    <Text style={styles.predictionButtonText}>Over</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.progressContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, top: 20 }}>


<View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
        style={{ width: 12, height: 12 }}
        source={require('../Assets/user.png')}
    />
    <Text style={{ color: '#727682', fontWeight: '600', fontSize: 14, lineHeight: 17.07, left: 5 }}>355 PLAYERS</Text>
</View>

<View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
        style={{ width: 12, height: 12 }}
        source={require('../Assets/pic.png')}
    />
    <Text style={{ color: '#727682', fontWeight: '600', fontSize: 14, lineHeight: 17.07, left: 5 }}>View Chart</Text>
</View>
</View>

                <ProgressBar
                    style={styles.progressBar}
                    progress={0.72}
                    color={'#FE4190'}
                />
                <View style={styles.predictedImagesContainer}>
                    <Image
                        source={require('../Assets/predicted1.png')}
                    />
                    <Image
                        source={require('../Assets/predicted2.png')}
                    />
                </View>
            </View>
        </View>
    )
}

export default TodaysGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        marginLeft: 24,
        marginTop: 13,
    },
    title: {
        color: '#333333',
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 21.86,
    },
    gameContainer: {
        width: 341,
        height: 104,
        backgroundColor: '#6231AD',
        alignSelf: 'center',
        top: 25,
    },
    gameImage: {
        height: 75,
        width: 130,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    gameInfoContainer: {
        flexDirection: 'row',
        marginTop: 22,
        marginLeft: 15,
    },
    infoIcon: {
        height: 13.63,
        width: 13.63,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    clockIcon: {
        height: 13.63,
        width: 13.63,
        resizeMode: 'contain',
        marginLeft: 13,
    },
    gameInfoText: {
        color: '#D2BAF5',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 14.63,
    },
    gameDetailsContainer: {
        marginLeft: 15,
        marginTop: 12,
    },
    gameDetailsTitle: {
        color: '#D2BAF5',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: 1,
    },
    gameDetailsText: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.5,
        top: 2,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 50,
        paddingHorizontal: 15,
    },
    statsText: {
        color: '#B5C0C8',
        fontSize: 12,
        lineHeight: 14.63,
        fontWeight: '500',
    },
    statsValuesContainer: {
        flexDirection: 'row',
        top: 60,
    },
    statsValueText: {
        color: '#333333',
        fontSize: 14,
        lineHeight: 19.12,
        fontWeight: '600',
    },
    coinIcon: {
        height: 12,
        width: 12,
        resizeMode: 'contain',
        top: 3.5,
        marginLeft: 7,
    },
    predictionText: {
        top: 90,
        marginLeft: 35,
        color: '#727682',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17.07,
        letterSpacing: 1,
    },
    predictionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 110,
        paddingHorizontal: 20,
    },
    predictionButton: {
        backgroundColor: '#452C55',
        width: 147,
        height: 50,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    predictionButtonIcon: {
        alignSelf: 'center',
        marginRight: 3,
    },
    predictionButtonText: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
        lineHeight: 17.07,
    },
    progressContainer: {
        width: 341,
        height: 110,
        backgroundColor: '#F6F3FA',
        top: 140,
        alignSelf: 'center',
    },
    progressInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        top: 20,
    },
    progressIcon: {
        width: 12,
        height: 12,
    },
    progressInfoText: {
        color: '#727682',
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 17.07,
        left: 5,
    },
    progressBar: {
        top: 37,
        height: 10,
        backgroundColor: '#2DABAD',
        borderRadius: 5,
    },
    predictedImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 53,
        paddingHorizontal: 15,
    },
});
