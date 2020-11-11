import Card from './layouts/Card';

const Home = (props) => {
  return (
    <div className="p-8 text-gray-900">
      <h1 className="mb-6 font-bold text-4xl text-center">
        Tentukan Pilihanmu!
      </h1>
      <Card candidates={props.candidates} />
    </div>
  );
};

export default Home;
