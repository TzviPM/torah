import styled from '@emotion/styled';
import {VerseNumber} from './VerseNumber';

const ChumashContainer = styled.div`
  font-size: 24pt;
  line-height: 32pt;
  vertical-align: text-top;
`;

const Targum = styled.div`
  width: 200px;
  padding-top: 5pt;
  padding-left: 20px;
  font-size: 14pt;
  line-height: 21pt;
  float: right;

  ${VerseNumber} {
    font-size: 8pt;
  }
`;

export const Chumash = ({children, targum}) => (
  <ChumashContainer>
    {targum && <Targum>{targum}</Targum>}
    {children}
  </ChumashContainer>
);
