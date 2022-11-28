import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState, useEffect } from "react";

const App = () => {
  let i = 0;
  // localStorage.clear();
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
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const onDelete = (id) => {
    setNotes((prevNotes) => {
      return [...prevNotes.filter((v, i) => i !== id)];
    });
  };
  useEffect(() => {
    let localNotes = localStorage.getItem("notes");
    if (localNotes) {
      localNotes = JSON.parse(localNotes);
      notes.push(...localNotes);
    }
    setNotes((prevNotes) => {
      return [...prevNotes];
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
