import React, {Fragment} from "react";

const placeholderText= 'Please enter a name.';
const UserInput = (props) => {
  return <Fragment>
    <input
      type="text"
      // Skipping, since placeholder text is more meaningful
      // value={props.username}
      placeholder={placeholderText}
      onChange={props.onChange}
    />
  </Fragment>
}

export default UserInput
