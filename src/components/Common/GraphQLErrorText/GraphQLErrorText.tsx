import { GraphQLError } from "graphql/error";
import React from "react"
import { StyleSheet, Text } from "react-native";

export interface GraphQLErrorTextProps {
    error: GraphQLError,
};

const style = StyleSheet.create({
    errorText: {
        color: `red`,
        fontSize: 20,
        margin: 8,
    }
});

const GraphQLErrorText: React.VFC<GraphQLErrorTextProps> = (props) => {
    return (
        <Text style={style.errorText}>
            {props.error.message}
        </Text>
    );
};

export default GraphQLErrorText;
