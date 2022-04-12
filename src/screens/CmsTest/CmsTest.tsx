import React from "react";
import { StyleSheet, View } from "react-native";
import ScheduleStatusText from "../../components/ScheduleStatusText";
import CmsProvider from "../../services/Cms/Provider";

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        justifyContent: `center`,
        alignItems: `center`,
    },
});

const CmsTestScreen: React.VFC = () => {
    return (
        <CmsProvider>
            <View style={style.container}>
                <ScheduleStatusText />
            </View>
        </CmsProvider>
    );
};

export default CmsTestScreen;
