export const createEmployeeMutation = input => ({
    operationName: 'CreateEmployee',
    variables: { input },
    query: `mutation CreateEmployee($input: EmployeeInput) {
        createEmployee(input: $input) {
            uid
            firstName
            lastName
            email
            department
            officeLocation
            jobTitle
            __typename
        }
    }`,
});
