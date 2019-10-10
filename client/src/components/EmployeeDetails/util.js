import get from 'lodash/get';

import { DEPARTMENT_ENUM_MAP, OFFICE_LOCATION_ENUM_MAP } from '../../constants';

export const departmentEnumToString = departmentEnum =>
    DEPARTMENT_ENUM_MAP[departmentEnum];

export const officeLocationEnumToString = officeLocationEnum =>
    OFFICE_LOCATION_ENUM_MAP[officeLocationEnum];

export const transformAllEmployees = allEmployees =>
    allEmployees.map(employee => {
        const {
            uid,
            firstName,
            lastName,
            email,
            phone,
            jobTitle,
            pictureMedium,
        } = employee;
        const fullName = `${firstName} ${lastName}`;
        const department = departmentEnumToString(employee.department);
        const officeLocation = officeLocationEnumToString(
            employee.officeLocation
        );
        const locationData = get(employee, ['location', 0], {});
        let { city, state, country } = locationData;

        const locationList = [city, state, country].reduce((acc, curr) => {
            curr && acc.push(curr);
            return acc;
        }, []);

        const location = locationData ? locationList.join(', ') : '';

        return {
            uid,
            fullName,
            email,
            phone,
            jobTitle,
            department,
            officeLocation,
            pictureMedium,
            location,
        };
    });
