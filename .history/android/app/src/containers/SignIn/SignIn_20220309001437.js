import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from './SignIn.styles';
import { TextInput } from 'react-native-paper';

const SignIn = () => {
    let screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container, screenWidth]}>
            <Text style = {styles.getStarted}>Get Started</Text>
            <Text style = {styles.getStartedUnderTxt}>Enter your number to get started</Text>
            <TextInput
                label="Email"
                value={"text"}
               // onChangeText={text => setText(text)}
               selectionColor = "green"
               underlineColor = "gray"
               activeUnderlineColor = "green"
               outlineColor = "green"
               activeOutlineColor = "red"
    />
        </View>
    )
}

export default SignIn;