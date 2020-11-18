import vote from '../../assets/images/vote.svg';

const Welcome = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 w-1/2">
      <div>
        <h1 className="mb-12 font-bold text-4xl text-center">
          Selamat Datang di E-Voting
        </h1>
      </div>
      <img
        src={vote}
        alt="Vote Illustration"
        className="p-5 w-3/4 xl:max-w-3xl"
      />
    </div>
  );
};

export default Welcome;
