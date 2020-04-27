import React from 'react';
import {
	Nav,
	List,
	Item,
	StyledLink
} from './styled';
import Social from "../../components/Social";
import {pageNav} from '../../translate';

interface PageNav {

}

const PageNav: React.FC<PageNav> = () =>{

	return (
		<Nav>
			{
				!1 ?
					(
						<List>
							<Item>
								<StyledLink to="/works">{pageNav['EN'].works}</StyledLink>
							</Item>
							<Item >
								<StyledLink to="/about">
									{pageNav['EN'].about}
								</StyledLink>
							</Item>
						</List>
					)
					: null
			}
			<Social />
		</Nav>
	)
};

export default PageNav;
