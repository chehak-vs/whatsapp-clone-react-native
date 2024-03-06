import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Data from '../Data.json';

export default function Chats() {
    return (
        <ScrollView style={styles.container}>
            {Data.map((item) => (
                <View style={styles.card}>
                    <Image source={{ uri: item.image }} style={styles.cardImage} />
                    <View style={styles.cardDesc}>
                        <Text style={styles.cardName}>{item.name}</Text>
                        <Text style={styles.cardChat}>
                            {item.chat.length < 30 ? (<Text>{item.chat}</Text>) : (<Text>{item.chat.slice(0, 30) + '...'}</Text>)}
                        </Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 32,
    },
    card: {
        flex: 1,
        flexDirection: 'row',
        margin: 8,
        alignItems: 'center',
    },
    cardImage: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        marginLeft: 8,
    },
    cardDesc: {
        marginLeft: 16
    },
    cardName: {
        color: '#101E26',
        fontSize:18,
        fontWeight: 'bold'
    },
    cardChat: {
        color: '#BBC5C2'
    }
})