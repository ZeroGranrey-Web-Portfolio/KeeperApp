import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

const App = () => {
  let i = 0;
  const [notes, setNotes] = useState([]);

  const onAddNoteClick = (title, content) => {
    notes.push({
      key: i,
      title,
      content,
    });
    i++;
    setNotes((prevNotes) => {
      return [...prevNotes];
    });
  };

  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return [...prevNotes.filter((v, i) => i !== id)];
    });
  };

  return (
    <>
      <Header />
      <CreateArea onAddNoteClick={onAddNoteClick} />
      {notes.map((note, index) => (
        <Note
          onClick={onDelete}
          key={index}
          id={index}
          title={note.title}
          content={note.content}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
