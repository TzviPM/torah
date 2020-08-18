import {useContext} from 'react';
import {VerseNumber} from './VerseNumber';
import gematriya from 'gematriya';
import {Daf} from './Daf';

export const Verse = ({number, children}) => {
  const verseStart = useContext(Daf.Context);
  return (
    <span>
      <VerseNumber>
        {gematriya(number + verseStart, {punctuate: false})}
      </VerseNumber>
      {children}
    </span>
  );
};
