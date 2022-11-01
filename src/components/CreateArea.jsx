import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const CreateArea = ({ onAddNoteClick }) => {
  const [extended, setExtended] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitNote = () => {
    onAddNoteClick(title, content);
    setTitle("");
    setContent("");
  };

  const Area = () => {
    return (
      <textarea
        value={content}
        onInput={(event) => {
          setContent(event.target.value);
        }}
        name="content"
        placeholder="Take a note..."
        rows={extended ? 3 : 0}
      />
    );
  };

  return (
    <div>
      <form
        className="create-note"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          onClick={() => setExtended(true)}
          value={title}
          onInput={(event) => {
            setTitle(event.target.value);
          }}
          name="title"
          placeholder="Title"
        />
        {extended && Area()}

        <Zoom in={extended}>
          <Fab aria-label="add" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
