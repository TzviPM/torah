import styled from '@emotion/styled';

const Heading = styled.span``;

export const Comment = ({children: c}) => {
  const headingSep = c.indexOf('</b>');
  const heading = c.slice('<b>'.length, headingSep);
  const comment = c.slice(headingSep + '</b>'.length);

  return (
    <span>
      <Heading>{heading}</Heading>
      {comment
        .split(/\((.*?)\)/g)
        .map((run, i) => (i % 2 === 0 ? run : <cite>{run}</cite>))}
    </span>
  );
};

Comment.Heading = Heading;
