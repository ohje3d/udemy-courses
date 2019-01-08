import React from "react";

const styles = {
  outline: '1px solid blue'
}

export const UserOutput = props => {
  const {username} = props;

  return (<div style={styles}>
    <p>User: {username}</p>
    <p>Lorem Ipsum paragraph</p>
  </div>)
}
