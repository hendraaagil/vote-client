import { Link } from 'react-router-dom';

import candidateImg from '../assets/images/candidate.jpg';

const DetailCandidate = (props) => {
  const candidate = props.location.candidate;

  return (
    <div className="grid grid-cols-3 gap-4 p-10">
      <div className="col-span-1">
        <img className="w-full" src={candidateImg} alt="Candidate" />
        <h2 className="mt-4 text-2xl font-bold">{candidate.ketua}</h2>
        <h2 className="mt-4 mb-10 text-2xl font-bold">{candidate.wakil}</h2>
        <Link
          to="/vote"
          className="py-2 px-6 btn-dark hover:bg-transparent hover:text-gray-900"
        >
          Kembali
        </Link>
      </div>
      <div className="py-2 px-4 col-span-2">
        <h1 className="text-3xl font-bold">Program Utama :</h1>
        <p className="pl-4 text-lg font-semibold">{candidate.program}</p>
        <h1 className="mt-4 text-2xl font-bold">Visi :</h1>
        <ul>
          {candidate.visi.map((v, i) => (
            <li className="pl-4 text-lg font-semibold" key={i}>
              {i + 1}. {v}
            </li>
          ))}
        </ul>
        <h1 className="mt-4 text-2xl font-bold">Misi :</h1>
        <ul>
          {candidate.misi.map((m, i) => (
            <li className="pl-4 text-lg font-semibold" key={i}>
              {i + 1}. {m}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailCandidate;
