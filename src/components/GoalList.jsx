import React, { Component } from 'react';
import { goalRef } from '../firebase';

export default class GoalList extends Component {
componentDidMount() {
  goalRef.on('value', snap => {
    snap.forEach(goal => {
      let goalObject = goal.val();
      console.log('goalObject', goalObject);
    })
  })
}

  render() {
    return (
      <div>GoalList</div>
    )
  }
}

// export default GoalList;
