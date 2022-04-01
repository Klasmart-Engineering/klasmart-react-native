import 'react-native';

import { AxiosError } from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { CmsApiClientProvider, usePostSchedulesTimeViewList } from '@kl-engineering/cms-api-client';
import React from 'react';

const CMS_API_ENDPOINT = `https://cms.alpha.kidsloop.net`;

describe(`usePostSchedulesTimeViewList`, () => {
    it(`generates error without context provider`, () => {
        const { result } = renderHook(() => usePostSchedulesTimeViewList({
            time_at: 0,
            time_zone_offset: 0,
            view_type: 'day',
            org_id: ''
        }));

        expect(result.error)
            .toBeDefined();
    }),
    it(`generates authorization error without tokens`, async () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => {
            return (
                <CmsApiClientProvider config={{
                    baseURL: CMS_API_ENDPOINT,
                    withCredentials: true,
                }}
                queryOptions={{
                    defaultOptions: {
                        queries: {
                            retry: 0,
                        }
                    }
                }}
                >
                    {children}
                </CmsApiClientProvider>
            );
        };

        const { result, waitForNextUpdate } = renderHook(() => 
            usePostSchedulesTimeViewList({
                time_at: 0,
                time_zone_offset: 0,
                view_type: 'day',
                org_id: ''
            }), 
            { wrapper }
        );

        await waitForNextUpdate();

        expect((result.current.error as AxiosError).response?.status).toBe(401);
        expect((result.current.error as AxiosError).response?.data?.label).toBe(`general_error_unauthorized`);
    })
});