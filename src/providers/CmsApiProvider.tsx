import { CmsApiClientProvider } from "@kl-engineering/cms-api-client";
import React from "react";

const DEFAULT_CMS_API_ENDPOINT = `https://cms.alpha.kidsloop.net`;

type Props = {
    endpoint?: string,
};

export const CmsApiProvider: React.FC<Props> = ({ children, endpoint }) => {
    return (
        <CmsApiClientProvider config={{
            baseURL: endpoint ?? DEFAULT_CMS_API_ENDPOINT,
            withCredentials: true,
        }}>
            {children}
        </CmsApiClientProvider>
    )
};