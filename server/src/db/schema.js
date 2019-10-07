// Dgraph schema

// In most cases, it's natural to want to define a "type" for nodes, as this is how we think of data
// from a REST API and SQL database point of view. For example, to get all users for a REST API,
// the endpoint might be /api/users, and there would be a Users table in the SQL database. Every
// row in the Users table woudl be returned by /api/users. "User" would be the type in this example.

// To give nodes a type (i.e. kind) that maps to our mental model of a SQL table, use a predicate
// set to the default type (string) and leave it blank when creating a node. Then you can filter
// for all the nodes that have that predicate in a query with the `has` function.
// See: https://docs.dgraph.io/howto/#giving-nodes-a-type

export const schema = `
    typeEmployee: string .
    firstName: string .
    lastName: string .
    gender: string .
    title: string .
    email: string @index(exact) @upsert .

    streetNumber: int .
    streetName: string .
    city: string .
    state: string .
    country: string .
    postcode: string .
    latitude: string .
    longitude: string .
    timezoneOffset: string .
    timezoneDescription: string .
`;

/*
    It would make more sense to add a `location` edge to the employee, but I'm running into trouble
    when the types below are added to the schema. Dgraph throws this error:

    Error initializing Dgraph:  { Error: 2 UNKNOWN: Missing colon
        at Object.exports.createStatusError (/api/node_modules/grpc/src/common.js:91:15)
        at Object.onReceiveStatus (/api/node_modules/grpc/src/client_interceptors.js:1204:28)
        at InterceptingListener._callNext (/api/node_modules/grpc/src/client_interceptors.js:568:42)
        at InterceptingListener.onReceiveStatus (/api/node_modules/grpc/src/client_interceptors.js:618:8)
        at callback (/api/node_modules/grpc/src/client_interceptors.js:845:24)
      code: 2,
      metadata: Metadata { _internal_repr: {}, flags: 0 },
      details: 'Missing colon' }

    From this example, I think that I don't need colons in the type defintions, but the error
    seems to indicate that I do:
    https://github.com/dgraph-io/dgraph-js/blob/master/examples/simple/index.js

    I filed an issue here: https://github.com/dgraph-io/dgraph-js/issues/87

    type Employee {
        typeEmployee: string
        firstName: string
        lastName: string
        gender: string
        title: string
        email: string
        location: uid
    }

    type Location {
        typeLocation: default
        streetNumber: int
        streetName: string
        city: string
        state: string
        country: string
        postcode: string
        latitude: string
        longitude: string
        timezoneOffset: string
        timezoneDescription: string
    }

*/
