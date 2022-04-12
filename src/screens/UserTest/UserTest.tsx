import React from "react";
import { StyleSheet, View } from "react-native";
import MeStatusText from "../../components/MeStatusText";
import UserServiceProvider from "../../services/UserService/Provider/Provider";

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        justifyContent: `center`,
        alignItems: `center`,
    },
});

const UserTestScreen: React.VFC = () => {
    return (
        <UserServiceProvider endpoint={USER_SERVICE_ENDPOINT}>
            <View style={style.container}>
                <MeStatusText />
            </View>
        </UserServiceProvider>
    );
};

export default UserTestScreen;
