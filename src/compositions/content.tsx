import React from "react";
import moment from "moment";
import AddNotes from "./add-notes";
import ListNotes from "./list-notes";
import AllCourses from "./all-courses";
import ReactPlayerComponent from "../components/video";

import { api } from "../utils/api";
import { Col, Row, Button } from "antd";

const ContentsComposition = ({ courses }: any) => {
  const [isAdd, setIsAdd] = React.useState(false);
  const [isEdit, setIsEdit] = React.useState(false);
  const [note, setNote] = React.useState<any>(null);
  const [notes, setNotes] = React.useState<any>([]);
  const [selected, setSelected] = React.useState<any>(null);

  const { data, isLoading } = api.notes.get.useQuery();

  React.useEffect(() => {
    setNotes(data);
  }, [isLoading]);

  return (
    <Row gutter={24}>
      <Col span={6} style={{ background: "#e6e6e6", minHeight: "100%" }}>
        <div style={{ padding: 10 }}>
          <p>{moment().format("LL")}</p>
          <h2>Hi, Keith!</h2>
        </div>

        <Button onClick={() => setIsAdd(true)}>+ Add Notes</Button>
        {isAdd || isEdit ? (
          <AddNotes
            note={note}
            notes={notes}
            isEdit={isEdit}
            setNotes={setNotes}
            setIsAdd={setIsAdd}
            setIsEdit={setIsEdit}
          />
        ) : (
          <ListNotes
            notes={notes}
            setNote={setNote}
            setNotes={setNotes}
            setIsEdit={setIsEdit}
          />
        )}
      </Col>

      <Col span={18} style={{ overflowY: "scroll", maxHeight: 800 }}>
        {selected ? (
          <div>
            <Button
              style={{
                color: "#fff",
                background: "#1677ff",
                marginTop: 10,
                marginBottom: 10,
              }}
              onClick={() => setSelected(null)}
            >
              {"<"} Go Back
            </Button>

            <ReactPlayerComponent url={selected?.url} />
            <h1>{selected?.title}</h1>
            <p>{selected?.description}</p>
          </div>
        ) : (
          <AllCourses setSelected={setSelected} courses={courses} />
        )}
      </Col>
    </Row>
  );
};

export default ContentsComposition;
