import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from './SignIn.styles';
import { TextInput, Button } from 'react-native-paper';

const SignIn = () => {
    let screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container, screenWidth]}>
            <Text style={styles.getStarted}>Get Started</Text>
            <Text style={styles.getStartedUnderTxt}>Enter your number to get started</Text>
            <View style={styles.textInput}>
                <TextInput
                    label="Register Mobile Number"
                    value={"+91"}
                    // onChangeText={text => setText(text)}
                    selectionColor="green"
                    underlineColor="gray"
                    activeUnderlineColor="green"
                    outlineColor="green"
                    activeOutlineColor="red"
                    color="red"

                />
                <Button 
                //color = "red" 
                labelStyle={{ color: "red", fontSize: 18 }}
                color="#f08e25" 
                style = {styles.button} 
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                    Procced
                </Button>
            </View>
        </View>
    )
}

export default SignIn;