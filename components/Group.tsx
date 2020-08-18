import {useContext} from 'react';
import styled from '@emotion/styled';
import gematriya from 'gematriya';
import {Comment} from './Comment';
import {VerseNumber} from './VerseNumber';
import {Daf} from './Daf';

export const Group = ({number, comments}) => {
  const verseStart = useContext(Daf.Context);
  return (
    <span>
      <VerseNumber>
        {gematriya(number + verseStart, {punctuate: false})}
      </VerseNumber>
      {comments.map((comment, i) => (
        <Comment key={i}>{comment}</Comment>
      ))}
    </span>
  );
};
