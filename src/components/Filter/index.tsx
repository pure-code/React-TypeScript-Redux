import React from 'react';
import {
    FilterList,
    Item,
    Button,
} from './styled';

const filters = ['All works', 'React.js', 'JavaScript', 'MobX', 'Redux', 'Vue.js', 'HTML',];

interface Filter {

}

const Filter: React.FC<Filter> = props => {
    return (
        <FilterList>
            {filters.map((item, i) => <Item key={item}>
                <Button active={!i}>{item}</Button>
            </Item>)}
        </FilterList>
    )
};

export default Filter;
