import {React, useEffect, useState} from 'react'



export default function Contact() {
  useEffect(() => {
    document.title = "Contact Page";
}, []);



  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  

  // const handleFirstNameChange = (event) => {
  //   console.log("value");
  //   console.log(event.target.value);

  //   setFirstName(event.target.value);
  //   console.log(setFirstName(event.target.value));
  //   console.log("inside set first name: ")
  //   console.log(firstName);
  // };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation here

    if (firstName !== null) {
      alert('Error: First name is null .');
    } 
    if (lastName !== null) {
      alert('Error: Last name is null .');
    }
    if (email !== null) {
      alert('Error: Email is null .');
    }
    if (note !== null) {
      alert('Error: Note is null .');
    }
  };


  return (
    <div className="container">
  
          <div className="row col">

         </div>
    <form className= "row g-3" onSubmit={handleSubmit}>
              <h3>Want to contact me?</h3>
             <h6>Leave your information below!</h6>

      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(updatedFirstName) => {
              setFirstName(updatedFirstName.nativeEvent.target.value);
              console.log(updatedFirstName.nativeEvent.target.value);
              console.log("firstName:");
              console.log(firstName);
            }}
          />
        </label>
        <div className="valid-feedback">
                Looks good!
        </div>
      </div>

      <br />

      <div className="col-md-4">
        <label htmlFor="validationCustom01" className="form-label">
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
        <div className="valid-feedback">
                Looks good!
        </div>
      </div>

      <br/>

      <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">
        Email:
        <input
          type="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <div className="valid-feedback">
                Looks good!
        </div>
      </div>

      <br />

      <div className="col-md-4">
      <label htmlFor="validationCustom01" className="form-label">
        Note:
        <input
          type="text"
          value={note}
          onChange={handleNoteChange}
        />
      </label>
      <div className="valid-feedback">
                Looks good!
        </div>
      </div>
      <br />
      
      <input type="submit" value="Submit" />

      <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          {/* <div class="col-12">
            <button class="btn btn-primary" type="submit" value ="Submit">Submit form</button>
          </div> */}
     
    </form>
    </div>
  );
};

  


  