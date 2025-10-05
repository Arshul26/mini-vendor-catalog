import React from "react";
import { Card, Row, Col, Button } from "antd";

export default function ProductList({ products, onDelete }) {
  if (!products.length) return <p>No products yet.</p>;

  return (
    <Row gutter={[16, 16]}>
      {products.map((p) => (
        <Col key={p._id} xs={24} sm={12} md={8}>
          <Card
            title={p.name}
            extra={
              <Button type="primary" danger onClick={() => onDelete(p._id)}>
                Delete
              </Button>
            }
            bordered
          >
            <p>{p.description}</p>
            <p>
              <strong>Price:</strong> ${p.price}
            </p>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
