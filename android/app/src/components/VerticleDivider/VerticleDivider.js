import * as React from 'react';
import { View, Text } from 'react-native';
import styles from './VerticleDivider.styles';

const VerticleDivider = () => {
    return (
        <View style={styles.container}>
            <View style={styles.verticalDivider}>
                <View style={styles.reportsCount}>
                    <View style={styles.reportnumber}>
                        <Text style={styles.reportTxt}>2</Text>
                    </View>
                    <View style={styles.reportnumber}>
                        <Text style={styles.report}>Report</Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 70,
                        width: 1,
                        backgroundColor: 'gray'
                    }}
                ></View>
                <View style={styles.reportsCount}>
                    <View style={styles.reportnumber}>
                        <Text style={styles.reportTxt}>0</Text>
                    </View>
                    <View style={styles.reportnumber}>
                        <Text style={styles.report}>Trackers</Text>
                    </View>
                </View>
                <View
                    style={{
                        height: 70,
                        width: 1,
                        backgroundColor: 'gray'
                    }}
                ></View>
                <View style={styles.reportsCount}>
                    <View style={styles.reportnumber}>
                        <Text style={styles.reportTxt}>1</Text>
                    </View>
                    <View style={styles.reportnumber}>
                        <Text style={styles.report}>Provider</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default VerticleDivider;