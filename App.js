import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  useNativeDriver,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { TextInput } from 'react-native-paper';
import { Timer } from './src/features/Timer';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [currentSubject, setCurrntSubject] = useState();
  const[history, setHistory] = useState(['Temp features focus']);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {!currentSubject ? (
          <>
          <Focus addSubject={setCurrntSubject}  />
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={() => {}}
            clearSubject= {() => setCurrntSubject(null)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
  },
});
