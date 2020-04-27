import React from 'react';
import
{
  LogoEl,
  Img,
} from './styled';
import pic from './logo.svg';

interface Logo {

}

const Logo: React.FC<Logo> = () => {
  return (
      <LogoEl to='/'>
        <Img width='130' src={pic} alt=""/>
      </LogoEl>
  );
};

export default Logo;