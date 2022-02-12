import React, { useRef, useEffect, useCallback } from 'react';
import useForm from './useForm.js';
import validate from './validateInfo';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -60px;
  z-index: 9999;
`;

const ModalWrapper = styled.div`
  width: 1000px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  line-height: 1.8;
  color: #141414;
  button {
    font-size: 1.2rem;
    padding: 10px 20px;
    width: 100%;
    background: #141414;
    color: #fff;
    border: 1px solid #141414;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    color: #141414;
    border: 1px solid #141414;
    transition: 250ms;
    }
  }

  input {
    padding: 10px 150px 10px 10px;
    text-align: left;
    margin: 5px 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }

  p{
    color: red;
    font-size: 14px;
  }

  textarea {
    padding: 10px 140px 50px 10px;
    resize: none;
    margin: 5px 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({showModal, setShowModal}) => {
    const modalRef = useRef();

    const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });
    
    const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
    };

    const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
    );

    useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
    );

    const {handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                  <animated.div style={animation}>
                      <ModalWrapper showModal={showModal}>
                          <ModalImg src={require('../images/img-modal1.JPG')} alt='person' />
                          <ModalContent>
                              <h1>Contact Me</h1>
                              <form onSubmit={handleSubmit}>
                                <div>
                                  <label>Name</label>
                                  <br/>
                                  <input type="text" name="name" placeholder="Enter Name" value={values.name} onChange={handleChange} /> 
                                  {errors.name && <p>{errors.name}</p>}
                                </div>
                                <div>
                                  <label>Email</label>
                                  <br/>
                                  <input type="email" name="user_email" placeholder="Enter Email" value={values.user_email} onChange={handleChange} />
                                  {errors.user_email && <p>{errors.user_email}</p>}
                                </div>
                                <div>
                                  <label>Message</label>
                                  <br/>
                                  <textarea type="text" name="message" placeholder="Enter Message" value={values.message} onChange={handleChange} />
                                  {errors.message && <p>{errors.message}</p>}
                                </div>
                                <button type="submit">Send</button>
                              </form>
                          </ModalContent>
                          <CloseModalButton arial-label='Close Modal' onClick= {() => setShowModal(prev => !prev)} />
                      </ModalWrapper>
                  </animated.div>
                </Background>
            ): null}
        </>
    )
}

export default Modal;


                                // <label>Name</label>
                                // <br/>
                                // <input type="text" name="name" value={values.name} onChange={handleChange} /> 
                                // {errors.name && <p>{errors.name}</p>}
                                // <br/>
                                // <label>Email</label>
                                // <br/>
                                // <input type="email" name="user_email" value={values.user_email} onChange={handleChange} />
                                // {errors.user_email && <p>{errors.user_email}</p>}
                                // <br/>
                                // <label>Message</label>
                                // <br/>
                                // <textarea type="text" name="message" value={values.message} onChange={handleChange} />
                                // {errors.message && <p>{errors.message}</p>}
                                // <br/>
                                // <button type="submit">Send</button>