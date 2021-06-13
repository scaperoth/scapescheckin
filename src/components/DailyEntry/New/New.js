/* src/components/DailyEntry/New.js */
import React, { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createDailyEntry } from '../../../graphql/mutations'

import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const initialState = { moodLevel: '' }

const NewDailyEntryForm = (props) => {
  const [formState, setFormState] = useState(initialState)

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function addDailyEntry() {
    try {
      if (!formState.moodLevel ) return
      const dailyEntry = { ...formState }
      setFormState(initialState)
      await API.graphql(graphqlOperation(createDailyEntry, {input: dailyEntry}))
    } catch (err) {
      console.log('error creating dailyEntry:', err)
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text>Daily Entries</Text>
        <TextInput
          onChangeText={text => setInput('moodLevel', text)}
          style={styles.input}
          value={formState.moodLevel}
          keyboardType={'numeric'}
          placeholder="Mood Level"
        />
        <Button title="Create DailyEntry" style={styles.button} onPress={addDailyEntry}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  dailyEntry: {  marginBottom: 15 },
  input: { backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  dailyEntryLevel: { fontSize: 20, fontWeight: 'bold' },
  dailyEntryCreatedAt: { marginBottom: 0 },
})

export default NewDailyEntryForm