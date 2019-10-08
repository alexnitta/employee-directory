import React from 'react';
import { Button } from 'rendition';

import { messages } from '../../locale/en_us';

const { addEmployee } = messages;

export const AddEmployee = () => (
    <Button primary>{addEmployee.callToAction}</Button>
);
