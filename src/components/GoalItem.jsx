import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeGoalRef } from '../firebase';

class GoalItem extends Component {
  completeGoal() {
  const { email } = this.props.user;
  const { title } = this.props.goal;
  }

  render() {
    const { email, title } = this.props.goal;
    return (
      <div style={{ marginRight: '5px' }}>
      <strong>{title}</strong>
      <span style={{ marginRight: '5px' }}>submitted by <em>{email}</em></span>
      <button
      className="btn btn-sm btn-primary"
      onClick={() => this.completeGoal()}
      >
      Completed
      </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
const { user } = state;
return {
  user
}
}

export default connect(mapStateToProps, null)(GoalItem);
