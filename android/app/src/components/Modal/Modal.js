import * as React from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { Paragraph, Dialog, Portal, Text } from 'react-native-paper';
import styles from './Modal.styles';

const MyModal = ({show, handleHideModal}) => { 
  const height =  Dimensions.get('window').height;
  const containerStyle = {backgroundColor: 'white', padding: 20};
  let modalHeight = Dimensions.get('window').height;
  return (
    <Portal>
      <Dialog visible={show} onDismiss={handleHideModal}>
        <Dialog.ScrollArea>
          <Text 
          style = {styles.closeButton}
          onPress={handleHideModal}
          >X</Text>
          <ScrollView 
          contentContainerStyle={{paddingHorizontal: 20}}
          style = {height}
          contentContainerStyle={{height: modalHeight}}
          >
            <Text>This is a scrollable area</Text>
          </ScrollView>
        </Dialog.ScrollArea>
      </Dialog>
    </Portal>
  );
};

export default MyModal;