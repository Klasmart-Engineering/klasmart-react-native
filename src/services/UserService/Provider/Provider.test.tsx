import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import UserServiceProvider from './Provider';

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

test(`userServiceApolloClientRendersCorrectly`, () => {
    renderer.create(
        <UserServiceProvider endpoint={USER_SERVICE_ENDPOINT}>
            Test User Service
        </UserServiceProvider>
    );
});