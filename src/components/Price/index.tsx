import React from 'react';
import {
    PriceList,
    Card,
    Heading,
    Count,
    Description,
} from './styled';

interface Price {

}

const Price: React.FC<Price> = () => {
    return (
        <PriceList>
            <Card>
                <Heading>Express front-end</Heading>
                <Count>15
                        <Count value>$ / hour</Count>
                    </Count>
                <Description>
                    We create the simplest HTML pages, with a minimum number of components, without JavaScript.
                </Description>
            </Card>
            <Card>
                <Heading>Middle Front-end</Heading>
                <Count>20
                        <Count value>$ / hour</Count>
                    </Count>
                <Description>
                    We create complex HTML pages, make a library of components, animations, and interactive.
                    We are writing JavaScript.
                </Description>
            </Card>
            <Card>
                <Heading>Full Front-end</Heading>
                <Count>25
                    <Count value>$ / hour</Count>
                </Count>
                <Description>
                    We write complex JavaScript, spectacular animation,
                    think over the architecture and select the necessary tools.
                    We use libraries - React, Vue.
                </Description>
            </Card>
        </PriceList>
    )
};

export default Price;
