// src/components/CountryCard.js
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CountryCard = ({ country }) => {
  return (
    <motion.div 
      className="country-card card h-100 shadow-sm border-0 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="flag-container" style={{ height: '160px', overflow: 'hidden' }}>
        <img 
          src={country.flags.png} 
          alt={`Flag of ${country.name.common}`} 
          className="card-img-top h-100 object-fit-cover"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title fs-5 fw-bold mb-3">{country.name.common}</h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <span className="fw-semibold">Population:</span> {country.population.toLocaleString()}
          </li>
          <li className="mb-1">
            <span className="fw-semibold">Region:</span> {country.region}
          </li>
          <li>
            <span className="fw-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}
          </li>
        </ul>
      </div>
      <Link 
        to={`/country/${country.cca3}`} 
        className="stretched-link"
        aria-label={`View details of ${country.name.common}`}
      ></Link>
    </motion.div>
  );
};

export default CountryCard;