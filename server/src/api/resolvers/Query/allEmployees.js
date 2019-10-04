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
            }
        }
    `;
    const response = await context.db.newTxn().query(query);

    return response.getJson().allEmployees;
}

module.exports = allEmployees;
