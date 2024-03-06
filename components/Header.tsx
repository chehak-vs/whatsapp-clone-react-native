import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Data from '../Data.json';

export default function Header() {
    return (
        <ScrollView horizontal={true}>
            <View style={styles.headerContainer}>
                <View style={styles.dashedBorder}>
                    <Image
                        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/017/350/124/small_2x/plus-icon-design-png.png' }}
                        style={{ height: 80, width: 80 }} />
                    <Text style={styles.headerText}>Add New</Text>
                </View>

                {Data.map((item) => {
                    return <View style={styles.headerCard} key={item.id}>
                        <Image style={styles.headerImage} source={{ uri: item.image }} />
                        <Text style={styles.headerText}>{item.name}</Text>
                    </View>
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        //height: 80,
        flex: 1,
        flexDirection: 'row',
    },
    headerCard: {
        flex: 1,
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 8,

    },
    headerImage: {
        height: 80,
        width: 80,
        borderRadius: 80 / 2,
        borderColor: '#9EEB94',
        borderWidth: 3,
    },
    dashedBorder: {
        borderRadius: 80 / 2,
        borderColor: '#9EEB94',
        borderWidth: 3,
        borderStyle: 'dashed',
        overflow: 'hidden',
    },
    headerText: {
        color: '#101E26',
    }
})