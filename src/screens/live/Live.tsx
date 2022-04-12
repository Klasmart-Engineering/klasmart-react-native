import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import LeaveClassIcon from "../../assets/img/icon_leave_class.svg";
import CameraView from "../../components/Camera/CameraView";

const style = StyleSheet.create({
    container: {
        flexDirection: `row`,
        height: `100%`,
    },
    main: {
        flexGrow: 1,
        flexDirection: `column`,
    },
    content: {
        flexGrow: 1,
        backgroundColor: `blue`,
    },
    toolbar: {
        padding: 14,
        backgroundColor: `green`,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `row`,
    },
    leaveClassButton: {
        width: 64, 
        height: 64, 
        backgroundColor: `red`, 
        borderRadius: 32,
        padding: 14
    },
    side: {
        width: 160,
        height: `100%`,
        backgroundColor: `yellow`,
    },
    sideContent: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingBottom: 8,
    }
});

export interface LiveScreenProps {
}

const LiveScreen: React.VFC<LiveScreenProps> = () => {
    return (
        <View style={style.container}>
            <View style={style.main}>
                <View style={style.content}>
                </View>
                <View style={style.toolbar}>
                    <Pressable style={style.leaveClassButton}>
                        <LeaveClassIcon width={`100%`} height={`100%`} resizeMode={`contain`} />
                    </Pressable>
                </View>
            </View>
            <View style={style.side}>
                <ScrollView contentContainerStyle={style.sideContent}>
                    <CameraView />
                    <CameraView />
                    <CameraView />
                    <CameraView />
                    <CameraView />
                    <CameraView />
                    <CameraView />
                </ScrollView>
            </View>
        </View>
    );
};

export default LiveScreen;
