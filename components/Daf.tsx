import {createContext} from 'react';
import styled from '@emotion/styled';

const DafContainer = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  text-align-last: right;
  text-justify: inter-word;
  direction: rtl;
  font-family: 'Cardo';
`;

const Title = styled.div`
  font-size: 14pt;
  line-height: 21pt;
  border-bottom: solid 1px black;
  padding-bottom: 5px;
`;

const Context = createContext(0);

export const Daf = ({title, verseStart, children}) => (
  <Context.Provider value={verseStart}>
    <DafContainer>
      <Title>{title}</Title>
      {children}
    </DafContainer>
  </Context.Provider>
);

Daf.Context = Context;
