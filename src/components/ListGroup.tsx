import {useState} from "react";

interface ListProps {
  buttonColor: string[];
  heading: string;
  onButtonColorSelect: (i:string) => void;
}

function ListGroup({buttonColor, heading, onButtonColorSelect}: ListProps) {
  let [selectedIndex, setSelectedIndex] = useState(-1);

  return(
    <>
      <h1>{heading}</h1>
      <ul className='list-group'>
        {buttonColor.map((selectedColor, index) => (
          <li
            className={
            selectedIndex !== index
              ? 'list-group-item'
              : 'list-group-item active'
          }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onButtonColorSelect(selectedColor);
            }}
          >{ selectedColor }</li>
        ))}
      </ul>
    </>
  )
}

export default ListGroup;
