import { CModal, CModalHeader, CModalTitle, CModalBody } from "@coreui/react";
function Modal(props) {
  const handleCloseModal = () => {
    props.setIsShowModal(false);
  };
  return (
    <>
      <CModal visible={props.isShowModal} onClose={handleCloseModal}>
        <CModalHeader onClose={handleCloseModal}>
          <CModalTitle>{props.post.title}</CModalTitle>
        </CModalHeader>
        <CModalBody>{props.post.body}</CModalBody>
      </CModal>
    </>
  );
}

export default Modal;
