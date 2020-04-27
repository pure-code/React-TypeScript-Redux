import styled, {keyframes} from 'styled-components';

interface StyledProps {
  notify?: boolean;
  isSending?: boolean;
  replyHidden?: boolean;
  required?: boolean;
}

const sending = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.form`
    position: relative;
    max-width: 1024px;
    margin: 0 auto 80px;
`;

export const Heading = styled.span<StyledProps>`

    display: block;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 400;
    margin-right: 40px;
    color: ${({notify}) => notify ? 'color: #ff5d5d' : '#333'};

    @media (max-width: 1000px){
      font-size: 20px;
    }

    @media (max-width: 600px){
      font-size: 14px;
    }
`;

export const Subheading =styled(Heading)`
    font-size: 20px;

    @media (max-width: 1000px){
      font-size: 16px;
    }

    @media (max-width: 600px){
      font-size: 14px;
    }
`;

export const Title = styled.label<StyledProps>`
    margin: 30px 0 10px 0;
    cursor: pointer;
    font-size: 18px;
    color: #333;
    ${({required}) => required ?
    `
      position: relative;

      &::after{
        content: '*';
        font-size: 16px;
        color: #0076ff;
        margin-left: 6px;
      }
    ` : null};

    @media (max-width: 1000px){
      font-size: 16px;
      margin-top: 15px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Field = styled.input`
    border: none;
    border-radius: 2px;
    height: 50px;
    padding-left: 20px;
    outline: none;
    transition: box-shadow .3s;
    font-size: 18px;
    background: rgba(42, 40, 61, 0.05);

    &:focus{
      box-shadow: inset 0 -4px 0 0 #0076ff;
    }

    @media (max-width: 1000px){
      height: 35px;
    }
`;

export const Message = styled.textarea`
    border: none;
    border-radius: 2px;
    min-height: 80px;
    padding: 20px;
    outline: none;
    transition: box-shadow .3s;
    font-size: 18px;
    background: rgba(42, 40, 61, 0.05);
    resize: none;

    &:focus{
      box-shadow: inset 0 -4px 0 0 #0076ff;
    }
`;

export const Submit = styled.button<StyledProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 55px;
    border: none;
    background: #0076ff;
    color: #fff;
    font-family: 'Source Code Pro', monospace;
    font-size: 24px;
    text-align:center;
    border-radius: 2px;
    margin: 30px 0 0 auto;
    cursor: pointer;
    outline: none;
    
    &::before{
      content: ${({isSending}) => isSending ? `''` : null};
      position: absolute;
      right: 20px;
      top: 50%;
      margin-top: -9px;
      width: 18px;
      height: 18px;
      border: 3px solid #fff;
      animation: ${sending} 1.5s linear infinite;
    }

    @media (max-width: 1000px){
      width: 200px;
      height: 40px;
    }
`;

export const Error = styled.span`
  color: red;
`;
