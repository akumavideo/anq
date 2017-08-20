import * as React from 'react';
import { Icon, Menu, Layout } from 'antd/lib';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const {SubMenu} = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          className='sider'
        >
          <div className="logo">
            <img alt={'logo'} src='/logo.png' />
            <span>ANQ</span>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="laptop" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="edit" />
              <span>Survey List</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="tool" />{this.state.collapsed? '' : 'Admin'}</span>}>
              <Menu.Item key="3">
                <Icon type="user" />
                User List
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ANQ ©2017 Created by <a href="https://github.com/devilune">devilune</a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
