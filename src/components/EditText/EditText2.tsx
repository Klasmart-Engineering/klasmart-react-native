import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, TextInput } from 'react-native';
import { ScreenParams } from '../../routes/Provider';
import { DetailsScreenRouteName } from '../../screens/DetailsScreen';
import { HomeParams } from '../../screens/HomeScreen';

interface EditText2Props {
}

const EditText2: React.VFC<EditText2Props> = (props) => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes? 1',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {
              text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              // onPress: () => navigation.dispatch(e.data.action),
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
        Alert.alert(
          'Discard changes? 2',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {
              text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <TextInput
      value={text}
      placeholder="Type something…"
      onChangeText={setText}
    />
  );
}

export default EditText2;
