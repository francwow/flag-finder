import { Link } from "react-router-dom";

const Flag = ({ currentCountry }) => {
  return (
    <Link to={`/details/${currentCountry.name}`}>
      <div className="img-container">
        <h2>{currentCountry.name}</h2>
        <img src={currentCountry.flags.png} alt={currentCountry.name} />
      </div>
    </Link>
  );
};

export default Flag;
