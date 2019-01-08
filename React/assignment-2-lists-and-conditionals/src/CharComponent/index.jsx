import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '16px',
  margin: '16px',
  border: '1px solid #333',
  background: 'none',
  cursor: 'pointer'
}

export const Char = props => {
  return (<button style={styles} type="button" title="Remove character" onClick={props.onClick}>{props.character}</button>)
}
