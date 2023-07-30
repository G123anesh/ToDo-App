// eslint-disable-next-line react/prop-types
const Input = ({ inputChangeHandler, inputValue, keyHandler }) => {
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          inputChangeHandler(e.target.value); //we write anything so this control
        }}
        value={inputValue}//two way binding
        onKeyUp={keyHandler}
      />
    </>
  ); //by on change we sent the data from input to parent with the help of state uplifting
};
export default Input;
