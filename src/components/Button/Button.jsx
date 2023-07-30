// eslint-disable-next-line react/prop-types
const Button = ({ btnClickHandler, btnLabel, isDisabled}) => {
  return (
    <>
      <button
        onClick={() => {
          btnClickHandler();
        }}
        disabled={isDisabled}
       >
        {btnLabel}
      </button>
    </>
  );
};
export default Button;
