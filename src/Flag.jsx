import { Link } from "react-router-dom";

const Flag = ({ currentCountry }) => {
  return (
    <Link to={`/details/${currentCountry.name.common}`}>
      <div className="img-container">
        <h2>{currentCountry.name.common}</h2>
        <img src={currentCountry.flags.png} alt={currentCountry.name} />
      </div>
    </Link>
  );
};

export default Flag;
