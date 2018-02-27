var React = require('react');


var DumbForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <label>
        <input type="text" value={props.property_id} onChange={props.onChange} placeholder="property id"/>
      </label>
      <button>Get Property</button>
    </form>
  )
}

module.exports = DumbForm;
