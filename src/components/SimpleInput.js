import useInput from "../hooks/use-input";

const SimpleInput = props => {

  const {
    value: enteredName,
    valueIsValid:nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

    const {
    value: enteredAge,
    valueIsValid:ageIsValid,
    hasError: ageInputHasError,
    valueChangeHandler: ageChangeHandler,
    valueBlurHandler: ageBlurHandler,
    reset: resetAgeInput
  } = useInput(value => value >= 1 && value <= 120);


  let formIsValid = false;

  if (nameIsValid && ageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (nameInputHasError || ageInputHasError) {
      return;
    }
    const enteredValue = event.target.value;
    console.log(enteredValue);
    resetNameInput();
    resetAgeInput();
  };


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const ageInputClasses = ageInputHasError ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}/>
        {nameInputHasError && <p className="error-text"> Name must not be empty</p>}
      </div>
      <div className={ageInputClasses}>
        <label htmlFor='age'>Your Age</label>
        <input
          type='number'
          id='age'
          onChange={ageChangeHandler}
          onBlur={ageBlurHandler}
          value={enteredAge}/>
        {ageInputHasError && <p className="error-text"> Age should be 1-120</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

