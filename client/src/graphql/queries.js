import { gql } from 'apollo-boost';

export const ALL_EMPLOYEES = gql`
    query {
        allEmployees {
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

export const SIDEBAR_OPEN = gql`
    {
        sidebarClosed @client
    }
`;
