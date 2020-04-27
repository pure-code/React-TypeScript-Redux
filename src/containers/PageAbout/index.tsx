import React  from 'react';
import AboutUs from '../../components/AboutUs';
import WhatDo from '../../components/WhatDo';
import Price from '../../components/Price';
import Reviews from '../../components/Reviews';
// import Form from '../../components/Form';

import {
    Container,
    Heading
} from './styled';

interface PageAbout {

}

const PageAbout: React.FC<PageAbout> = () => {
    return (
        <Container>
            <WhatDo />
            <Price />
            <Heading>Developers</Heading>
            <AboutUs />
            <Reviews />
            {/*<Form />*/}
        </Container>
    )
};

export default PageAbout;
