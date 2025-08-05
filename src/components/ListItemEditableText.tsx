import { useState } from 'react'

type ListItemEditableTextProps = {
  itemText: string;
};

function ListItemEditableText({itemText} : ListItemEditableTextProps) {
  const [text, setText] = useState(itemText);
  const [isEditing, setIsEditing] = useState(false);
  const handleIsEditing = () => {
      setIsEditing(!isEditing);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return (
    <>
       <div className="item-text">
          {!isEditing && <div className="read-only-text" onClick={handleIsEditing}>{text}</div>}
          {isEditing && <input id="editText" className="item-text-editable" value={text} onChange={handleChange} onBlur={handleIsEditing} autoFocus />}
        </div>
    </>
  );
}

export default ListItemEditableText