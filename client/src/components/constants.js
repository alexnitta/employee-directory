import { reverseMap } from '../util';

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
