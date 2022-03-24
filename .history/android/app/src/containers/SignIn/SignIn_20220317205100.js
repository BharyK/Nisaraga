import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from './SignIn.styles';
import { TextInput, Button } from 'react-native-paper';

const SignIn = () => {
    let screenWidth = Dimensions.get('window').width;
    const [number, SetNumber] = useState('')
    return (
        <View style={[styles.container, screenWidth]}>
            <Text style={styles.getStarted}>Get Started</Text>
            <Text style={styles.getStartedUnderTxt}>Enter your number to get started</Text>
            <View style={styles.textInput}>
                <TextInput
                    label="Register Mobile Number"
                    value = {`+91${number}`}
                    // onChangeText={text => setText(text)}
                    selectionColor="green"
                    underlineColor="gray"
                    activeUnderlineColor="green"
                    outlineColor="green"
                    activeOutlineColor="red"
                    color="red"

                />
                <View style={styles.processedBtn}>
                    <Button
                        labelStyle={{ color: "white", fontSize: 18 }}
                        style={{ width: "100%", height: 50, backgroundColor: '#6EC300' }}
                        dark={true}
                        onPress={() => console.log('Pressed')}>
                        Procced
                    </Button>
                </View>
            </View>
        </View>
    )
}

export default SignIn;