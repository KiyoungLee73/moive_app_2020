import React from 'react';
import PropTypes from 'prop-types';

function Portal(props) {
  return <h1>I like <a href={props.url}>{props.name}</a>, rating : {props.rating}/5</h1>;
}

const portalILike = [
  {
    id : 1,
    name : "naver",
    url : "http://www.naver.com",
    rating : 5.0
  },
  {
    id : 2,
    name : "google",
    url : "http://www.google.com",
    rating : 4.0
  },
  {
    id : 3,
    name : "apple",
    url : "http://www.apple.com",
    rating : 4.7
  }
];

Portal.propTypes = {
  name : PropTypes.string.isRequired,
  url : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {portalILike.map(portal => (
        <Portal key={portal.id} name={portal.name} url={portal.url} rating={portal.rating} />
      ))}
    </div>
  );
}

export default App;
