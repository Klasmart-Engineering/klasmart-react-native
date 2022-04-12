import { CmsApiClientProvider } from "@kl-engineering/cms-api-client";
import React from "react";

const DEFAULT_CMS_API_ENDPOINT = `https://cms.alpha.kidsloop.net`;

export interface CmsApiProviderProps {
    endpoint?: string,
};

const CmsProvider: React.FC<CmsApiProviderProps> = (props) => {
    return (
        <CmsApiClientProvider config={{
            baseURL: props.endpoint ?? DEFAULT_CMS_API_ENDPOINT,
            withCredentials: true,
        }}>
            {props.children}
        </CmsApiClientProvider>
    )
};

export default CmsProvider;