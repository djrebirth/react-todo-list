import { useState } from 'react'
import ListItem from './ListItem.tsx'

function List() {
    const [listItems, setListItems] = useState([
        { id: 1, text: 'New Note Title', description: 'New Description' },
        { id: 2, text: 'New Note Title', description: 'New Description' },
        { id: 3, text: 'New Note Title', description: 'New Description' },
    ]);

    const handleAddListItem = () => {
        const highestId = listItems.reduce((maxId, currentItem) => {
            return Math.max(maxId, currentItem.id);
        }, 0);     
        setListItems([...listItems, {id: highestId + 1, text: 'New Note', description: 'New Description'}]);
    };

    const removeListItem = ({removeId} : {removeId: number}) => {
        setListItems(listItems.filter(listItem => listItem.id !== removeId));
    };

  return (
    <>
        <div className="list">  
            {listItems.map((listItem) => (
              <ListItem key={listItem.id} text={listItem.text} description={listItem.description} deleteListItem={() => removeListItem({ removeId: listItem.id })} />
            ))}
            <div onClick={handleAddListItem} className="add-list-item">+</div>      
        </div>        
    </>
  )
}

export default List
