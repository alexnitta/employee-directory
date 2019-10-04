Here's a list of what should be in the `.env` file for `/server`.

When you see text like `<password>`, replace the entire string with the appropriate value.

## Contents of `server/.env`

```
# This will usually be "development" or "production"
ENV=development

# The port that GraphQL is exposed on.
GRAPHQL_PORT=8001

# For Docker development, this is "host.docker.internal".
# If running DGraph locally, it would be "localhost".
# In production, it will be a deployed hostname.
DGRAPH_HOST=host.docker.internal
DGRAPH_PORT=8080
```
