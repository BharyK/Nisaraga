import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './AccountHistory.styles'

const AccountHistry = ({modalActivation}) => {
    let width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <View style={styles.accountHistorySection}>
                <View style={styles.grayBackground}></View>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt} onPress = {() => modalActivation("Bharath")}>
                        View Transaction Hisotry
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt} onPress = {() => modalActivation("Bharath")}>
                        View Upcoming Order
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt} onPress = {() => modalActivation("Bharath")}>
                        Edit Profile
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>


            <View style={styles.accountHistorySection}>
                <View style={styles.grayBackground}>
                    <Text style={styles.grayBackgroundText}>Preferences</Text>
                </View>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt} onPress = {() => modalActivation("Bharath")}>
                        Notification</Text>
                    <Text style={styles.notificationTxt}>
                        Disable push and other notification about report,
                        payments, offers and trackers
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.grayBackground}>
                    <Text style={styles.grayBackgroundText}>Help & Support</Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt}>
                        Feedback
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.listEditAccount}>
                    <Text style={styles.accountTxt}>
                        About Us
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>

            <View style={styles.accountHistorySection}>
                <View style={styles.listEditAccount}>
                    <Text style={styles.signoutTxt}>
                        Sign Out
                    </Text>
                </View>
                <View style={styles.underline}></View>
            </View>
        </View>
    )
}

export default AccountHistry;