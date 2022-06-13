import {React, useState} from 'react';
import '../portfolio.css'
import {useForm} from 'react-hook-form'
import emailjs from 'emailjs-com'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export default function ContactForm() {
    const [disabled, setDisabled] = useState(false)
    const [isMessageSent, setIsMessageSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        try {
          setDisabled(true);
    
          const templateParams = {
            name,
            email,
            subject,
            message
          };
          await emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            templateParams,
            process.env.REACT_APP_USER_ID
          );
          reset();
          setIsMessageSent(true)
          setDisabled(false);
          setTimeout(() => {
            setIsMessageSent(false)
          },6100)
        } catch (e) {
          console.log(e);
        }
      };

    return(
        <div className="contact-form-wrapper">
            <form 
                className="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
            >
                <input 
                    type="text" 
                    className="form__input" 
                    name="name" 
                    placeholder="Full name" 
                    {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                    })}
                />
                {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                <input 
                  type="email" 
                  className="form__input" 
                  name="email" 
                  placeholder="Email" 
                  {...register('email', {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })} 
                />
                {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                )}
                <input 
                  type="text" 
                  className="form__input" 
                  name="subject" 
                  placeholder="Subject" 
                  {...register('subject', {
                    required: {
                      value: true,
                      message: 'Please enter a subject'
                    },
                    maxLength: {
                      value: 75,
                      message: 'Subject cannot exceed 75 characters'
                    }
                  })}
                />
                {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                )}
                <textarea 
                  className="form__input field" 
                  name="message" 
                  placeholder="Write something.." 
                  {...register('message', {
                    required: true
                  })}
                ></textarea>
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                <button  type="submit" className="btn" disabled={disabled}>Submit</button>
            </form>
            <div className="icons-container">
                <a target="_blank" rel="noreferrer" href="https://github.com/mikey137">
                    <FontAwesomeIcon className='social-media-icon' icon={ faGithub }/>
                </a>
                <a target="_blank" rel="noreferrer" href="www.linkedin.com/in/mhulme137">
                    <FontAwesomeIcon className='social-media-icon' icon={ faLinkedin }/>
                </a>
            </div>
            <div className={ isMessageSent ? "message-sent-alert" : "hidden" }>Message Sent!</div>
        </div>
    )
}