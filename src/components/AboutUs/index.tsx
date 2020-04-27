import React  from 'react';
import lexa from './img/lexa.jpg';
import kris from './img/kris.jpg';
import {
    About,
    Description,
    Team,
    Item,
    Face,
    Pic,
    Name,
    Position,
} from "./styled";

const AboutUs: React.FC = () => {
    return (
        <About>
            <Team>
                <Item>
                    <Face>
                        <Pic src={lexa} alt="Alexey" title="" />
                    </Face>
                    <Name>Aleksey A.</Name>
                    <Position>Frontend developer</Position>
                </Item>
                <Item>
                    <Face>
                        <Pic src={kris} alt="Kristina" title="" />
                    </Face>
                    <Name>Kristina A.</Name>
                    <Position>Frontend developer
                    </Position>
                </Item>
            </Team>
            <Description>
                The main and permanent team consists of two developers.
                <br/><br/>
                We take projects only of our competence without the need for delegation to third-party developers. But we are not afraid of complex and interesting projects. Responsible approach to work, attentive attitude to the quality of the code, the project’s structure and the maximum usability for the user - these all  make our sites fast and efficient.
            </Description>
        </About>
    )
};

export default AboutUs;
