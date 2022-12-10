import { React, useEffect, useState } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Page';
  }, []);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const [isLastValid, setLastIsValid] = useState(false);
  const [isFirstValid, setFirstIsValid] = useState(false);
  const [isEmailValid, setEmailIsValid] = useState(false);
  const [isNoteValid, setNoteIsValid] = useState(false);

  // FIRST CODE
  const handleFirstNameChange = (event) => {
    setFirstIsValid(true);
    setFirstName(event.target.value);

    console.log(firstName, 'First name changed');
  };
  const handleLastNameChange = (event) => {
    setLastIsValid(true);
    setLastName(event.target.value);
    console.log(lastName, 'lastName changed');
  };

  const handleEmailChange = (event) => {
    setEmailIsValid(true);
    setEmail(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNoteIsValid(true);
    setNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here

    if (!isFirstValid) {
      alert('Error: First name is null .');
    }

    if (!isLastValid) {
      alert('Error: Last name is null .');
    }
    if (!isEmailValid) {
      alert('Error: Email is null .');
    }
    if (!isNoteValid) {
      alert('Error: Note is null .');
    }
    if (isFirstValid && isLastValid && isEmailValid && isNoteValid) {
      setLastName('');
      setFirstName('');
      setEmail('');
      setNote('');
      alert('Succesfully added you to email list!');
    }
  };

  return (
    <form class="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
      <div class="col-md-4">
        <label for="validationCustom01" class="form-label">
          First name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom01"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustom02" class="form-label">
          Last name
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom02"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <div class="valid-feedback">Looks good!</div>
      </div>
      <div class="col-md-4">
        <label for="validationCustomUsername" class="form-label">
          Email
        </label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">
            @
          </span>
          <input
            type="email"
            class="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            value={email}
            onChange={handleEmailChange}
          />
          <div class="invalid-feedback">Please choose a email.</div>
        </div>
      </div>
      <div class="col-md-6">
        <label for="validationCustom03" class="form-label">
          Note
        </label>
        <input
          type="text"
          class="form-control"
          id="validationCustom03"
          value={note}
          onChange={handleNoteChange}
        />
        <div class="invalid-feedback">Please provide a valid note.</div>
      </div>

      <div class="col-12">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck"
            required
          />
          <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
          </label>
          <div class="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">
          Submit form
        </button>
      </div>
    </form>
  );
}
