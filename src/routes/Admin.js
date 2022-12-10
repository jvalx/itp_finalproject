import React, { useRef,useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckList from '../CheckList';



export default function Admin() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  
  const [isAllSelected, setIsAllSelected] = useState(false);
  const loader = useLoaderData();
  const [titles, setTitles] = useState([]);
  const results = [];
  
  
  

useEffect(() => {
    
    loader.forEach((post) => {
        results.push(post.title);
        console.log(results, "results");
    })
    setItems(results);
    console.log(results, "results");
    console.log(items, "items");
  }, []);

  const handleItemSelection = (itemId) => {
    // Check if item is currently selected
    const isSelected = selectedItems.includes(itemId);

    if (isSelected) {
      // If item is selected, remove it from the array of selected items
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      // If item is not selected, add it to the array of selected items
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      // If the Select All checkbox is checked, set selectedItems to all item IDs
      setSelectedItems(items.map((item) => item.id));
    } else {
      // If the Select All checkbox is not checked, set selectedItems to an empty array
      setSelectedItems([]);
    }
  };



  // useEffect(() => {
  //   // Set isIndeterminate state based on whether some but not all items are selected
  //   setIsIndeterminate(selectedItems.length > 0 && selectedItems.length < items.length);
  // }, [selectedItems, items]);

  useEffect(() => {
    // Set isAllSelected state based on whether all items are selected
    setIsAllSelected(selectedItems.length === items.length);
  }, [selectedItems, items]);

  const handleDelete = (props) => {
    // 👇️ navigate to /
    console.log(props, "inside handle delete");
    console.log(items, "before filer")
    const newItems = items.filter((item) => item !== props);
    
    setItems(newItems);
    console.log(items, "after filter")
    console.log(newItems, "new items");
    alert('Items deleted successfully.');
  };

  
  return (
    // <div>
    //   <h1>Admin Page</h1>
    //   <table>
    //     <thead>
    //       <tr>
            
    //         <div>
    //     {items.map((post) => {
          
    //     //   return <PostCard post={post} key={post.id} src={post.path}/>;
    //         return (
    //         <div>
    //         <th>
    //           <input
    //             type="checkbox"
    //             checked={isAllSelected}
    //             indeterminate={isIndeterminate}
    //             onChange={handleSelectAll}
    //           />
    //         </th>
            
    //         <th>{post.title}</th>
    //         </div>
    //         )
          
    //     })}
        
    //    {/* ${posts[0].id}; */}
    //     </div>
    //         </tr>
    //     </thead>
    // </table>
    // </div>
    <CheckList
      items={items}
      
      onClick={(newCheckedItem) => {
        console.log("item was clicked", newCheckedItem);
        setItems(newCheckedItem);
      }}
      renderList={(handleCheck, isChecked, checkedItems) => {
        return (
          <div className="CheckedList">
            <div className="checkList">
              <div className="title"> Your Favorite Project CheckList: </div>
              <div className="list-container">
                {/* /* display items using array.map() */}
                {items.map((item, index) => (
                  <div key={index}>
                    {/* Adds input checkbox for every item */}
                    <input
                      value={item}
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    {/* Use isChecked() function to determine the className of the span containing the item */}
                    <span className={isChecked(item)}> {item} </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {"Checked Items: "} {checkedItems}
              {console.log(checkedItems, "hello")}
            </div>
            <div>
              {checkedItems.length > 1 &&
              <button onClick={() => handleDelete(checkedItems)}> hello </button>
              
              }
            </div>
          </div>
        );
      }}
    />
  )
}
