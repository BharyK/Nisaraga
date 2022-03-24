import * as React from 'react';
import { ProgressBar, Colors } from 'react-native-paper';
import {View, StyleSheet, Text} from 'react-native' ;

const MyComponent = () => (
  <ProgressBar style = {styles.progress} progress={0.5} color={"#6EC300"} />
);

const styles = StyleSheet.create({
    progress: {
        height: 10,
        width:150
      }
  }) ;
  

export default MyComponent;