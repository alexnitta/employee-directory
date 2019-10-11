// Internationazation has not been implemented yet, but holding all the copy text in one file will
// possibly help if we decide to do that later. At the least, it makes it easier to matain the
// messages in one place.

export const messages = {
    appTitle: 'Employee Directory',
    employeeDetails: {
        columnLabels: {
            name: 'Name',
            email: 'Email',
            jobTitle: 'Job Title',
            department: 'Department',
            officeLocation: 'Location',
            location: 'Hometown',
        },
    },
    employeeSearch: {
        placeholder: 'Search for an employee',
    },
    addEmployee: {
        callToAction: 'Add Employee',
        inputLabels: {
            firstName: 'First Name',
            lastName: 'Last Name',
            email: 'Email',
            jobTitle: 'Job Title',
            department: 'Department',
            officeLocation: 'Location',
            submit: 'Submit',
        },
        selectValues: {
            emptyDepartment: 'Select a department',
            emptyOfficeLocation: 'Select a location',
        },
    },
    filters: {
        header: 'Filters',
        department: {
            label: 'Department',
        },
    },
};
