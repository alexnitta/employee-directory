// Internationazation has not been implemented yet, but holding all the copy text in one file will
// possibly help if we decide to do that later. At the least, it makes it easier to matain the
// messages in one place.

export const messages = {
    employeeDetails: {
        columns: {
            labels: {
                name: 'Name',
                email: 'Email',
                jobTitle: 'Job Title',
                department: 'Department',
                officeLocation: 'Location',
                location: 'Hometown',
            },
        },
    },
    employeeSearch: {
        placeholder: 'Search for an employee',
    },
    addEmployee: {
        callToAction: 'Add Employee',
        form: {
            label: {
                firstName: 'First Name',
                lastName: 'Last Name',
                email: 'Email',
                jobTitle: 'Job Title',
                department: 'Department',
            },
        },
    },
    filters: {
        department: {
            label: 'Department',
        },
    },
};
