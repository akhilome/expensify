import React from 'react';

const EditExpensePage = (props) => (
  <div>
    <p>This is from my Edit Expense {props.match.params.id} page!</p>
  </div>
);

export default EditExpensePage;
