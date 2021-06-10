/* src/components/Mood/New.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createMood } from '../../graphql/mutations'
import { listMoods } from '../../graphql/queries'

import awsExports from "../../aws-exports";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
Amplify.configure(awsExports);

const initialState = { level: '' }

const NewMood = () => {
  const [formState, setFormState] = useState(initialState)
  const [moods, setMoods] = useState([])

  useEffect(() => {
    fetchMoods()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchMoods() {
    try {
      const moodData = await API.graphql(graphqlOperation(listMoods))
      const moods = moodData.data.listMoods.items
      setMoods(moods)
    } catch (err) { console.log('error fetching moods') }
  }

  async function addMood() {
    try {
      if (!formState.level ) return
      const mood = { ...formState }
      setMoods([...moods, mood])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createMood, {input: mood}))
      fetchMoods()
    } catch (err) {
      console.log('error creating mood:', err)
    }
  }

  return (
    <View style={styles.container}>
      <h2>Amplify Moods</h2>
      <TextInput
        onChange={event => setInput('level', event.target.value)}
        style={styles.input}
        value={formState.level}
        placeholder="Level"
      />
      <Button title="Create Mood" style={styles.button} onPress={addMood}/>
      {
        moods.map((mood, index) => (
          <View key={mood.id ? mood.id : index} style={styles.mood}>
            <Text style={styles.moodLevel}>{mood.level}</Text>
            <Text style={styles.moodCreatedAt}>{mood.createdAt}</Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mood: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  moodLevel: { fontSize: 20, fontWeight: 'bold' },
  moodCreatedAt: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
})

export default NewMood