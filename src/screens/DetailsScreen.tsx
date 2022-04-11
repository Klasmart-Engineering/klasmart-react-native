import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { ScreenParams } from "../routes/Provider";
import EditText from "../components/EditText/EditText";

export const DetailsScreenRouteName = `Details`;

export type DetailsParams = {
  id: string;
};

type DetailsScreenProps = NativeStackScreenProps<ScreenParams, `Details`>

const DetailsScreen: React.VFC<DetailsScreenProps> = (props) => {
  return (
    <>
      <Text>Details screen for {props.route.params.id}</Text>
      <EditText />
    </>
  );
};

export default DetailsScreen;
