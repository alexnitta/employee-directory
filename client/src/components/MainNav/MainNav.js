import React from 'react';
import { Navbar } from 'rendition';
import styled from 'styled-components/macro';

import { messages } from '../../locale/en_us';

const Logo = styled.img`
    height: 30px;
    width: 30px;
`;

export const MainNav = () => (
    <Navbar>
        <Logo src="icons/profile_icon.png" />
    </Navbar>
);
