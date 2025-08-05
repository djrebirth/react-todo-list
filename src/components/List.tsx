import { useState } from 'react'
import ListItem from './ListItem.tsx'

function List() {
    const [listItems, setListItems] = useState([
        { id: 1, text: 'New Note' },
        { id: 2, text: 'New Note' },
        { id: 3, text: 'New Note' },
    ]);

    const handleAddListItem = () => {
        setListItems([...listItems, {id: listItems.length + 1, text: 'New Note'}]);
    };

    const removeListItem = ({removeId} : {removeId: number}) => {
        setListItems(listItems.filter(listItem => listItem.id !== removeId));
    };

  return (
    <>
        <div className="list">  
            {listItems.map((listItem) => (
              <ListItem key={listItem.id} id={listItem.id} text={listItem.text} deleteListItem={() => removeListItem({ removeId: listItem.id })} />
            ))}
            <div onClick={handleAddListItem} className="add-list-item">+</div>      
        </div>        
    </>
  )
}

export default List
