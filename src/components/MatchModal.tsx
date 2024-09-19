import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { DogCard } from '../components';

import { Dog } from '../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface MatchModalProps {
  poppy: Dog;
  modalIsOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const MatchModal: React.FC<MatchModalProps> = ({ poppy, modalIsOpen, setIsOpen }) => {
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className="border border-[#ccc] rounded-sm m-[10px] p-[10px] w-[200px] text-center">
        <img src={poppy.img} alt={poppy.name} />
        <h3>{poppy.name}</h3>
        <p>Age: {poppy.age}</p>
        <p>Breed: {poppy.breed}</p>
      </div>
    </Modal>
  );
}

export default MatchModal;