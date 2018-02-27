var React = require('react');

// This is a simple display component. If we have a "property" object, we'll display a little bit of information from it.
var DumbDisplay = props => {
  if (!props.property) {
    return null;
  }

  return (
    <div>
      <p>Bathrooms: {props.property.bath_estimate}</p>
      <p>Bedrooms: {props.property.bed_estimate}</p>
    </div>
  )
}

module.exports = DumbDisplay;
