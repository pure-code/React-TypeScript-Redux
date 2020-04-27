import React from 'react';
import {
    Container,
    Heading,
    List,
} from './styled';
import Feedback from '../Feedback';
import reviewsList from "./reviewsList";

interface Reviews {

}

const Reviews: React.FC<Reviews> = () => {
    return (
        <Container>
            <Heading>Trust us</Heading>
            <List>
                {reviewsList.map(item => <Feedback {...item} key={item.heading} />)}
            </List>
        </Container>
    )
};

export default Reviews;
