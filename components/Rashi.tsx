import styled from '@emotion/styled';
import {VerseNumber} from './VerseNumber';
import {Comment} from './Comment';

export const Rashi = styled.div`
  font-family: 'BenOr Rashi';
  font-size: 14pt;
  line-height: 18pt;
  border-top: solid 1px black;
  margin-top: 20px;
  padding-top: 10px;
  column-count: 2;
  column-fill: balance;
  -webkit-column-break-inside: avoid;
  position: relative;
  display: inline-block;
  vertical-align: top;

  &::before {
    content: 'רש"י';
    background: white;
    position: relative;
    top: -23pt;
    left: -280px;
    padding-left: 5px;
    padding-right: 5px;
  }

  ${VerseNumber} {
    font-family: 'Cardo';
    font-size: 10pt;
    font-weight: bold;

    &::before {
      content: '[פסוק ';
    }

    &::after {
      content: '] ';
    }
  }

  ${Comment.Heading} {
    font-family: 'Cardo';
    font-weight: bold;
    font-size: 14pt;
    line-height: 21pt;
  }

  & cite {
    font-size: 10pt;
  }

  & cite::before {
    content: '(';
  }

  & cite::after {
    content: ')';
  }
`;
