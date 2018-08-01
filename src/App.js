import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    const { location, children } = this.props;
    return (
      <Layout hasSider style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
              <Link to="/home">
                <Icon type="home" />
                <span>Home</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/user">
                <Icon type="user" />
                <span>User</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/file">
                <Icon type="file" />
                <span>File</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 186px)' }}>
              <p>You are now at {location.pathname}</p>
              { children }
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            My App ©2018 Created by lxx
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(connect()(App));
