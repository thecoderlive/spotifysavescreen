import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import SongList from './SongList'

const SaveSpotify = () => (
<ScrollView style={styles.save_spotify} showsVerticalScrollIndicator={false}>
<Image
    style={styles.bar_icon}
    source={{uri: item.bar_icon}}
   />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.movie_name}>{item.movie_name}</Text>
<Image
    style={styles.clip_icon}
    source={{uri: item.clip_icon}}
   />
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
<Image
    style={styles.plus_icon}
    source={{uri: item.plus_icon}}
   />
<Image
    style={styles.upload_icon}
    source={{uri: item.upload_icon}}
   />
<SongList item={item.song_list}/>
</ScrollView>
)

export default SaveSpotify;

const styles = StyleSheet.create({
    'bar_icon': {
        'width': '6vw',
        'height': '4vw',
        'margin': 5
    },
    'song_name': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'movie_name': {
        'color': '#a39e9e',
        'fontSize': 15,
        'fontWeight': '500',
        'paddingHorizontal': 10
    },
    'clip_icon': {
        'width': '8vw',
        'height': '8vwvw',
        'margin': 5,
        'borderRadius': 50
    },
    'heart_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'borderRadius': 50
    },
    'plus_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'borderRadius': 50
    },
    'upload_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'borderRadius': 50
    }
});