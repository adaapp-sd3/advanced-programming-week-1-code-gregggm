import React from 'react';

const Task = ({ title, description, accepted, toggle }) => (
  <div
    key={title}
    className="uk-container uk-card uk-card-default uk-card-body uk-margin-top uk-width-large uk-padding-small"
  >
    <h2 className="uk-margin-remove">{title}</h2>
    <hr className="uk-margin-small" />
    <p className="uk-margin-remove">{description}</p>
    <label>
      <span>Accepted: </span>
      <input type="checkbox" checked={accepted} onChange={toggle}/>
    </label>
  </div>
);

export default Task;
