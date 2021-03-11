import React, { useState } from 'react';

const User = (props) => {
    const [hidden, setHide] = useState(false)
    const { key, photo, name, email, cell, address, dob, username, timezone } = props

    return (
        <li key={key}>
          <div>
            <h2>{name}</h2>
            <img src={photo} alt={name}></img>
          </div>
    
          <div>
            {hidden && (
              <div>
                <p><b>Address</b><br></br> {address}</p>
                <p><b>Age</b><br></br> {dob}</p>
                <p><b>Username</b><br></br> {username}</p>
                <a href={`mailto:${email}`}><b>Email</b></a>
                <p><b>Cell</b><br></br>{cell}</p>
                <p><b>Timezone</b><br></br>{timezone}</p>
              </div>
            )}
          </div>
    
          <button
            onClick={() => {
              hidden ? setHide(false) : setHide(true);
            }}
            >
            {hidden ? <p>Hide Details</p> : <p>Show Details</p>}
          </button>
        </li>
      );
}

export default User