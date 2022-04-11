import React from "react";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import { Text } from "react-native-paper";
import { ScreenParams } from '../routes/Provider';
import { DetailsScreenRouteName } from './DetailsScreen';
import EditText from "../components/EditText/EditText";
import { MiniModalRouteName } from "../components/MiniModal/MiniModal";
import ModalTester from "../components/ModalTester/ModalTester";
export const HomeScreenRouteName = `Home`;

export type HomeParams = {
};

type HomeScreenProps = NativeStackScreenProps<ScreenParams, `Home`>

const HomeScreen: React.VFC<HomeScreenProps> = (props) => {
  return (
    <>
      <Text>Home</Text>
      <EditText />
      <Button
        title="Go to Details 666"
        onPress={() => props.navigation.navigate(DetailsScreenRouteName, {
          id: `666`
        })}
      />
      <Button
        title="Go to Details 123"
        onPress={() => props.navigation.navigate(DetailsScreenRouteName, {
          id: `123`
        })}
      />
      <Button
        title="Open mini modal"
        onPress={() => props.navigation.navigate(MiniModalRouteName, {})}
      />
      <ModalTester />
    </>
  );
};

export default HomeScreen;
