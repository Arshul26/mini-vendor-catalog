import React, { useEffect, useState } from "react";
import { Layout, Menu, Typography, Switch } from "antd";
import {
  AppstoreOutlined,
  PlusSquareOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { api } from "./api";
import AddProductForm from "./components/AddProductForm";
import ProductList from "./components/ProductList";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export default function App() {
  const [products, setProducts] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("list"); // list or add

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    try {
      const res = await api.post("/products", product);
      setProducts((prev) => [res.data, ...prev]);
      setActiveTab("list"); // switch to list after adding
    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsible collapsed={collapsed} onCollapse={(c) => setCollapsed(c)}>
        <div style={{ height: 32, margin: 16, color: "white", textAlign: "center" }}>
          Vendor Dashboard
        </div>
        <Menu
          theme={darkMode ? "dark" : "light"}
          mode="inline"
          selectedKeys={[activeTab]}
          onClick={(e) => setActiveTab(e.key)}
          items={[
            { key: "list", icon: <AppstoreOutlined />, label: "Product List" },
            { key: "add", icon: <PlusSquareOutlined />, label: "Add Product" },
          ]}
        />
        <div style={{ position: "absolute", bottom: 20, width: "100%", textAlign: "center" }}>
          <BulbOutlined />{" "}
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </div>
      </Sider>

      {/* Main Layout */}
      <Layout className={darkMode ? "dark-layout" : "light-layout"}>
        <Header
          style={{
            background: darkMode ? "#001529" : "#fff",
            padding: "0 20px",
          }}
        >
          <Title
            level={2}
            style={{ color: darkMode ? "#fff" : "#000", margin: 0 }}
          >
            Mini Vendor Catalog
          </Title>
        </Header>

        <Content style={{ margin: "20px" }}>
          {activeTab === "add" ? (
            <AddProductForm onAdd={addProduct} />
          ) : (
            <ProductList products={products} onDelete={deleteProduct} />
          )}
        </Content>
      </Layout>
    </Layout>
  );
}