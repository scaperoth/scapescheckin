import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MoodIcon = ({moodLevel}) => {
    const [emoji, setEmoji] = useState('');

    useEffect(() => {
        getMoodLevel();
    }, [])

    const getMoodLevel = () => {
        switch (moodLevel) {
            case 1:
                setEmoji('😃')
                break;
            case 2:
                setEmoji('😃')
                break;
            case 3:
                setEmoji('😃')
                break;
            case 4:
                setEmoji('😃')
                break;
            default:
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>{emoji}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    emoji: {
      textAlign: 'center',
      fontSize: 100,
    }
  });

export default MoodIcon;