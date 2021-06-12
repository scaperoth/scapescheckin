/* src/components/DailyEntry/New.js */
import React, { useEffect, useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { listDailyEntrys } from '../../../graphql/queries'

import { View, Text, StyleSheet } from 'react-native';

const NewDailyEntry = () => {
  const [dailyEntrys, setDailyEntrys] = useState([])

  useEffect(() => {
    fetchDailyEntrys()
  }, [])

  async function fetchDailyEntrys() {
    try {
      const dailyEntryData = await API.graphql(graphqlOperation(listDailyEntrys))
      const dailyEntrys = dailyEntryData.data.listDailyEntrys.items
      setDailyEntrys(dailyEntrys)
    } catch (err) { console.log('error fetching dailyEntrys') }
  }

  return (
      <View>
      {
        dailyEntrys.map((dailyEntry, index) => (
          <View key={dailyEntry.id ? dailyEntry.id : index} style={styles.dailyEntry}>
            <Text style={styles.dailyEntryLevel}>{dailyEntry.moodLevel}</Text>
            <Text style={styles.dailyEntryCreatedAt}>{dailyEntry.createdAt}</Text>
          </View>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {flex: 3}
})

export default NewDailyEntry