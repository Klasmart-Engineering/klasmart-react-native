import 'react-native';

import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import useMeQuery from './me';
import UserServiceProvider from '../../Provider';

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

describe(`useMeQuery`, () => {
    test(`generates error without context provider`, () => {
        const { result } = renderHook(() => useMeQuery());

        expect(result.error)
            .toBeDefined();
    });

    test(`generates error without tokens`, async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => {
            return (
                <UserServiceProvider endpoint={USER_SERVICE_ENDPOINT}>
                    {children}
                </UserServiceProvider>
            );
        };

        const { result, waitForNextUpdate } = renderHook(() =>
            useMeQuery(),
            { wrapper }
        );

        await waitForNextUpdate();

        expect(result.current.error !== undefined);
    });
});