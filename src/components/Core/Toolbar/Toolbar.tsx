import React from "react";
import { Text, View } from "react-native";

interface ToolbarProps {
}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: `center`,
        justifyContent: `center`,
        height: 100,
        width: `100%`,
        padding: 20
      }}
    >
      <Text>My super toolbar</Text>
    </View>
  );
};

export default Toolbar;
