import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';


export const Timing = ({ onChangeTime }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinuits] = useState(0.1)

  return (
    <>
    <View style={styles.timingButton}>
    <RoundedButton size={60} title={"10"} onPress = {() => onChangeTime(10)} />
    </View>

    <View style={styles.timingButton}>
    <RoundedButton size={60} title={"15"} onPress = {() => onChangeTime(15)} />
    </View>

    <View style={styles.timingButton}>
    <RoundedButton size={60} title={"20"} onPress = {() => onChangeTime(20)} />
    </View>

    <View style={styles.timingButton}>
    <RoundedButton size={60} title={"30"} onPress = {() => onChangeTime(30)} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  timingButton: {
    flex:1,
    alignItems: 'center',
  }
})
