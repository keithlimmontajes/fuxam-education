import React from "react";

import { List } from "antd";
import { api } from "../utils/api";
import { useEffect, useState } from "react";
import { DeleteFilled } from "@ant-design/icons";

interface PropTypes {
  notes: Array<any>;
  setNotes: React.Dispatch<React.SetStateAction<any>>;
  setNote: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListNotes = ({ notes, setIsEdit, setNote, setNotes }: PropTypes) => {
  const deleteNote = api.notes.delete.useMutation({
    onSuccess: (data) => {
      setNotes((prev: any) => prev.filter((item: any) => item.id !== data?.id));
    },
  });

  return (
    <div>
      <List
        dataSource={notes}
        itemLayout="horizontal"
        renderItem={(item: any) => (
          <List.Item
            actions={[
              <a
                key="list-loadmore-more"
                onClick={() => {
                  deleteNote.mutate({ id: item?.id });
                }}
              >
                <DeleteFilled style={{ fontSize: 20 }} />
              </a>,
            ]}
          >
            <List.Item.Meta
              title={
                <a
                  style={{ fontSize: 18 }}
                  onClick={() => {
                    setNote(item);
                    setIsEdit(true);
                  }}
                >
                  {item?.title}
                </a>
              }
              description={item?.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListNotes;
