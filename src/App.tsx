import * as React from 'react';
import { Icon, Menu, Layout } from 'antd/lib';
import './App.css';
import Row from 'antd/lib/grid/row';
import { Link } from 'react-router-dom';
import Dashboard from './containers/Dashboard/Dashboard';
import { Redirect, Route } from 'react-router';
import SurveyList from './containers/SurveyList/SurveyList';
import UserList from './containers/Admin/UserList/UserList';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
          className="sider"
        >
          <div className="logo">
            <Link to={'/dashboard'}/>
            <img alt={'logo'} src="/logo.png"/>
            <span>ANQ</span>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to={'/dashboard'}/>
              <Icon type="laptop"/>
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/surveys'}/>
              <Icon type="edit"/>
              <span>Survey List</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="tool"/>{this.state.collapsed ? '' : 'Admin'}</span>}>
              <Menu.Item key="3">
                <Link to={'/users'}/>
                <Icon type="user"/>
                User List
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="header" style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="space-between">
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <span style={{ marginRight: '16px' }}>
                <Menu mode="horizontal">
                  <SubMenu style={{float: 'right'}} title={<span><Icon type="user"/>devilune</span>}>
                    <Menu.Item key="logout"><a href="/">Sign out</a></Menu.Item>
                  </SubMenu>
                </Menu>
              </span>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Route exact={true} path="/" render={() => (<Redirect to="/dashboard"/>)}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/surveys" component={SurveyList}/>
            <Route path="/users" component={UserList}/>
          </Content>
          <Footer style={{ textAlign: 'center', padding: '0px 50px 24px' }}>
            <div>ANQ ©2017 Created by <a href="https://github.com/devilune">devilune</a></div>
            <div>Writing graphic by
              <a href="http://www.flaticon.com/authors/freepik">freepik</a>
              from <a href="http://www.flaticon.com/">Flaticon</a> is licensed under
              <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">CC BY 3.0</a>. Check
              out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker">LogoMaker.com</a>
              &nbsp;https://logomakr.com/0zuhvC0zuhvC
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
