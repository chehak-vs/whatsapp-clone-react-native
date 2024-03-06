import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.container} >
      <View style={styles.card} >
        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/55-512.png'}}
        style={styles.footerImage} />
        <Text style={styles.footerText}>Status</Text>
      </View>

      <View style={styles.card}>
        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/55-512.png'}}
        style={styles.footerImage} />
        <Text style={styles.footerText}>Chat</Text>
      </View>

      <View style={styles.card}>
        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/55-512.png'}}
        style={styles.footerImage}/>
        <Text style={styles.footerText}>Camera</Text>
      </View>

      <View style={styles.card}>
        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/55-512.png'}}
        style={styles.footerImage}/>
        <Text style={styles.footerText}>Calls</Text>
      </View>

      <View style={styles.card}>
        <Image source={{uri: 'https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/55-512.png'}} 
        style={styles.footerImage}/>
        <Text style={styles.footerText}>Settings</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        flex: 1
    },
    footerImage: {
        height: 50,
        width: 50,
    },
    footerText: {
        color: '#BBC5C2'
    },
})