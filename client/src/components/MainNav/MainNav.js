import React from 'react';
import { Navbar } from 'rendition';
import styled from 'styled-components/macro';

import { messages } from '../../locale/en_us';

const Logo = styled.img`
    height: 40px;
    width: 40px;
`;

export const MainNav = () => (
    <Navbar>
        <Logo src="favicon.png" className="main-nav-img" />
    </Navbar>
);
