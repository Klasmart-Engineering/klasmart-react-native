import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useMeQuery } from "../services/user/queries/meQuery";
import { GraphQLErrorText } from "./graphQLErrorText";

const style = StyleSheet.create({
    container: {
        flexDirection: `column`,
    },
    statusText: {
        color: `black`,
        fontSize: 24,
        fontWeight: `bold`,
        marginTop: 8,
    },
    errorText: {
        color: `black`,
        fontSize: 20,
        margin: 8,
    }
});

export const QueryMeStatusText: React.VFC = () => {
    const { refetch, error, data } = useMeQuery();

    return (
        <View style={style.container}>
            <Text style={style.statusText}>
                Data: {JSON.stringify(data)}
            </Text>
            { error?.graphQLErrors.map((e, i) => <GraphQLErrorText key={i} error={e} />)}
            <Button title="Refetch" onPress={() => refetch()}></Button>
        </View>
    );
}