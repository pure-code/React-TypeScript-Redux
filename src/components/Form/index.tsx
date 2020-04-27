import React, {FormEvent, useState} from 'react';
import {
  Heading,
  Subheading,
  Container,
  Title,
  Wrap,
  Field,
  Message,
  Submit,
  Error,
} from './styled';

const fields = [
  {
    name: 'name',
    text: 'What is your name?'
  },
  {
    name: 'contacts',
    text: 'How to contact with you?'
  },
  {
    name: 'message',
    text: 'Message'
  },
];

const Form: React.FC = () => {

  const [submitStatus, setSubmitStatus] = useState('send');
  const [isValidForm, setIsValidForm] = useState(true);
  const [formValue, setFormValue] = useState({
    name: '',
    contacts: '',
    message: ''
  });

  const onChangeHandler = (ev: FormEvent) => {
    const t = ev.target as HTMLInputElement;

    setFormValue({
      ...formValue,
      [t.name]: t.value,
    });
  };

  async function onSubmitHandler (ev: React.FormEvent) {

    ev.preventDefault();

    if(!validateForm()) return;

    setSubmitStatus('sending');
    const form = document.getElementById('messageForm') as HTMLFormElement;
    const response = await fetch('https://projects.pure-code.ru/request.php', {
      method: 'POST',
      body: new FormData(form)
    })
      .then( result => result)
      .catch(error => error)
    ;

    const result = await response;

    if(result.status === 200){
      setTimeout(()=>{
        setSubmitStatus('submitted');
        form.reset();
      }, 1000);
    } else {
      setTimeout(()=>{
        setSubmitStatus('error');
      }, 1000);
    }

  };

  const validateForm = ()=> {
    const isValid = Object.values(formValue).every(item => item.length > 3);
      setIsValidForm(isValid);
      return isValid;
    }
  ;

  const status = {
    send: 'Submit',
    sending: 'Sending',
    submitted: 'Success',
    error: 'Error',
  };

  return (
      <Container id='messageForm' onSubmit={onSubmitHandler}>
        <Heading>Thank you for your interest to us!</Heading>
        <Subheading>Please describe your offer or ask us a question.</Subheading>
        {
          isValidForm ? null : <Error>Please check all required fields!</Error>
        }

        {
          fields.map( ({name, text}) => (
            <Wrap key={name}>
              <Title required>{text}</Title>
              {
                name === 'message' ? <Message onChange={onChangeHandler} name={name} />
                : <Field autoComplete='off' onChange={onChangeHandler} name={name} />
              }
            </Wrap>
          ))
        }

        <Submit isSending={submitStatus === 'sending'}>{status[submitStatus]}</Submit>
      </Container>
  )
};

export default Form;