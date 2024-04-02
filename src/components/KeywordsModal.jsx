import React from "react";
import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress
} from "@chakra-ui/react";

const KeywordsModal = ({keywords,loading,isOpen,closeModal}) => {
  return(
    <>
    <Modal isOpen = {isOpen} onClose={closeModal}>
        <ModalOverlay/>
        <ModalContent/>
        <ModalHeader>
            KeyWords
        </ModalHeader>
        <ModalCloseButton/>
        


    </Modal>
    </>
  );
};

export default KeywordsModal;
