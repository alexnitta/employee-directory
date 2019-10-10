import React, { useState } from 'react';
import { Button } from 'rendition';
import styled from 'styled-components/macro';
import { connect } from 'react-redux';
import get from 'lodash/get';

import { addEmployee } from '../../redux/actionCreators';
import { messages } from '../../locale/en_us';
import {
    DEPARTMENT_ENUM_REVERSE_MAP,
    OFFICE_LOCATION_REVERSE_MAP,
} from '../../constants';
import { apiFetcher, apiRequestGenerators } from '../../util';

const { createEmployeeMutation } = apiRequestGenerators;

const StyledForm = styled.form`
    padding: 20px 10px;

    label {
        display: flex;
        justify-content: space-between;
        padding-bottom: 8px;
        white-space: nowrap;
    }

    input {
        margin-left: 10px;
        border-radius: 3px;
    }
`;

const SubmitButtonWrapper = styled.div`
    text-align: center;
`;

const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    department: { enumeration: '', label: '' },
    officeLocation: { enumeration: '', label: '' },
};

const AddEmployeeForm = ({ open, setOpen, dispatchAddEmployee }) => {
    const [formState, setFormState] = useState(initialFormState);

    if (!open) {
        return null;
    }

    return (
        <StyledForm
            onSubmit={e => {
                e.preventDefault();
                const input = {
                    ...formState,
                    department: formState.department.enumeration,
                    officeLocation: formState.officeLocation.enumeration,
                };
                const body = createEmployeeMutation(input);
                apiFetcher(body).then(json => {
                    const employee = get(json, 'data.createEmployee');

                    if (employee) {
                        dispatchAddEmployee(employee);
                        setOpen(false);
                    } else {
                        // TODO: better error messaging
                        alert(
                            'Encountered an error when creating employee. Please try again.'
                        );
                    }
                });
            }}
        >
            <label>
                {messages.addEmployee.form.label.firstName}
                <input
                    required
                    value={formState.firstName}
                    onChange={e =>
                        setFormState({
                            ...formState,
                            firstName: e.target.value,
                        })
                    }
                />
            </label>
            <label>
                {messages.addEmployee.form.label.lastName}
                <input
                    required
                    value={formState.lastName}
                    onChange={e =>
                        setFormState({ ...formState, lastName: e.target.value })
                    }
                />
            </label>
            <label>
                {messages.addEmployee.form.label.email}
                <input
                    required
                    type="email"
                    value={formState.email}
                    onChange={e =>
                        setFormState({ ...formState, email: e.target.value })
                    }
                />
            </label>
            <label>
                {messages.addEmployee.form.label.jobTitle}
                <input
                    required
                    value={formState.jobTitle}
                    onChange={e =>
                        setFormState({ ...formState, jobTitle: e.target.value })
                    }
                />
            </label>
            <label>
                {messages.addEmployee.form.label.department}
                <select
                    required
                    value={formState.department.label}
                    onChange={e => {
                        const label = e.target.value;
                        const enumeration = DEPARTMENT_ENUM_REVERSE_MAP[label];
                        setFormState({
                            ...formState,
                            department: {
                                label,
                                enumeration,
                            },
                        });
                    }}
                >
                    <option value="">
                        {messages.addEmployee.form.select.value.emptyDepartment}
                    </option>
                    {Object.keys(DEPARTMENT_ENUM_REVERSE_MAP).map(
                        department => {
                            return (
                                <option key={department}>{department}</option>
                            );
                        }
                    )}
                </select>
            </label>
            <label>
                {messages.addEmployee.form.label.officeLocation}
                <select
                    required
                    value={formState.officeLocation.label}
                    onChange={e => {
                        const label = e.target.value;
                        const enumeration = OFFICE_LOCATION_REVERSE_MAP[label];

                        setFormState({
                            ...formState,
                            officeLocation: {
                                label,
                                enumeration,
                            },
                        });
                    }}
                >
                    <option value="">
                        {
                            messages.addEmployee.form.select.value
                                .emptyOfficeLocation
                        }
                    </option>
                    {Object.keys(OFFICE_LOCATION_REVERSE_MAP).map(
                        officeLocation => {
                            return (
                                <option key={officeLocation}>
                                    {officeLocation}
                                </option>
                            );
                        }
                    )}
                </select>
            </label>
            <SubmitButtonWrapper>
                <Button flex="0 1 auto" primary type="submit">
                    {messages.addEmployee.form.label.submit}
                </Button>
            </SubmitButtonWrapper>
        </StyledForm>
    );
};

const mapDispatchToProps = dispatch => ({
    dispatchAddEmployee: employee => dispatch(addEmployee({ employee })),
});

export default connect(
    null,
    mapDispatchToProps
)(AddEmployeeForm);
