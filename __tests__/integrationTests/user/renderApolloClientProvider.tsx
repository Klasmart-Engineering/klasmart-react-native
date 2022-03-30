import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { UserServiceApolloClient } from '../../../src/services/user/userServiceApolloClient';

const USER_SERVICE_ENDPOINT = `https://api.alpha.kidsloop.net/user/`;

it(`userServiceApolloClientRendersCorrectly`, () => {
    renderer.create(
        <UserServiceApolloClient endpoint={USER_SERVICE_ENDPOINT}>
            Test User Service
        </UserServiceApolloClient>
    );
});