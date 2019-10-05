const dgraph = require('dgraph-js');

async function createEmployee(parentValue, args, context) {
    const transaction = context.db.newTxn();
    const mutation = new dgraph.Mutation();
    const employee = { ...args.input };

    employee.uid = '_:employeeId',
    employee.typeEmployee = '';

    mutation.setSetJson(employee);

    const response = await transaction.mutate(mutation);

    await transaction.commit();

    const mutationUid = response.getUidsMap().get('employeeId');

    employee.uid = mutationUid;

    return employee;
}

module.exports = createEmployee;
