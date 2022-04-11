import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { ScreenParams } from "../../routes/Provider";
import { DetailsScreenRouteName } from "../../screens/DetailsScreen";
import React from "react";
import { MediumModalRouteName } from "./MediumModal";

export type MiniModalParams = {
}

export const MiniModalRouteName = `MiniModal`;

type MiniModalProps = NativeStackScreenProps<ScreenParams, `MiniModal`>

const MiniModal: React.VFC<MiniModalProps> = (props) => {
  return (
    <View style={{
      borderRadius: 12,
      backgroundColor: `#FFDADA`,
    }}>
      <Text>Mini modal</Text>
      <Button
        title="Open Medium modal"
        onPress={() => props.navigation.navigate(MediumModalRouteName, {})}
      />
      <Button
        title="Go to Details 666"
        onPress={() => props.navigation.navigate(DetailsScreenRouteName, {
          id: `666`
        })}
      />
    </View>
  );
};

export default MiniModal;
