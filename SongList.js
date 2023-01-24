import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'



const songListItem = ({ item }) => (
<View style={styles.song_list_item}>
<Text style={styles.serial_number}>{item.serial_number}</Text>
<Text style={styles.song_title}>{item.song_title}</Text>
<Text style={styles.about_song}>{item.about_song}</Text>
</View>
  );

const SongList = ({ item }) => (
<FlatList
    style={styles.song_list}
    data={item}
    renderItem={songListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SongList;

const styles = StyleSheet.create({
    'serial_number': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'song_title': {
        'fontSize': 16,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'about_song': {
        'color': '#9d9595',
        'fontSize': 15,
        'fontWeight': '500',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});