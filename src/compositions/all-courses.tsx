import React from "react";
import { Card, Image, Row, Col } from "antd";

interface PropTypes {
  courses: Array<any>;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
}

const AllCourses = ({ setSelected, courses }: PropTypes) => {
  return (
    <>
      <Row gutter={10}>
        {(courses || []).map((item) => {
          return (
            <Col key={item} span={6} style={{ marginBottom: 20 }}>
              <Card
                hoverable
                style={{ width: "100%" }}
                onClick={() => setSelected(item)}
                cover={<Image src={item?.img} style={{ height: 350 }} />}
              >
                <Card.Meta
                  title={item?.title}
                  description={item?.description}
                />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default AllCourses;
