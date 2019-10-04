// Dgraph schema

// In most cases, it's natural to want to define a "type" for nodes, as this is how we think of data
// from a REST API and SQL database point of view. For example, to get all users for a REST API,
// the endpoint might be /api/users, and there would be a Users table in the SQL database. Every
// row in the Users table woudl be returned by /api/users. "User" would be the type in this example.

// To give nodes a type (i.e. kind) that maps to our mental model of a SQL table, use a predicate
// set to the default type (string) and leave it blank when creating a node. Then you can filter
// for all the nodes that have that predicate in a query with the `has` function.
// See: https://docs.dgraph.io/howto/#giving-nodes-a-type

module.exports = `
    typePhoneNumber: default .
    number: string .
    extension: string .
    kind: string .
    otherKind: string .
    primary: bool .
`;
