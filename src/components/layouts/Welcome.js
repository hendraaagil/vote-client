import vote from '../../assets/images/vote.svg';

const Welcome = () => {
  return (
    <div className="flex flex-wrap justify-center flex-col items-center p-4 md:px-1 w-full sm:w-1/2">
      <div>
        <h1 className="mb-4 sm:mb-12 font-bold text-lg sm:text-4xl lg:text-3xl md:text-2xl text-blueGray-800 text-center">
          Selamat Datang di E-Voting
        </h1>
      </div>
      <img src={vote} alt="Vote Illustration" className="p-6 lg:w-3/4" />
    </div>
  );
};

export default Welcome;
