async function allEmployees(parentValue, args, context) {
    const query = `
        {
            allEmployees(func: has(typeEmployee)) {
                uid
                firstName
                lastName
                title
                gender
                email
                location {
                    uid
                    streetName
                    streetNumber
                }
            }
        }
    `;
    const response = await context.db.newTxn().query(query);

    return response.getJson().allEmployees;
}

export { allEmployees };
