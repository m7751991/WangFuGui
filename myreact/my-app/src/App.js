/*
 * @Description: 
 * @Author: Wangwenchao
 * @Date: 2021-06-23 21:34:42
 * @LastEditTime: 2021-06-23 22:45:13
 * @LastEditors: Wangwenchao
 */
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Column 1',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Column 2',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Column 3',
    dataIndex: 'address',
    key: '3',
    width: 150,
  },
  {
    title: 'Column 4',
    dataIndex: 'address',
    key: '4',
    width: 150,
  },
  {
    title: 'Column 5',
    dataIndex: 'address',
    key: '5',
    width: 150,
  },
  {
    title: 'Column 6',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: 'Column 7',
    dataIndex: 'address',
    key: '7',
    width: 150,
  },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}


function callback(key) {
  console.log(key);
}

function App() {
  return (
    <div className="App">
      <div className="header">
        全部客户
      </div>

      <div className="fd-content">
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
          </TabPane>
          <TabPane tab="Tab 2" key="2">
          </TabPane>
          <TabPane tab="Tab 3" key="3">
          </TabPane>
        </Tabs>
        <div className='fd-table'>
          <Table columns={columns} dataSource={data} scroll={{ x: 1500 }} />,
        </div>
      </div>
    </div>
  );
}

export default App;
