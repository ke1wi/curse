import { Table } from "antd";
import axios from "axios";

function CustomTable() {
  function get_rates() {
    axios.get("http://127.0.0.1:8000/hello").then((res: RatesResponse) => {});
  }
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const col = [];
  return <Table dataSource={dataSource} columns={columns}></Table>;
}

export default CustomTable;
