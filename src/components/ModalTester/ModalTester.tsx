import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import { DetailsScreenRouteName } from "../../screens/Details";

const ModalTester: React.VFC = () => {
  const navigation = useNavigation();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible} onBackButtonPress={() => setModalVisible(false)}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
          <Button
            title="Go to Details 666"
            onPress={async () => {
              setModalVisible(false);
              navigation.navigate(DetailsScreenRouteName, {
                id: `666`
              })
              setModalVisible(true);
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;