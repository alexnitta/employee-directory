async function allPhoneNumbers(parentValue, args, context) {
    const query = `
        {
            allPhoneNumbers(func: has(typePhoneNumber)) {
                uid
                number
                extension
                primary
                kind
                otherKind
            }
        }
    `;
    const response = await context.db.newTxn().query(query);

    return response.getJson().allPhoneNumbers;
}

module.exports = allPhoneNumbers;
