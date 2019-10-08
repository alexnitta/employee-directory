import React from 'react';
import { Navbar } from 'rendition';
import styled from 'styled-components/macro';

const ProfileIcon = styled.img`
    height: 30px;
    width: 30px;
`;

export const MainNav = () => (
    <Navbar>
        <ProfileIcon src="icons/profile_icon.png" />
    </Navbar>
);
