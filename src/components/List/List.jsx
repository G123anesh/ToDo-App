import styles from "./List.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
// eslint-disable-next-line react/prop-types
const List = ({task,swapListItemhandler,isDoneHandler,deleteHandler,isEditingHandler,cancelHandler,listChangeHandler,itemSave,
}) => {
  // console.log(task);
  //array of string converted into array of jsx
  //["Ganesh", "Bhusari", "Hinganght"] ==> [<li>Ganesh</li>,<li>Bhusari</li>,<li>Hinganght</li>]
  // eslint-disable-next-line react/prop-types
  const listitem = task.map((tsd, index) => {

    return (
      <li key={index} className={tsd.isDone ? styles.itemDoneStyle : ""}>
      
        {!tsd.isEditing && ( //false honga to !tsd.isEditing ye lo nahito second condition lo editing ke liye
         //----******-------//
         <>
            {tsd.item}
            <Button
              btnLabel="Edit"
              className={styles.listItem}
              btnClickHandler={() => isEditingHandler(index)}
              isDisabled={tsd.isDone}
            />
          </>  //----******-------//
        )}

        {tsd.isEditing && ( //true//---*******---------///
          <>
            <Input
              inputValue={tsd.editingItem}
              inputChangeHandler={(value) => {
                listChangeHandler(index, value);
              }}
            />

            <Button
              btnLabel="Save"
              className={styles.listItem}
              btnClickHandler={() => itemSave(index)}
            />

            <Button
              btnLabel="Cancel"
              className={styles.listItem}
              btnClickHandler={() => cancelHandler(index)}
            />

          </>//---*****---------
        )} 

        <Button
          btnLabel="UP"
          className={styles.listItem}
          btnClickHandler={() => swapListItemhandler(index, index - 1)}
          isDisabled={index === 0}
        />

        <Button
          btnLabel="DOWN"
          className={styles.listItem}
          btnClickHandler={() => swapListItemhandler(index, index + 1)}
          // eslint-disable-next-line react/prop-types
          isDisabled={index === task.length - 1}
        />

        {tsd.isDone && ( //is one true rahega ye condition rahegi
          <Button
            btnLabel="DELETE"
            className={styles.listItem}
            btnClickHandler={() => deleteHandler(index)}
          />
        )}

        {!tsd.isDone && ( //isko false kardenga
          <Button
            btnLabel="DONE"
            className={styles.listItem}
            btnClickHandler={() => isDoneHandler(index)}
            isDisabled={tsd.isEditing}
          />
        )}
      </li>
    );
  });

  return (
    <div className={styles.marti}>
      <ul className={styles.listContainer}>{listitem}</ul>
    </div>
  );
};
export default List;
