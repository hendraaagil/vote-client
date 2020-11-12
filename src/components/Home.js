import Card from './layouts/Card';

const Home = ({ candidates }) => {
  return (
    <div className="p-8 text-gray-900">
      <h1 className="mb-6 font-bold text-4xl text-center">
        Tentukan Pilihanmu!
      </h1>
      <Card candidates={candidates} />
    </div>
  );
};

export default Home;
