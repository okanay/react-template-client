import { Providers } from '~/providers/providers.tsx';
import { Helmet } from 'react-helmet';

export default function Layout() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className={'h-screen bg-zinc-100'}>
        <div className={'mx-auto max-w-7xl'}>
          <Providers />
        </div>
      </div>
    </>
  );
}
