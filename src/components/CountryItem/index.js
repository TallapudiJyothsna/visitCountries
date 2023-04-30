import './index.css'

const CountryItem = props => {
  const {countryDetails, markCountryAsVisited} = props
  const {id, name, isVisited} = countryDetails

  const onVisitClick = () => {
    markCountryAsVisited(id)
  }

  return (
    <li className="country-visit-button-item-container">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="visited-text">Visited</p>
      ) : (
        <button onClick={onVisitClick} className="visit-button" type="button">
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem
