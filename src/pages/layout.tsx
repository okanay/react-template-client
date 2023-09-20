import { Providers } from '~/providers/providers.tsx';

export default function Layout() {
  return (
    <>
      <div className={'h-screen bg-zinc-100'}>
        <div className={'mx-auto max-w-7xl'}>
          <Providers />
        </div>
      </div>
    </>
  );
}
