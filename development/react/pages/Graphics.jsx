import React, {Component} from 'react'
import { Layout, Menu, Icon, Table, Avatar, Divider, Select, Modal, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import {Pie, Bar, Bubble, Doughnut, HorizontalBar, Line, Polar, Radar, Scatter} from 'react-chartjs-2';
import grphsConfig from './graphsConfig.json'

const { Header, Sider, Content } = Layout


class Graphics extends Component{
  constructor( props ) {
    super( props )

    this.state = {
      collapsed: false,
      isLogOutModalShowing: false
    }

    this.toggle = this.toggle.bind( this )
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
    return(
      <Layout className="dashboard-layout">
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className="logo">
          <Avatar size="large" icon="user" /> Jhon Doe
        </div>

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">
            <Link to="/dashboard">
              <Icon type="line-chart" />
              <span>Table</span>
            </Link>
          </Menu.Item>

          
          <Menu.Item key="2">
            <Icon type="area-chart" />
            <span>Graphics</span>
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
          <h2>Graphics</h2>
          <Divider/>

          <Row>
            <Col span={12} sm={24} lg={12}>
              <Pie data={grphsConfig.dataPie}/>  
            </Col>

            <Col span={12} sm={24} lg={12}>
              <Bar
                data={grphsConfig.dataBar}
                width={100}
                height={300}
                options={{
                  maintainAspectRatio: false
                }}
              />            
            </Col>

            <Col span={12} sm={24} lg={12}>
              <Bubble data={grphsConfig.dataBubble} />
            </Col>

            <Col span={12} sm={24} lg={12}>
              <Doughnut data={grphsConfig.dataDought} />
            </Col>

            <Col span={12} sm={24} lg={12} >
              <HorizontalBar data={grphsConfig.dataHorizontal} />
            </Col>

            <Col span={12} sm={24} lg={12} >
              <Line data={grphsConfig.dataLine} />
            </Col>

            <Col span={12} sm={24} lg={12} >
              <Polar data={grphsConfig.dataPolar} />
            </Col>

            <Col span={12} sm={24} lg={12} >
              <Radar data={grphsConfig.dataRadar} />
            </Col>

            <Col span={12} sm={24} lg={12} >
              <Scatter data={grphsConfig.dataScatter} />
            </Col>
          </Row>

        </div>
      </Layout>

    </Layout>
    )
  }
}

module.exports = Graphics