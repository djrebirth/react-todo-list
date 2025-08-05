import { useState, useEffect } from 'react';
import ListItemEditableText from './ListItemEditableText.tsx'
import ListItemEditableDescription from './ListItemEditableDescription.tsx'

type ListItemProps = {
  text: string;
  description: string;
  deleteListItem: () => void;
};

function ListItem ({text, description, deleteListItem} : ListItemProps) {
    const [isStatusToggled, setIsStatusToggled] = useState(false);
    const [isDeleteToggled, setIsDeleteToggled] = useState(false);
    const [itemText, setItemText] = useState(text);
    const [statusInProgress, setStatusInProgress] = useState(true);
    const [statusOnHold, setStatusOnHold] = useState(false);
    const [statusCompleted, setStatusCompleted] = useState(false);

    const handleStatusToggle = () => setIsStatusToggled(!isStatusToggled);
    const handleDeleteToggle = () => setIsDeleteToggled(!isDeleteToggled);
    const handleStatusChange = (status: string) => {
        setStatusInProgress(status == 'in-progress' ? true : false);
        setStatusOnHold(status == 'on-hold' ? true : false);
        setStatusCompleted(status == 'completed' ? true : false);
    }

    useEffect(() => {
        setIsStatusToggled(false);
    }, [statusInProgress, statusOnHold, statusCompleted]);
  return (
    <>
        <div className={`list-item ${statusInProgress ? 'in-progress' : ''} ${statusOnHold ? 'on-hold' : ''} ${statusCompleted ? 'completed' : ''}`}>
            <ListItemEditableText itemText={itemText} />
            <ListItemEditableDescription itemDescription={description} />
            <div className={`delete-icon ${isDeleteToggled ? 'delete-toggled' : ''}`} onClick={handleDeleteToggle}>
                <span>&#8942;</span>
            </div>
            <div className={`toggle-arrow ${isStatusToggled ? 'toggled' : ''}`} onClick={handleStatusToggle}>
                { isStatusToggled && <span>&#9650;</span>}
                { !isStatusToggled && <span>&#9660;</span>}
            </div>
            { isStatusToggled && <div className="status-list">
                <div className={`status-list-item item-in-progress ${statusInProgress && 'active'}`} onClick={() => handleStatusChange('in-progress')}>In Progress</div>
                <div className={`status-list-item item-on-hold ${statusOnHold && 'active'}`} onClick={() => handleStatusChange('on-hold')}>On Hold</div>
                <div className={`status-list-item item-completed ${statusCompleted && 'active'}`} onClick={() => handleStatusChange('completed')}>Completed</div>                
            </div>}
            { isDeleteToggled && <div className="delete-list">
                <div className='delete-list-item' onClick={deleteListItem}>Delete Note</div>          
            </div>}
        </div>
    </>
  )
}

export default ListItem
