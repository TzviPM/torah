import Head from 'next/head';
import styled from '@emotion/styled';
import gematriya from 'gematriya';
import {useChumash, useTargum, useRashi} from '../hooks';
import {Daf, Chumash, Verse, Rashi, Group} from '../components';

export default function Home() {
  const book = 'Genesis';
  const chapter = '1';
  const verses = '1-3';

  const torah = useChumash(book, chapter, verses);
  const targum = useTargum(book, chapter, verses);
  const rashi = useRashi(book, chapter, verses);

  let content;

  if (torah.error || targum.error || rashi.error) {
    content = 'A loading error occurred';
  } else if (torah.loading || targum.loading || rashi.loading) {
    content = 'loading...';
  } else {
    const {data} = torah;
    content = (
      <Daf title={data.ref.replace(/׳/g, '')} verseStart={data.verseStart}>
        <Chumash
          targum={targum.data.map((verse, i) => (
            <Verse number={i} key={`targum-${i}`}>
              {verse
                .split(/<b>([^<]+)<\/b>/)
                .map((run, i) => (i % 2 === 0 ? run : <b>{run}</b>))}
            </Verse>
          ))}
        >
          {data.text.map((verse, i) => (
            <Verse number={i} key={`torah-${i}`}>
              {verse}
            </Verse>
          ))}
        </Chumash>
        <Rashi>
          {rashi.data
            .filter((verse) => verse.length > 0)
            .map((verse, i) => (
              <Group key={i} number={i} comments={verse} />
            ))}
        </Rashi>
      </Daf>
    );
  }

  return (
    <>
      <Head>
        <title>Torah Demo - tzvi.pm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {content}
    </>
  );
}
