import 'react-native';

import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useMeQuery } from '../../../src/services/user/queries/meQuery';
import { UserServiceApolloClient } from '../../../src/services/user/userServiceApolloClient';

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

describe(`useMeQuery`, () => {
    it(`generates error without context provider`, () => {
        const { result } = renderHook(() => useMeQuery());

        expect(result.error)
            .toBeDefined();
    }),
        it(`generates error without tokens`, async () => {
            const wrapper = ({ children }: { children: React.ReactNode }) => {
                return (
                    <UserServiceApolloClient endpoint={USER_SERVICE_ENDPOINT}>
                        {children}
                    </UserServiceApolloClient>
                );
            };

            const { result, waitForNextUpdate } = renderHook(() =>
                useMeQuery(),
                { wrapper }
            );

            await waitForNextUpdate();

            expect(result.current.error !== undefined);
        })
});