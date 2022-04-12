import { usePostSchedulesTimeViewList } from "@kl-engineering/cms-api-client";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AxiosError } from "axios";

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

const ScheduleStatusText: React.VFC = () => {
    const { status, refetch, error } = usePostSchedulesTimeViewList({
        time_at: 0,
        time_zone_offset: 0,
        view_type: "day",
        org_id: ""
    });

    return (
        <View style={style.container}>
            <Text style={style.statusText}>
                Status: { status }
            </Text>
            <Text style={style.errorText}>
                {(error as AxiosError)?.message}
            </Text>
            <Button title="Refetch" onPress={() => refetch()}></Button>
        </View>
    );
}

export default ScheduleStatusText;
