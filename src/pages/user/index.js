import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

class Users extends Component {
  componentDidMount () {
    this.props.dispatch({ type: 'USER_QUERY' });
  }
  render() {
    const { list, loading } = this.props.user;
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Owner',
        dataIndex: 'owner.login',
        key: 'owner.login',
      }, {
        title: 'issues_count',
        dataIndex: 'open_issues_count',
        key: 'open_issues_count',
      },
    ];
    return (
      <div>
        <Table
          columns={columns}
          dataSource={list}
          loading={loading}
          rowKey={record => record.id}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state;
  return {
    user,
  }
};

export default connect(mapStateToProps)(Users)
