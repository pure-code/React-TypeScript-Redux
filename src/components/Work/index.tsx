import React from 'react';
import {
    Container,
    Link,
    Picture,
    Img,
} from './styled';

interface Work {
    src: string;
    srcMob: string;
    link: string;
    isLanding?: boolean;
}

const Work: React.FC<Work> = props => {

    const { src, srcMob, link, isLanding } = props;

    return (
        <Container isLanding={isLanding}>
            <Link href={link} target="_blank" rel="noopener noreferrer">
                <Picture>
                    <source media="(max-width: 767px)" srcSet={srcMob} />
                    <Img src={src} alt='portfolio item' />
                </Picture>
            </Link>

        </Container>
    )
};

export default Work;
