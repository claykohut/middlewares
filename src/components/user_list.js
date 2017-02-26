import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class UserList extends Component {

  componentDidMount(){
      this.props.fetchUsers();
  }

  renderUser(user, index){
      return(
        <div className="card card-block" key={index}>
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">Cheese Factory</p>
          <a className="btn btn-primary">Email</a>
        </div>
      )
  }

  render() {
    return (
      <div className="user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(UserList)
