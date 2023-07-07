import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { alertNULL, alertSuccess } from "../context/actions/alertAction";

const ReviewForm = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',

  });

  const [errors, setErrors] = useState({ email: '' });
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleInputChange = (e) => {
    // console.log("e.target", e.target)
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      
      [name]: value,
    })  );
    
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const emailError = validateEmail(formData.user_email)
      ? ''
      : 'Please enter a valid email address';

    setErrors({ email: emailError });
    setIsSubmitClicked(true);
 
    console.log("clicked")
    console.log(emailError)

    if (!emailError) {
      // console.log("if ke ander")
      emailjs
        .sendForm(
          "service_w2rjvc8",
          "template_bnti62v",
          form.current,
          "ekRTF9U-mWyexP3Qn"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("Review sent");

            dispatch(alertSuccess("Review sent successfully"));
            setTimeout(() => {
              dispatch(alertNULL())
            }, 3000);

            form.current.reset(); // Reset the form fields
            setFormData({
              user_name: "",
              user_email: "",
              message: "",
            });
            setIsSubmitClicked(false);

          },
          (error) => {
            console.log(error.text);
          },

        );
    };
  }


return (

  <div className='bg-blend-overlay hover:drop-shadow-lg backdrop-blur-md rounded-xl border border-gray-400 flex items-center justify-between relative px-4 py-2 w-full md:w-340 md:min-w-350 gap-3'>
    <StyledReviewForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" value={formData.user_name} onChange={handleInputChange} />

        <label>Email</label>
        <input type="email" name="user_email" value={formData.user_email} onChange={handleInputChange} 
        className={`border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 rounded-md w-full`} />
          {errors.email && isSubmitClicked && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        <label>Your Review</label>
        <textarea name="message" value={formData.message} onChange={handleInputChange} />

        {/* <input type="submit" value="Send" /> */}
        <button
          type="submit" value="Send"
          disabled={!formData.user_name || !formData.user_email || !formData.message}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:pointer-events-none"
        >Submit</button>

      </form>
    </StyledReviewForm>
  </div>
);
};

export default ReviewForm;

// Styles
const StyledReviewForm = styled.div`
  width: 800px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(156, 163, 175, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      background: rgb(243, 244, 246);

      &:focus {
        border: 2px solid rgba(156, 163, 175, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(239, 68, 68);
      color: white;
      border: none;
    }
  }
`;
