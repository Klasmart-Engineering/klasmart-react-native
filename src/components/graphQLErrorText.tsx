import { GraphQLError } from "graphql/error";
import React from "react"
import { StyleSheet, Text } from "react-native";

type Props = {
    error: GraphQLError,
};

const style = StyleSheet.create({
    errorText: {
        color: `red`,
        fontSize: 20,
        margin: 8,
    }
});

export const GraphQLErrorText: React.VFC<Props> = ({ error }) => {
    return (
        <Text style={style.errorText}>
            { error.message }
        </Text>
    );
};