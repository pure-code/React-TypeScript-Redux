import React from 'react';
import {
    Container
} from './styled';

interface Error404 {

}

const Error404: React.FC<Error404> = () => {
    return (
        <Container>
            page not found
        </Container>
    )
};

export default Error404;
