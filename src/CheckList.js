import { useRef, useEffect, useState } from 'react';

export default function CheckList(props) {
  const [checked, setChecked] = useState([]);

  // Add/ remove chcked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      // If item checked, create an array with the
      // exisiting array of item and the checked item
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };
  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ' , ' + item;
      })
    : ' ';

  // Returns classes based on whether items are checked
  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not checked-item';

  return props.renderList(handleCheck, isChecked, checkedItems);
}
