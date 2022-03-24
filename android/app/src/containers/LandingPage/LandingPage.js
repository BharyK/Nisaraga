import * as React from 'react';
import { BottomNavigation, Text, } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView} from 'react-native';


import Home from '../Home/Home';
import Reports from '../Reports/Reports';
import Profile from '../Profile/Profile';

const homeRoute = () => 
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}><Home/></ScrollView>;
const ReportsRoute = () =>  
     <ScrollView contentContainerStyle={{ flexGrow: 1 }}><Reports/></ScrollView>;
const TrackersRoute = () => <Text>Trackers</Text>;
const ProfileRoute = () => 
     <ScrollView contentContainerStyle={{ flexGrow: 1 }}><Profile/></ScrollView>;


const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon:(props) =>  <AntDesign {...props} name = "home" size = {25} height = {60}/> },
        { key: 'reports', title: 'Reports', icon:(props) =>  <AntDesign {...props} name = "filetext1" size = {25}/> },
        { key: 'trackers', title: 'Trackers',icon:(props) =>  <AntDesign {...props} name = "linechart" size = {25}/> },
        { key: 'profile', title: 'Profile', icon:(props) =>  <AntDesign {...props} name = "user" size = {25}/> },
    ]);

    const renderScene = BottomNavigation.SceneMap({

        home: homeRoute,
        reports: ReportsRoute,
        trackers: TrackersRoute,
        profile: ProfileRoute,
    });
// const renderScene = ({ route, jumpTo }) => {
//   switch (route.key) {
//     case 'home':
//       return <Home jumpTo={jumpTo} />;
//     case 'reports':
//       return <Reports jumpTo={jumpTo} />;
//       case 'trackers':
//         return <Home jumpTo={jumpTo} />;
//       case 'profile':
//         return <Profile jumpTo={jumpTo} />;
//   }
// }

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            barStyle={{ backgroundColor: '#fff', fontSize: "18px" }}
            badge="text"
            activeColor="green"
            inactiveColor="gray"
            labeled={true}
            shifting={false}
           // tabBarStyle = {{height : 100}}
            top= {52}
            style = {{height: 300}}
        />
    );
};

export default MyComponent;