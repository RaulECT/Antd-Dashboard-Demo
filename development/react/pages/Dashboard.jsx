import React, {Component} from 'react'
import { Layout, Menu, Icon, Table, Avatar, Divider } from 'antd'

const { Header, Sider, Content } = Layout

const dataSource = [{
  key: '1',
  name: 'Mike',
  age: 32,
  address: '10 Downing Street'
}, {
  key: '2',
  name: 'John',
  age: 42,
  address: '10 Downing Street'
}]

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}]

class Dashboard extends Component{
  constructor(props) {
    super( props )
    
    this.state = {
      collapsed: false
    }

    this.toggle = this.toggle.bind( this )
  }

  toggle() {
    this.setState( {
      collapsed: !this.state.collapsed
    } )
  }

  render() {
    return(
      <Layout className="dashboard-layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
            <Avatar size="large" icon="user" /> Jhon Doe
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="line-chart" />
              <span>Table</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Header className="dashboard-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <h1>Admin Dashboard</h1>
          </Header>

          <div className="dashboard-content">
            <h2>Table</h2>
            <Divider/>
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </Layout>
      </Layout>
    )
  }
}

module.exports = Dashboard