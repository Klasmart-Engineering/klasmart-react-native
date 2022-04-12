import {
    ApolloClient,
    NormalizedCacheObject
} from "@apollo/client";
import React, {
    createContext,
    useContext
} from "react";

interface UserServiceApolloClientState {
    client?: ApolloClient<NormalizedCacheObject>;
}

const UserServiceContext = createContext<UserServiceApolloClientState>({});

export default UserServiceContext;

export const useUserService = () => useContext(UserServiceContext);
