import React, { useState } from 'react'
import '../../index.css'
import styled from 'styled-components'
import ReactModal from 'react-modal';
import Modal from './Modal';

function Header() {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }
  const handleModalClose = () => {
    setModalOpen(false);
  }
  
  return (
      <Container>
        <Logo>
          <LogoBox>
            Z
          </LogoBox>
          <LogoText>
            지그재그 앱에서 더 편리하게
          </LogoText>
        </Logo>
        
        <AppButton onClick={handleModalOpen}>
          앱으로 이동
        </AppButton>    
        <ReactModal 
          isOpen={modalOpen} 
          onRequestClose={() => setModalOpen(false)} 
          style={StyledModal}
        >
          <Modal handleModalClose={handleModalClose}/>
        </ReactModal>
      </Container>
  )
}

export default Header

const Container = styled.div`
  font-family: var(--fontBold);
  display: flex;
  padding: 0 17px;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  background-color: var(--headerBeige);
  border: none;
  width: 100%;
  position: absolute;
`;
const Logo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  color: var(--zBlack);
`;
const LogoBox = styled.div`
  font-family: var(--fontExtraBold);
  font-size: 20px;
  width: 25px;
  height: 25px;
  background-color: var(--zPink);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
  border-radius: 4px;
`;
const LogoText = styled.div`
  font-family: var(--fontBold);
  font-size: 16px;
  display: flex;
  align-items: center;
`;
const AppButton = styled.button`
  font-family: var(--fontBold);
  text-align: center;
  height: 30px;
  padding: 0 12px;
  background-color: var(--zButton);
  border: none;
  border-radius: 100px;
  font-size: 12px;
  color: var(--zWhite);
`;
const StyledModal = ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",


  },
  content: {
    width: '350px',
    height: '450px',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
  }
}