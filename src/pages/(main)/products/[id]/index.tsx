type TProps = {
  id: string;
  searchParams?: URLSearchParams;
};

export const Product = ({ id, searchParams }: TProps) => {
  const color = searchParams?.get('c');

  return (
    <>
      <p>
        Product ID : {id}, Color : {color}
      </p>
    </>
  );
};
