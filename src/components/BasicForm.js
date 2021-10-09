import useInput from "../hooks/use-input-reducer";


const BasicForm = (props) => {

  const {
    value: nameInputValue,
    valueIsValid: nameInputIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: nameInputReset
  } = useInput(value => value.trim() !== '');

  const {
    value: lastNmeInputValue,
    valueIsValid: lastNameInputIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNInputChangeHandler,
    valueBlurHandler: lastNameInputBlurHandler,
    reset: lastNameInputReset
  } = useInput(value => value.trim() !== '');

  const {
    value: emailInputValue,
    valueIsValid: emailInputIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    valueBlurHandler: emailInputBlurHandler,
    reset: emailInputReset
  } = useInput(value => value.trim() !== '');


  let formIsValid = false;

  if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if (nameInputHasError || lastNameInputHasError || emailInputHasError) {
      return;
    }
    console.log(nameInputValue, lastNmeInputValue, emailInputValue)
    nameInputReset();
    lastNameInputReset();
    emailInputReset();

  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameInputValue}
          />
          {nameInputHasError && <p className='error-text'> The name couldn't be empty </p>}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastname'>Last Name</label>
          <input type='text'
                 id='lastname'
                 onChange={lastNInputChangeHandler}
                 onBlur={lastNameInputBlurHandler}
                 value={lastNmeInputValue}
          />
          {lastNameInputHasError && <p className='error-text'> This field couldn't be empty </p>}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailInputValue}
        />
        {emailInputHasError && <p className='error-text'> This field couldn't be empty</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
