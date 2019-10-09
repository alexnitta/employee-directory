import React from 'react';
import { Flex } from 'rendition';
import styled from 'styled-components/macro';
import { User } from 'grommet-icons';

const ProfileImage = styled.img`
    height: 35px;
    width: 35px;
    border-radius: 35px;
    margin-right: 8px;
    flex: 0 1 auto;
`;

const ProfileIcon = styled.div`
    svg {
        height: 35px;
        width: 35px;
        border-radius: 35px;
    }

    margin-right: 8px;
    flex: 0 1 auto;
`;

const FullName = styled.div`
    flex: 1 0 auto;
`;

export const NameCell = ({ rowData }) => {
    const { pictureMedium, fullName } = rowData;
    const Profile = pictureMedium ? (
        <ProfileImage src={pictureMedium} />
    ) : (
        <ProfileIcon>
            <User />
        </ProfileIcon>
    );

    return (
        <Flex alignItems="center">
            {Profile}
            <FullName>{fullName}</FullName>
        </Flex>
    );
};
