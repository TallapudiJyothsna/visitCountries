import './index.css'

const VisitedCountry = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl, isVisited} = countryDetails
  console.log(name, isVisited)

  const onRemoveClick = () => {
    removeVisitedCountry(id)
  }
  return (
    <li className="flag-image-name-container">
      <img src={imageUrl} className="flag-image" alt="thumbnail" />
      <div className="country-name-remove-button-container">
        <p className="visited-country-name">{name}</p>
        <button onClick={onRemoveClick} className="remove-button" type="button">
          Remove
        </button>
      </div>
    </li>
  )
}

export default VisitedCountry
