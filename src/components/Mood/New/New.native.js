/* src/components/Mood/New.js */
import React, { useEffect, useState } from 'react'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { createMood } from '../../../graphql/mutations'
import { listMoods } from '../../../graphql/queries'

import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

const initialState = { level: '' }

const NewMood = () => {
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
      <View style={{flex: 1}}>
        <Text>Amplify Moods</Text>
        <TextInput
          onChangeText={text => setInput('level', text)}
          style={styles.input}
          value={formState.level}
          placeholder="Levels"
        />
        <Button title="Create Mood" style={styles.button} onPress={addMood}/>
      </View>
      <View style={{flex: 2}}>
      {
        moods.map((mood, index) => (
          <View key={mood.id ? mood.id : index} style={styles.mood}>
            <Text style={styles.moodLevel}>{mood.level}</Text>
            <Text style={styles.moodCreatedAt}>{mood.createdAt}</Text>
          </View>
        ))
      }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 3}
})

export default NewMood