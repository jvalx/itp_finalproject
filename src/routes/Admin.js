import React, { useRef, useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckList from '../CheckList';

export default function Admin() {
  const [items, setItems] = useState([]);
  const loader = useLoaderData();
  const results = [];
  const [newCheckedItems, setCheckedItems] = useState([]);
  const hasRan = useRef(false);
  const loaded = useRef(true);
  const updated = useRef(false);

  useEffect(() => {
    document.title = 'Admin Page';
  }, []);

  useEffect(() => {
    if (hasRan.current) return;
    loader.forEach((post) => {
      results.push(post.title);
      
    });
    setItems(results);
    console.log(loader, "loader");
    console.log(results, "items");
    hasRan.current = true;
    
  }, []);


  const handleDelete = (props) => {
    // 👇️ navigate to /
    
    const newItems = items.filter((item) => item !== props);
    const newNewCheckedItems = items.filter((item) => item !== props);
    setItems(newItems);
    setCheckedItems(newNewCheckedItems);
    
    loaded.current = false;
    updated.current = true;
    
  };

  return (
   
    <CheckList
      items={items}
      onClick={(newCheckedItem) => {
        console.log('item was clicked', newCheckedItem);
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
          
              {loaded ? setCheckedItems(checkedItems) : null}
              
              
              {'Checked Items: '} {newCheckedItems}
              {}
              {/* {setCheckedItems(checkedItems)} */}
            </div>
            <div>
              {newCheckedItems.length > 1 && updated && (
                <button onClick={() => handleDelete(newCheckedItems)}>
                  {' '}
                  Delete{' '}
                </button>
              )}
            </div>
          </div>
        );
      }}
    />
  );
}
