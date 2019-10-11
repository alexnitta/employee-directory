import { gql } from 'apollo-boost';

export const CREATE_EMPLOYEE = gql`
    mutation CreateEmployee($input: EmployeeInput) {
        createEmployee(input: $input) {
            uid
            firstName
            lastName
            email
            department
            jobTitle
            officeLocation
            pictureMedium
            location {
                city
                state
                country
            }
        }
    }
`;
