import React, { memo } from 'react';
import { Router, Scene } from 'react-native-router-flux'



const LandingPage = load(() =>
    import('./containers/LandingPage/LandingPage')
);
const Home = load(() =>
    import('./containers/Home/Home')
);

const Reports = load(() =>
    import('./containers/Reports/Reports')
);

const Profile = load(() =>
    import('./containers/Profile/Profile')
);

const Stack = createNativeStackNavigator();

const RoutesComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={LandingPage}
                //options={{ title: 'Welcome' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RoutesComponent;