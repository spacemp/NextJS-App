import { Fragment } from "react";
import Link from 'next/link';

function NewsPage() {
  return (
    <Fragment>
      <p>The news page</p>
      <ul>
        <li>
          <Link href="/news/next-is-a-best">Next is a great framework</Link>
        </li>
        <li>React is a great</li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
