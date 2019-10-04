const dgraph = require("dgraph-js");

async function createEmployee(parentValue, args, context) {
    const transaction = context.db.newTxn();
    // TODO get these values from args
    const employee = {
        uid: '_:employeeId',
        typeEmployee: '',
        firstName: 'John',
        lastName: 'Deer',
        gender: 'MALE',
        title: 'Mr.',
        email: 'john@deer.com',
    };
    const mutation = new dgraph.Mutation();
    mutation.setSetJson(employee);

    const response = await transaction.mutate(mutation);

    await transaction.commit();
    const mutationUid = response.getUidsMap().get("employeeId");

    employee.uid = mutationUid;

    return employee;
}

module.exports = createEmployee;
