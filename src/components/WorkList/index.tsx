import React from 'react';
import Filter from '../Filter';
import Work from '../Work';
import {
    Container,
    AboutWork
} from './styled';

const info = [
    {
        src: 'img/work0.jpg',
        srcMob: 'img/mob/work0.jpg',
        heading: 'Personal account',
        title: 'Multi-page, multi-component site on Vue.js',
        link: 'https://academy.pure-code.ru/dashboard',
        type: 'vue',
    },
    {
        src: 'img/work1.jpg',
        srcMob: 'img/mob/work1.jpg',
        heading: 'Web application',
        title: 'Showing charts in pure JavaScript',
        link: 'https://projects.pure-code.ru/chart-app/',
        type: 'js',
    },
    {
        src: 'img/work2.jpg',
        srcMob: 'img/mob/work2.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://projects.pure-code.ru/inventally/',
        type: 'html',
    },
    {
        src: 'img/work3.jpg',
        srcMob: 'img/mob/work3.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://projects.pure-code.ru/delivery/',
        type: 'html',
    },
    {
        src: 'img/work4.jpg',
        srcMob: 'img/mob/work4.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://projects.pure-code.ru/invoice-app/',
        type: 'html',
    },
    {
        src: 'img/work5.jpg',
        srcMob: 'img/mob/work5.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://starkbank.pure-code.ru',
        type: 'html',
    },
    {
        src: 'img/work6.jpg',
        srcMob: 'img/mob/work6.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://projects.pure-code.ru/chat/',
        type: 'html',
    },
    {
        src: 'img/work7.jpg',
        srcMob: 'img/mob/work7.jpg',
        heading: 'Card heading',
        title: 'Description text',
        link: 'https://resh.edu.ru/subject/lesson/3515/main/146238/',
        type: 'js',
    },
];

interface WorkList {
    landing?: boolean;
}

const WorkList: React.FC<WorkList> = props => {
    return (
        <div className='pageWorks'>
          <div className="pageWorks__wrap">
            <Filter />
            <div className="pageWorks__wrap pageWorks__wrap--hire">
              <button className="pageButton pageButton--hire" >hire us</button>
              <button className="pageButton pageButton--social">...</button>
            </div>
          </div>
          <Container>
            {
              info.map( item =>
                (
                  <AboutWork key={item.src}>
                      <Work
                        src={require( './' + item.src)}
                        srcMob={require( './' + item.src)}
                        link={item.link}
                      />
                      Описание проекта теги и т.п.
                      Вместо превью сайта только логотип
                  </AboutWork>
                )
              )
            }
          </Container>

        </div>
    )
};

export default WorkList;
