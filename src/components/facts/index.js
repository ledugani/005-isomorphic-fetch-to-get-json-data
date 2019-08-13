import React from 'react';

export default function Facts(props) {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.value}
      />
      <ul>
        {
          props.facts.map(fact =>
            <li>{fact.title}</li>)
        }
      </ul>
    </div>
  )
}