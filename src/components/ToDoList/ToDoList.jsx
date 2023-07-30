import Input from "../Input/Input";
import Button from "../Button/Button";
import List from "../List/List";
import styles from "./ToDoList.module.css";
import { useEffect, useState } from "react";

const LS_TO_DO = "Todo List";

const ToDoList = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    //mounting-read-local storage
    const listItem = JSON.parse(localStorage.getItem(LS_TO_DO)) || [];
    setList(listItem);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TO_DO, JSON.stringify(list));
  }, [list]);

  // //Component did mount-dom update hone ke bad ye call hoga
  //   useEffect(()=>{
  // console.log("Componenet did mount")
  //   }, [])

  // //componenet did update
  //   useEffect(()=>{
  //     console.log("Componenet did update")
  // }, [list])
  
  // //component will unmount

  // useEffect(()=>{
  //    return ()=>{
  //     console.log("Componenet will unmount")
  //    }
  // }, [list])
//First Step Add item into list
  const btnClickHandler = () => {
    // const listItems = [...list]
    // listItems.push(text)
    // setList(listItems)//state is immutable
    const trimText = text.trim();
    if (trimText) {
      setList([
        ...list,//list ki copy banayenge or usmain update karte jayenge
        {
          item: trimText,
          editingItem: trimText,
          isDone: false,
          isEditing: false, //Object ka aaray
        },
      ]); //ek line main likh denge
      setText("");//dusra text likhne ke liye input field ko jaise ke vaise karna padega na or usko hi call karna padega na
    }
  };

  //second step
  const deleteAllHandler = ()=>{
    setList([])
  }
//third step
  const swapListItemhandler = (initIndex, finalIndex) => {
    const items = [...list];
    let temp = items[initIndex];
    items[initIndex] = items[finalIndex];
    items[finalIndex] = temp;
    setList(items);
  };

  //Fourth step
  const isDoneHandler = (index) => {
    const items = [...list]; //list la aapn change nahi karu shakat
    items[index].isDone = true;
    setList(items);
  };

//fifth step
  const deleteHandler = (index) => {
    const items = [...list];
    items.splice(index, 1);
    setList(items);
  };

//sixth step
  const isEditingHandler = (index)=>{
    const items = [...list];//pahile saglyat pahile list lach update karva lagel
    items[index].isEditing = true;
    setList(items);
  } 

//seventh step
  const cancelHandler = (index)=>{
    const items = [...list];
    items[index].isEditing = false;
    items[index].editingItem =  items[index].item;
    setList(items);
  }
//eight step
  const listChangeHandler = (index, value)=>{
    const items = [...list];
    items[index].editingItem = value;
    setList(items);
  }
//ninth step
  const itemSave = (index)=>{
    const items = [...list];
    items[index].isEditing = false; //pahile yele false karva lagel
    items[index].item =  items[index].editingItem ;
    setList(items);
  }
  return (
    <div className={styles.todoContainer}>

      <Input
        inputChangeHandler={(str) => {
          setText(str); //we need to store this data
        }}
        inputValue={text}
        keyHandler={(e) => {
          if (e.key === "Enter") {
            btnClickHandler();
          }
        }}
      />

      <Button
          btnClickHandler={btnClickHandler}
          btnLabel="Add To List"
          isDisabled={text.trim().length === 0}
        />
      
        <Button
          btnClickHandler={deleteAllHandler}
          btnLabel="Clear All"
          isDisabled={list.length === 0}
        />
      

      <List
        task={list}
        swapListItemhandler={swapListItemhandler}
        isDoneHandler={isDoneHandler}
        deleteHandler={deleteHandler}
        isEditingHandler={isEditingHandler}
        cancelHandler={cancelHandler}
        listChangeHandler={listChangeHandler}//2way binding
        itemSave={itemSave}
      />
    </div>
  );
};
export default ToDoList;
