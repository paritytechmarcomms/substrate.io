import React, { useState } from 'react';

import useHeadingsData from '../../hooks/use-headings-data';
import useIntersectionObserver from '../../hooks/use-intersection-observer';

const ArticleNav = () => {
  const [activeId, setActiveId] = useState();
  const headings = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden xl:block fixed top-36 right-0 max-w-xs max-h-full overflow-auto"
    >
      <Headings headings={headings} activeId={activeId} />
    </nav>
  );
};

const Headings = ({ headings, activeId }) => {
  return (
    <ul className="list-none">
      <li className="mb-3 font-bold">CONTENT</li>
      {headings.map(({ title, id }) => (
        <li key={id}>
          <a href={`#${id}`} className={`${id === activeId && 'font-bold'} hover:font-bold`}>
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleNav;