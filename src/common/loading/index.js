import React from 'react';

require('./scss/loading.scss');

const Loading = () => (
  <div className="loading">
    <div>
      <span className="spinner" />
      <span>loading...</span>
    </div>
  </div>
);

export default Loading;