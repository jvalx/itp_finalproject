import {React, useEffect, useState} from 'react'



export default function Contact() {
  useEffect(() => {
    document.title = "Contact Page";
}, []);



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
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
        <label for="validationCustom01" class="form-label">
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
        <div className="valid-feedback">
                Looks good!
        </div>
      </div>

      <br />

      <div className="col-md-4">
        <label for="validationCustom01" class="form-label">
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
      <label for="validationCustom01" class="form-label">
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
      <label for="validationCustom01" class="form-label">
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

      <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
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
                
          // <div class="col-12">
          //   <div class="form-check">
          //     <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
          //     <label class="form-check-label" for="invalidCheck">
          //       Agree to terms and conditions
          //     </label>
          //     <div class="invalid-feedback">
          //       You must agree before submitting.
          //     </div>
          //   </div>
          // </div>
          // <div class="col-12">
          //   <button class="btn btn-primary" type="submit">Submit form</button>
          // </div>
  //       </form>

  //       </div>
  //     </div>



          
      {/* <script>
      (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
          .forEach(function (form) {
            form.addEventListener('submit', function (event) {
              if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }

              form.classList.add('was-validated')
            }, false)
          })
      })()
  </script>
     */}
      // </div>
    // );
  
  


  