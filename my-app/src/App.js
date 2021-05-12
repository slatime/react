import React , {Component} from 'react';
import { Layout } from 'antd';
import Sider from './component/Menu'
const { Header, Footer , Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    )
  }
} 

export default App;