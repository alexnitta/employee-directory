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
                phone
                cell
                pictureLarge
                pictureMedium
                pictureThumbnail
                nat
                department
                jobTitle
                officeLocation
                location {
                    uid
                    streetName
                    streetNumber
                    city
                    state
                    country
                    postcode
                    latitude
                    longitude
                    timezoneOffset
                    timezoneDescription
                }
            }
        }
    `;
    const response = await context.db.newTxn().query(query);

    return response.getJson().allEmployees;
}

export { allEmployees };
