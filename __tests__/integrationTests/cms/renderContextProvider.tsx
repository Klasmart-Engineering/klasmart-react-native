import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { CmsApiClientProvider } from '@kl-engineering/cms-api-client';

it(`cmsContextProviderRendersCorrectly`, () => {
    renderer.create(
        <CmsApiClientProvider config={{}}>
            Test CMS
        </CmsApiClientProvider>
    );
});