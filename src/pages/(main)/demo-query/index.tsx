import { useQuery } from '@tanstack/react-query';

type TFetchTodoProps = {
  queryKey: { key: string; type: string; id: number }[];
};

const key = 'todo';
const type = 'type';
const id = 1;

export const QueryPage = () => {
  const fetchTodoList = ({ queryKey }: TFetchTodoProps) => {
    const { 0: params } = queryKey;

    const somethingGoesWrong = false;
    if (somethingGoesWrong) {
      throw new Error('Oh no!');
    }

    return [
      {
        id: params.id,
        title: 'hey',
      },
    ];
  };

  const { data, status } = useQuery({
    queryKey: [{ key, type, id }],
    queryFn: fetchTodoList,
  });

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  if (status === 'error') {
    return <span>Error</span>;
  }

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
