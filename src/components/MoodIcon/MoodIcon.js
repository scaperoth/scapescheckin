import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodIcon = ({moodLevel}) => {
    const [emoji, setEmoji] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getMoodLevel();
    }, [])

    const getMoodLevel = () => {
        switch (moodLevel) {
            case 1:
                setEmoji('😃')
                setDescription('You are in a pretty good mood.')
                break;
            case 2:
                setEmoji('😃')
                setDescription('You are in a pretty good mood.')
                break;
            case 3:
                setEmoji('😃')
                setDescription('You are in a pretty good mood.')
                break;
            case 4:
                setEmoji('😃')
                setDescription('You are in a pretty good mood.')
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    emoji: {
      textAlign: 'center',
      fontSize: 100,
    },
    description: {
        fontSize: 30,
        textAlign: 'center'
    }
  });

export default MoodIcon;