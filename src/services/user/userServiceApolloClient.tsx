import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    InMemoryCache,
    NormalizedCacheObject,
} from "@apollo/client";
import React,
{
    createContext,
    useContext,
    useMemo,
} from "react";

type Props = {
    endpoint: string,
}

interface UserServiceApolloClientState {
    client?: ApolloClient<NormalizedCacheObject>;
}

const UserServiceApolloClientContext = createContext<UserServiceApolloClientState>({});

export const UserServiceApolloClient: React.FC<Props> = ({ children, endpoint }) => {
    const client = useMemo(() => {
        const link = new HttpLink({
            uri: `${endpoint}`,
            credentials: `include`,
        });

        const client = new ApolloClient({
            cache: new InMemoryCache(),
            link,
        });

        return client;
    }, [ endpoint ]);

    return (
        <UserServiceApolloClientContext.Provider value={{
            client,
        }}>
            <ApolloProvider client={client}>
                {children}
            </ApolloProvider>
        </UserServiceApolloClientContext.Provider>
    );
};

export const useUserServiceApolloClient = () => useContext(UserServiceApolloClientContext);
