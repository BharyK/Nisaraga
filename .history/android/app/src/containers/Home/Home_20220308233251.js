import * as React from 'react';
import styles from './Home.styles';
import { Text, View, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const screenHeight = Dimensions.get('window').height
    let screenWidth = Dimensions.get('window').width;

    const goToMyProfile = () => {
        alert ("Bharath")
       // Actions.profile()
     }
    return (
        <View style={styles.container}>
            <Text style={styles.duration}>Good Afternoon,</Text>
            <Text style={styles.headerName}>Bharath</Text>
            <View style={styles.cardContainer}>
                <View style={[styles.card, screenWidth]}>
                    <View style={styles.cardHeaderSection}>
                        <View style={styles.cardHeaderIcon}>
                            <FontAwesome name="heartbeat" size={30} color="#6EC300" />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTxt}>Your Reports</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            You have unread reports from Nisarga Diagnostics
                            Banglore cick to view them
                        </Text>
                        <Text style={styles.unreadReports}>
                            Unread Reports
                        </Text>
                    </View>
                </View>

                <View style={[styles.card, screenWidth]}>
                    <View style={styles.cardHeaderSection}>
                        <View style={styles.cardHeaderIcon}>
                            <FontAwesome name="calendar" size={30} color="#6EC300" />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTxt}>Book Appointment / Home Collection</Text>
                        </View>
                    </View>
                    <View style={{ opacity: 0 }}>
                        <Text>
                            You have unread reports from Nisarga Diagnostics
                            Banglore cick to view thems
                        </Text>
                        <Text style={styles.unreadReports}>
                            Unread Reports
                        </Text>
                    </View>
                </View>

                <View style={[styles.card, screenWidth]} onPress = { goToMyProfile}>
                    <View style={styles.cardHeaderSection}>
                        <View style={styles.cardHeaderIcon}>
                            <FontAwesome name="user" size={30} color="#6EC300" />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTxt}>Complete your profile</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            Complete profile helps us get better insights and
                            provide better experience.
                        </Text>
                        <Text style={styles.unreadReports}>
                            Click here to update now
                        </Text>
                    </View>
                </View>

                <View style={[styles.card, screenWidth]}>
                    <View style={styles.cardHeaderSection}>
                        <View style={styles.cardHeaderIcon}>
                            <FontAwesome name="flag" size={30} color="#6EC300" />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTxt}>Tell us more</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            How active are you?
                        </Text>
                        <Text style={styles.unreadReports}>
                            Help us personalise the experience for you
                        </Text>
                    </View>
                </View>


                <View style={[styles.card, screenWidth]}>
                    <View style={styles.cardHeaderSection}>
                        <View style={styles.cardHeaderIcon}>
                            <FontAwesome name="area-chart" size={30} color="#6EC300" />
                        </View>
                        <View>
                            <Text style={styles.cardHeaderTxt}>Tips & Tricks</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            You can view the reports of your relatives and friends
                            those are registered under your number
                        </Text>
                        <Text style={styles.unreadReports}>
                            Unread Reports
                        </Text>
                    </View>
                </View>
            </View>
        </View>

    )
}

export default Home;