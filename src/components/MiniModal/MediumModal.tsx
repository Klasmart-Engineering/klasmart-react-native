import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import { ScreenParams } from "../../routes/Provider";
import { DetailsScreenRouteName } from "../../screens/DetailsScreen";
import React from "react";
import { MiniModalRouteName } from "./MiniModal";

export type MediumModalParams = {
}

export const MediumModalRouteName = `MediumModal`;

type MediumModalProps = NativeStackScreenProps<ScreenParams, `MediumModal`>

const MediumModal: React.VFC<MediumModalProps> = (props) => {
  return (
    <View style={{
      borderRadius: 12,
      backgroundColor: `#FFDADA`,
    }}>
      <Text>Medium modal</Text>
      <Button
        title="Open Mini modal"
        onPress={() => props.navigation.navigate(MiniModalRouteName, {})}
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

export default MediumModal;
