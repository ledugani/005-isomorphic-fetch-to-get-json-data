import React from 'react';

export default function Facts(props) {
  return (
    <div>
      <input
        type="text"
        onChange={props.handleChange}
        value={props.value}
      />
      <button
        onClick={props.handleClick}
      >
        Submit New Fact
      </button>
      <ul>
        {
          props.facts.map(fact =>
            <li>{fact.title}</li>)
        }
      </ul>
    </div>
  )
}