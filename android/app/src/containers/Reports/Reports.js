import * as React from 'react';
import { Text, View, Dimensions } from 'react-native';
import styles from './Reports.styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Reports = () => {
    let width = Dimensions.get('window').width;
    return (
        <View style={[styles.container, width]} >
            <View style={styles.headerTxtAlign}>
                <Text style={styles.reportHeaderTxt}>Medical Reports</Text>
                <Entypo style={styles.headerIcon} color="gray" name="merge" size={30} />
            </View>
            <Text style = {styles.description}>
                Medical records from your recent visit will appear here
            </Text>
            <View style = {[styles.reportsLists, width]}>
                <View style = {[styles.listSection]}>
                    <Text style = {styles.reportTxt}>Nisarga Diagnostics Banglore</Text>
                    <Text style = {styles.reportDate}>16th Feb 2022</Text>
                </View>
            </View>
            <Text style = {styles.reportName}>
                Hb% (HEMOGLOBIN)
            </Text>

            <View style = {[styles.reportsLists, width]}>
                <View style = {[styles.listSection]}>
                    <Text style = {styles.reportTxt}>Nisarga Diagnostics Banglore</Text>
                    <Text style = {styles.reportDate}>16th Feb 2022</Text>
                </View>
            </View>
            <Text style = {styles.reportName}>
                Hb% (HEMOGLOBIN)
            </Text>
        </View>
    )
}

export default Reports;