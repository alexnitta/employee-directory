const dgraph = require("dgraph-js");

// This is a GraphQL resolver function
async function createPhoneNumber(parentValue, args, context) {
    const transaction = context.db.newTxn();
    // This would normally be populated from the args; just putting in static data as an example
    const phoneNumber = {
        uid: '_:testNumber',
        typePhoneNumber: '',
        number: '0123456789',
        extension: '',
        kind: 'HOME',
        primary: true,
    };
    const mutation = new dgraph.Mutation();
    mutation.setSetJson(phoneNumber);

    const response = await transaction.mutate(mutation);

    await transaction.commit();

    // From reading the docs, it doesn't look like it's possible to get the mutated data from the
    // transaction. With a query, we can do:
    //      return response.getJson().allPhoneNumbers;
    // where allPhoneNumbers was the name of a function in the query. This sends back the queried
    // data.

    // If we get a UID back when using response.getUidsMap(), does it mean that the mutation was
    // successful?
    // Interestingly, this will give us a value even if we don't use mutation.setCommitNow(true) or
    // use
    const mutationUid = response.getUidsMap().get("testNumber")
    phoneNumber.uid = mutationUid;

    return phoneNumber;
}

module.exports = createPhoneNumber;
