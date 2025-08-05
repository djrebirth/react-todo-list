import { useState } from 'react'

type ListItemEditableDescriptionProps = {
  itemDescription: string;
};

function ListItemEditableDescription({itemDescription} : ListItemEditableDescriptionProps) {
  const [description, setDescription] = useState(itemDescription);
  const [isEditing, setIsEditing] = useState(false);
  const handleIsEditing = () => {
      setIsEditing(!isEditing);
  }
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }
  return (
    <>
       <div className="item-description">
          {!isEditing && <div className="read-only-description" onClick={handleIsEditing}>{description}</div>}
          {isEditing && <textarea id="editDescription" className="item-description-editable" value={description} onChange={handleChange} onBlur={handleIsEditing} autoFocus />}
        </div>
    </>
  );
}

export default ListItemEditableDescription
