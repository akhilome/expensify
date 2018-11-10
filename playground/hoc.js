import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminMessage = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>The lie you want to tell</p> }
      <WrappedComponent { ...props }/>
    </div>
  );
};

const AdminInfo = withAdminMessage(Info);

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You must be authenticated to view this</p> }
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={ true } info='Nope!'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={ false } info='Nope!'/>, document.getElementById('app'));