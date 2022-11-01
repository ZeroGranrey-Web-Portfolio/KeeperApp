import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ onClick, id, title, content }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button
        onClick={() => {
          onClick(id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
