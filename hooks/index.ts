import useSWR from 'swr';

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

function buildRef(book, chapter, verses) {
  let ref = book;
  if (chapter) {
    ref = `${ref} ${chapter}`;
    if (verses) {
      ref = `${ref}:${verses}`;
    }
  }
  return ref;
}

export function useChumash(book, chapter, verses) {
  const ref = buildRef(book, chapter, verses);

  const {data, error} = useSWR(
    `https://www.sefaria.org/api/texts/${ref}?context=0`,
    fetcher
  );

  return {
    error,
    loading: !data && !error,
    data: data && {
      ref: data.heRef,
      text: data.he,
      verseStart: data.sections[1],
    },
  };
}

export function useTargum(book, chapter, verses) {
  const ref = buildRef(book, chapter, verses);

  const {data, error} = useSWR(
    `https://www.sefaria.org/api/texts/Onkelos ${ref}?context=0`,
    fetcher
  );

  return {
    error,
    loading: !data && !error,
    data: data && data.he,
  };
}

export function useRashi(book, chapter, verses) {
  const ref = buildRef(book, chapter, verses);

  const {data, error} = useSWR(
    `https://www.sefaria.org/api/texts/Rashi on ${ref}?context=0`,
    fetcher
  );

  return {
    error,
    loading: !data && !error,
    data: data && data.he,
  };
}
