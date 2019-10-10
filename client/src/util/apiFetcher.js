import { GRAPHQL_URI } from '../constants';

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'POST',
};

/**
 * A wrapper around fetch() which catches HTTP errors and displays them with console.error().
 * In a production environment, we would want to persist these errors to a logging service.
 */
export const apiFetcher = (body, config = {}) => {
    const finalConfig = {
        ...defaultConfig,
        ...config,
        body: JSON.stringify(body),
    };

    return fetch(GRAPHQL_URI, finalConfig)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                const { status } = response;

                return response.text().then(text => {
                    return Promise.reject(
                        new Error(`status: ${status} \nbody: ${text}`)
                    );
                });
            }
        })
        .catch(error => {
            console.error(`Error in fetch():\nURL: ${GRAPHQL_URI}\n${error}`);
            return {};
        });
};
