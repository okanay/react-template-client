import { dummyToggleIsActive, getDummyIsActive } from '~/redux/slices/dummyslice.ts';
import { useDispatch, useSelector } from 'react-redux';

export const ReduxPage = () => {
  const handleAdminPageToggle = () => {
    dispatch(dummyToggleIsActive());
  };

  const dispatch = useDispatch();
  const isActive = useSelector(getDummyIsActive);

  return (
    <main className="text-2xl">
      <p className={'text-2xl'}>Admin Page Is Available : {isActive ? 'false' : 'true'}</p>
      <button
        className={'my-2 rounded border-zinc-100 bg-amber-400 px-2 py-1 text-zinc-800'}
        onClick={handleAdminPageToggle}
      >
        ToggleAdmin
      </button>
    </main>
  );
};
