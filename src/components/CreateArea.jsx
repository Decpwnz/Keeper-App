import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submit, setSubmit] = useState([]);

  function handleChangeTitle(event) {
    const titleValue = event.target.value;
    setTitle(titleValue)
  }

  function handleClickSubmit(event) {
    setSubmit((prevValue) => {
      return [...prevValue, {
        title: title,
        content: content
      }]
    })

    event.preventDefault();
    setTitle('')
    setContent('')
  }

  function handleChangeContent(event) {
    const textValue = event.target.value;
    setContent(textValue);
  }

  function handleDelete(id) {
    console.log(id)
    setSubmit(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <form onSubmit={handleClickSubmit}>
        <input value={title} onChange={handleChangeTitle} name="title" placeholder="Title" />
        <textarea value={content} onChange={handleChangeContent} name="content" placeholder="Take a note..." rows="3" />
        <button type="submit">Add</button>
      </form>
      {
        submit.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={handleDelete}
          />)


        )
      }
    </div>
  );
}

export default CreateArea;
