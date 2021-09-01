import {Integrations} from '@sentry/tracing';
import * as Sentry from '@sentry/react';

import config from '../config';


export const initSentry = () => {
    if (config.sentryDSN) {
        Sentry.init({
            dsn: config.sentryDSN,
            environment: config.appEnvironment,
            integrations: [new Integrations.BrowserTracing()],
        });
    }
}
