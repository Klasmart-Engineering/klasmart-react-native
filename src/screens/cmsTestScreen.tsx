import React from "react";
import { StyleSheet, View } from "react-native";
import { FetchScheduleStatusText } from "../components/fetchScheduleStatusText";
import { CmsApiProvider } from "../providers/CmsApiProvider";

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        justifyContent: `center`,
        alignItems: `center`,
    },
});

export const CmsTestScreen: React.VFC = () => {
    return (
        <CmsApiProvider>
            <View style={style.container}>
                <FetchScheduleStatusText />
            </View>
        </CmsApiProvider>
    );
};