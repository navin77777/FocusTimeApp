import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/CountDown';
import { RoundedButton } from '../components/roundedButton';
import { colors } from '../utils/colors';
import { Timing } from './Timing';

const DURATION = 10000;
const PATTERN = [1000, 2000, 3000, 4000, 5000];

export const Timer = ({ focusSubject, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinuits] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: 0 }}>
        <Text style={styles.title}> Focusing On </Text>
        <Text style={styles.task}> {focusSubject} </Text>
      </View>
      <View style={{ paddingTop: 8 }}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.timeText}>
        <Text
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            color: '#ffffff',
            padding: 20,
          }}>
          Please Choose focus time
        </Text>
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinuits} />
      </View>

      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        {isStarted && (
          <RoundedButton
            title="pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton
          size={50}
          title="-"
          onPress={() => {
            clearSubject(null);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  timeText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    paddingTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubjectWrapper: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.17,
    flexDirection: 'row',
    padding: 16,
  },
  title: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
  },
  task: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 24,
  },
});
