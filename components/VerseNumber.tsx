import styled from '@emotion/styled';

export const VerseNumber = styled.span`
  font-size: 12pt;

  &::after {
    content: '\\202F';
  }
`;
