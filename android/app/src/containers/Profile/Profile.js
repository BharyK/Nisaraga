import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
//import { Card,Button,Avatar } from 'react-native-elements';
import styles from './Profile.styles';
import Avatar from '../../components/Avatar/Avatar';
import ProgressBar from '../../components/PrograssBar/ProgressBar';
import VerticleDivider from '../../components/VerticleDivider/VerticleDivider';
import AccountHistroy from '../../components/AccountHistory/AccountHistory';
import MyModal from '../../components/Modal/Modal';


const Profile = () => {
    const [modal, setModal] = React.useState(false);

    const handleShowModal = () => setModal(true);
    const handleHideModal = () => setModal(false);
    return (
        <View style={styles.containers}>
            {modal ? <MyModal show={modal} handleHideModal={handleHideModal} /> :
                <View>
                    <View style={styles.container}>
                        <View style={styles.userPhoto}>
                            <Avatar />
                            <View style={styles.userName}>
                                <Text style={styles.userNameTxt}>Bharath</Text>
                                <View style={styles.progressBar}>
                                    <ProgressBar />
                                </View>
                            </View>
                        </View>
                        <VerticleDivider />
                        <AccountHistroy
                            modalActivation={handleShowModal}
                        />
                    </View>
                </View>
            }
        </View>
    )
}

export default Profile;