interface ButtonProps {
 buttonName: string;
 buttonColor: string;
 onClick: () => void;
}

function Button({buttonName, buttonColor, onClick}: ButtonProps) {

  return(
    <>
      <button
        type="button"
        className={`btn btn-${buttonColor}`}
        onClick={onClick}
      >
        { buttonName }
      </button>
    </>
  )

}

export default Button;