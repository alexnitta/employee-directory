/**
 * Reverse an enumeration map, like this:
 * Input:
 *      {
 *          ENUM_NAME: 'Label text',
 *      }
 *
 * Output:
 *      {
 *          'Label text': ENUM_NAME,
 *      }
 */
export const reverseMap = obj =>
    Object.keys(obj).reduce(
        (acc, enumeration) => {
            const label = obj[enumeration];

            acc[label] = enumeration;

            return acc;
        },
        {}
    );
