import { DEPARTMENT_ENUM_MAP, OFFICE_LOCATION_ENUM_MAP } from './constants';

export const departmentEnumToString = departmentEnum => DEPARTMENT_ENUM_MAP[departmentEnum];
export const officeLocationEnumToString = officeLocationEnum =>
    OFFICE_LOCATION_ENUM_MAP[officeLocationEnum];
