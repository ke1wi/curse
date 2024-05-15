import { Avatar, Layout } from "antd";

const Full = () => {
  const { Header, Sider, Content, Footer } = Layout;

  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>
          <Avatar gap={4} className="justify-end">
            H
          </Avatar>
        </Header>
        <Content className="bg-sky-400">Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Full;
