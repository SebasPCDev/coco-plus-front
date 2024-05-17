import MyCoworkingDetailEdit from '@/app/components/myCoworkigs/editCoworking';

const myCoworkingsDetailpageEdit = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return <MyCoworkingDetailEdit id={id} />;
};

export default myCoworkingsDetailpageEdit;
