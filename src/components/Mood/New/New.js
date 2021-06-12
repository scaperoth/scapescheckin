/* src/components/Mood/New.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createMood } from '../../../graphql/mutations'
import { listMoods } from '../../../graphql/queries'

import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const initialState = { level: '' }

const NewMood = (props) => {
  const [formState, setFormState] = useState(initialState)
  const [moods, setMoods] = useState([])

  useEffect(() => {
      console.log('formState', formState)
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
        console.log(formState)
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
      <View>
        <Text>Amplify Moods</Text>
        <TextInput
          onChangeText={text => setInput('level', text)}
          style={styles.input}
          value={formState.level}
          placeholder="Levelz"
        />
        <Button title="Create Mood" style={styles.button} onPress={addMood}/>
      </View>
      <ScrollView style={{maxHeight: 400}}>
      {
        moods.map((mood, index) => (
          <View key={mood.id ? mood.id : index} style={styles.mood}>
            <Text style={styles.moodLevel}>{mood.level}</Text>
            <Text style={styles.moodCreatedAt}>{mood.createdAt}</Text>
          </View>
        ))
      }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  mood: {  marginBottom: 15 },
  input: { backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  moodLevel: { fontSize: 20, fontWeight: 'bold' },
  moodCreatedAt: { marginBottom: 0 },
})

export default NewMood