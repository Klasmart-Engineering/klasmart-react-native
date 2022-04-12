import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
} from "@apollo/client";
import UserServiceContext from "../Context"
import React, {
    useMemo,
} from "react";

export interface UserServiceProviderProps {
    endpoint: string;
}

const UserServiceProvider: React.FC<UserServiceProviderProps> = (props) => {
    const client = useMemo(() => {
        const link = new HttpLink({
            uri: `${props.endpoint}`,
            credentials: `include`,
        });

        const client = new ApolloClient({
            cache: new InMemoryCache(),
            link,
        });

        return client;
    }, [ props.endpoint ]);

    return (
        <UserServiceContext.Provider value={{
            client,
        }}>
            <ApolloProvider client={client}>
                {props.children}
            </ApolloProvider>
        </UserServiceContext.Provider>
    );
};

export default UserServiceProvider;
