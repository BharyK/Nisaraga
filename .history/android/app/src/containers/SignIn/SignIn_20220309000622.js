import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from './SignIn.styles';

const SignIn = () => {
    let screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container, screenWidth]}>
            <Text style = {styles.getStarted}>Get Started</Text>
            <Text style = {styles.getStartedUnderTxt}>Get Started</Text>
        </View>
    )
}

export default SignIn;