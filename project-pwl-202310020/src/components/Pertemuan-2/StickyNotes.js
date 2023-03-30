import React, { useState } from "react";

export default function StickyNotes() {
  const [add, setAdd] = useState(1);

  const NoteItem = () => {
    return (
      <div className="card bg-warning">
        <div className="card-header p-0">
          <span
            onClick={(e) => {
              setAdd(add + 1);
            }}
          >
            +
          </span>
          <span
            onClick={(e) => {
              setAdd(add - 1);
            }}
          >
            x
          </span>
        </div>
        <div className="card-body">
          <textarea></textarea>
        </div>
      </div>
    );
  };

  const LoopNote = () => {
    let items = [];

    for (let index = 0; index <= add; index++) {
      items.push(
        <div className="col-4">
          <NoteItem />
        </div>
      );
    }
    return items;
  };

  return (
    <div className="card">
      <div className="card-header">Sticky Notes</div>
      <div className="card-body">
        <div className="row">
          <LoopNote />
        </div>
      </div>
    </div>
  );
}