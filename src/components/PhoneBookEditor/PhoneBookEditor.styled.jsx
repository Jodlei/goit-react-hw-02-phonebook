import styled from 'styled-components';
import { Field, Form } from 'formik';

export const PhoneBookForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  width: 300px;
`;

export const SubmitButton = styled.button`
  width: 150px;
`;
