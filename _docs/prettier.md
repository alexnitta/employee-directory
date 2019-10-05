# Using prettier to format code

We're using [`prettier`](https://prettier.io) to format .js and .jsx files.

Since this project actually contains two package.json files (one in `client` and one in `server`) which exist in a subfolder of the git repo, the usual method of setting up prettier with a pre-commit hook won't work.

Follow these instructions to set up a Bash script that will run as a pre-commit hook. This ensures that each commit is automatically formatted.

Note that these instructions mirror what is in [the prettier docs](https://prettier.io/docs/en/precommit.html#option-5-bash-script), but with a slightly different path to the prettier bin. This is because we only inlcude prettier as a dev dependency of `server`, but want to use it to format both `client` and `server`.

## Set up a pre-commit hook

1. Save this script as .git/hooks/pre-commit:
    ```bash
    #!/bin/sh
    FILES=$(git diff --cached --name-only --diff-filter=ACMR "*.js" "*.jsx" | sed 's| |\\ |g')
    [ -z "$FILES" ] && exit 0

    # Prettify all selected files
    echo "$FILES" | xargs ./server/node_modules/.bin/prettier --write

    # Add back the modified/prettified files to staging
    echo "$FILES" | xargs git add

    exit 0
    ```
2. Run `chmod +x .git/hooks/pre-commit` to give it execute permissions.
