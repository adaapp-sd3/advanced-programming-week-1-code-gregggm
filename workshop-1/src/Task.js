import React from 'react';

const Task = ({
  title,
  description,
  accepted,
  toggle,
  onDragStart,
  onDrop
}) => (
  <div
    key={title}
    draggable
    onDragEnter={e => e.preventDefault()}
    onDragOver={e => e.preventDefault()}
    onDragStart={onDragStart}
    onDrop={onDrop}
		style={{cursor: 'grab'}}
    className="uk-container uk-card uk-card-default uk-card-body uk-margin-top uk-width-large uk-padding-small"
  >
    <h2 className="uk-margin-remove">{title}</h2>
    <hr className="uk-margin-small" />
    <p className="uk-margin-remove">{description}</p>
    <label style={{cursor: 'pointer'}}>
      <span>Accepted: </span>
      <input type="checkbox" checked={accepted} onChange={toggle} style={{cursor: 'pointer'}}/>
    </label>
  </div>
);

export default Task;
