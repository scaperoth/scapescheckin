import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import MoodIcon from '../../../components/MoodIcon';

const DailyEntryToday = ({ todaysEntry }) => {
    console.log("TODAYS ENTRY", todaysEntry)
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.message}>How are you feeling?</Text>
                <View style={styles.paper}>
                    <MoodIcon size={20} moodLevel={todaysEntry.moodLevel} />
                </View>
                <View>
                    <Button title="Update Entry?"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    message: {
        flex: .12,
        fontSize: 30,
        flexWrap: 'wrap',
        width: '100%',
        paddingBottom: 10
    },
    paper: {
        flex: .8,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        maxWidth: 400,
        borderRadius: 10,
        elevation: 5,
        padding: 30,
        shadowColor: 'rgb(182, 204, 254)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 15
    },
});

export default DailyEntryToday;
