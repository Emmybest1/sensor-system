import React from 'react';
import styled from 'styled-components';

const LabelNode = styled.label``;

const InputNode = styled.input`
  border: none;
  border-radius: 12px;
  padding: 10px;
  outline: none;
  width: 100%;
`;

const TextareaNode = styled.textarea``;

type InputPropTypes = {
  id: string;
  type: 'textarea' | string;
  label?: string;
  [key: string]: any;
};

export const Input: React.FC<InputPropTypes> = ({ id, type, label, ...restProps }) => (
  <>
    {label && <LabelNode htmlFor={id}>{label}</LabelNode>}

    {type === 'textarea' ? <TextareaNode id={id} cols={10} rows={5} {...restProps} /> : <InputNode id={id} type={type} {...restProps} />}
  </>
);
