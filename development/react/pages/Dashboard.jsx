import React, {Component} from 'react'
import { Layout, Menu, Icon, Table, Avatar, Divider, Select, Modal } from 'antd'

const { Header, Sider, Content } = Layout

let dataSource = []

for (let index = 0; index < 100; index++) {
  dataSource.push(
    {
      key: index,
      name: 'Mike',
      age: 32 + index,
      address: '10 Downing Street'
    }
  )
  
}

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
      collapsed: false,
      itemsPerPage: 5,
      isLogOutModalShowing: false
    }

    this.toggle = this.toggle.bind( this )
    this.handleItemsPerPageChange = this.handleItemsPerPageChange.bind( this )
    this.showLogOutModal = this.showLogOutModal.bind( this )
    this.logOutUser = this.logOutUser.bind( this )
  }

  componentWillMount() {
    if (localStorage.isLogin != 'true') {
      this.props.history.push( '/' )
    } 
  }

  toggle() {
    this.setState( {
      collapsed: !this.state.collapsed,
      itemsPerPage: this.state.itemsPerPage,
      isLogOutModalShowing: this.state.isLogOutModalShowing
    } )
  }

  handleItemsPerPageChange( change ) {
    this.setState( {
      collapsed: this.state.collapsed,
      itemsPerPage: change,
      isLogOutModalShowing: this.state.isLogOutModalShowing
    } )

    console.log( change )
  }

  showLogOutModal() {
    this.setState( {
      collapsed: this.state.collapsed,
      itemsPerPage: this.state.itemsPerPage,
      isLogOutModalShowing: !this.state.isLogOutModalShowing
    } )
  }

  logOutUser() {
    localStorage.removeItem("isLogin")
    this.props.history.push( '/' )
  }

  render() {
    const paginationConfig = {pageSize: this.state.itemsPerPage}

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

            <h1>
              Admin Dashboard
              <Icon className="trigger logout-icon" type="poweroff" onClick={this.showLogOutModal} />
            </h1>

            <Modal
              title="Log Out"
              visible={this.state.isLogOutModalShowing}
              onOk={this.logOutUser}
              onCancel={this.showLogOutModal}
            >
              <p>Are you sure?</p>
              
            </Modal>
            
          </Header>

          <div className="dashboard-content">
            <h2>Table</h2>
            <Divider/>

            Items per page: <Select onChange={this.handleItemsPerPageChange} value={this.state.itemsPerPage} style={{ width: '10%' }}>
              <Select.Option value="5">5</Select.Option>
              <Select.Option value="10">10</Select.Option>
              <Select.Option value="25">25</Select.Option>
              <Select.Option value="50">50</Select.Option>
              <Select.Option value="75">75</Select.Option>
            </Select>

            <Table className="data-table" dataSource={dataSource} columns={columns} pagination={ paginationConfig } />
          </div>
        </Layout>

      </Layout>
    )
  }
}

module.exports = Dashboard