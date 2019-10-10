import { reverseMap } from './util';

export const DEPARTMENT_ENUM_MAP = {
    SALES: 'Sales',
    ENGINEERING: 'Engineering',
    CUSTOMER_SUPPORT: 'Customer Support',
    FINANCE: 'Finance',
};

export const DEPARTMENT_ENUM_REVERSE_MAP = reverseMap(DEPARTMENT_ENUM_MAP);

export const OFFICE_LOCATION_ENUM_MAP = {
    LONDON: 'London',
    KYOTO: 'Kyoto',
    SAN_FRANCISCO: 'San Francisco',
    PARIS: 'Paris',
    RIGA: 'Riga',
};

export const OFFICE_LOCATION_REVERSE_MAP = reverseMap(OFFICE_LOCATION_ENUM_MAP);

// This would normally be a deployed URL for production builds. I was checking the NODE_ENV
// and using localhost:3000 only if NODE_ENV !== 'production'; however, this caused API requests
// to fail when running the build with Docker.

// export const GRAPHQL_URI =
//     process.env.NODE_ENV === 'production'
//         ? 'production_url_goes_here'
//         : 'http://localhost:8001/graphql';

export const GRAPHQL_URI = 'http://localhost:8001/graphql';
