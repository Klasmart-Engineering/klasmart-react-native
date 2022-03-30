import React from "react";
import { StyleSheet, View } from "react-native";
import { QueryMeStatusText } from "../components/QueryMeStatusText";
import { FetchScheduleStatusText } from "../components/FetchScheduleStatusText";
import { UserServiceApolloClient } from "../services/user/userServiceApolloClient";

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

const style = StyleSheet.create({
    container: {
        height: `100%`,
        backgroundColor: `white`,
        justifyContent: `center`,
        alignItems: `center`,
    },
});

export const UserTestPage: React.VFC = () => {
    return (
        <UserServiceApolloClient endpoint={USER_SERVICE_ENDPOINT}>
            <View style={style.container}>
                <QueryMeStatusText />
            </View>
        </UserServiceApolloClient>
    );
};