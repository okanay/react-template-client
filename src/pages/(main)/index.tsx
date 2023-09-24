import axios from 'axios';

export const MainPage = () => {
  const url = 'https://www.zara.com/uk/en/extra-heavy-weight-t-shirt-p04231550.html?v1=305013820&v2=2297854';

  const handleOnZaraFetch = async () => {
    const response = await axios.get(url);
    console.log(response);
  };
  return (
    <main className="text-2xl">
      <p>Main Page</p>

      <button onClick={handleOnZaraFetch}>fetch</button>
    </main>
  );
};
