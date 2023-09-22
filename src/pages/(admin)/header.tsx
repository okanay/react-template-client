import { NavigationsLinks } from '~/components/navigations-links.tsx';

export const AdminHeader = () => {
  return (
    <header>
      <nav className={''}>
        <p className={'text-2xl'}>Admin Layout</p>
        <ul className={'flex items-center justify-start gap-2 py-2 text-lg font-bold text-zinc-800'}>
          <NavigationsLinks />
        </ul>
      </nav>
    </header>
  );
};
