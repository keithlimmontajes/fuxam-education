import React, { useEffect, useState } from "react";

import { api } from "../utils/api";
import { Input, Button, Row, Col } from "antd";

interface PropTypes {
  note: any;
  notes: Array<any>;
  isEdit: Boolean;
  setNotes: React.Dispatch<React.SetStateAction<any>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAdd: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddNotes = ({
  note,
  notes,
  isEdit,
  setNotes,
  setIsAdd,
  setIsEdit,
}: PropTypes) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // const notesApi = api.notes.get.useQuery();

  const createNotes = api.notes.create.useMutation({
    onSuccess: (data) => setNotes([...notes, data]),
  });

  const updateNotes = api.notes.update.useMutation();

  const handleSubmit = () => {
    setIsAdd(false);
    setIsEdit(false);

    if (isEdit) {
      updateNotes.mutate({ id: note?.id, title, description });
    } else {
      createNotes.mutate({ title, description });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setTitle(note?.title);
      setDescription(note?.description);
    }
  }, [isEdit, note]);

  return (
    <>
      <Input
        value={title}
        placeholder="Type title"
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginTop: 20, marginBottom: 5 }}
      />

      <Input.TextArea
        rows={12}
        value={description}
        placeholder="Type descriptions"
        onChange={(e) => setDescription(e.target.value)}
      />

      <Row>
        <Col flex={1} />
        <Col style={{ marginTop: 5 }}>
          <Button
            onClick={() => {
              setIsAdd(false);
              setIsEdit(false);
            }}
          >
            Close
          </Button>
          <Button
            onClick={handleSubmit}
            style={{ color: "#fff", background: "#1677ff" }}
          >
            {isEdit ? "Update" : "Save"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default AddNotes;
