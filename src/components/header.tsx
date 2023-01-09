import { Tabs, Row, Col, Input } from "antd";

const HeaderComponent = () => {
  return (
    <Row>
      <Col flex={1}>
        <Tabs
          defaultActiveKey="1"
          items={["All Courses", "My Learnings"].map((item, i) => {
            const id = String(i + 1);

            return {
              key: id,
              label: <span>{item}</span>,
            };
          })}
        />
      </Col>

      <Col span={5}>
        <Input.Search placeholder="Search" />
      </Col>
    </Row>
  );
};

export default HeaderComponent;
