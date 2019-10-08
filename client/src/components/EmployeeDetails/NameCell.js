import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';

const ProfileImage = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 35px;
    margin-right: 8px;
    flex: 0 1 auto;
`;

const FullName = styled.div`
    flex: 1 0 auto;
`;

export const NameCell = ({ rowData }) => {
    const { pictureMedium, fullName } = rowData;

    return (
        <Flex alignItems="center">
            <ProfileImage src={pictureMedium} />
            <FullName >{fullName}</FullName>
        </Flex>
    );
};
