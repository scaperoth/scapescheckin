import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoodIcon from '../../../components/MoodIcon';

const DailyEntryToday = ({ todaysEntry }) => {
    console.log("TODAYS ENTRY", todaysEntry)
    return (
        <View style={styles.container}>
            <MoodIcon moodLevel={todaysEntry.moodLevel} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 90,
        flexDirection: 'column'
    },
    header: {
        paddingTop: 50,
        paddingBottom: 30,
        fontSize: 30,
        textAlign: 'center'
    }
});

export default DailyEntryToday;
