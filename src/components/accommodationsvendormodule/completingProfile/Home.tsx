'use client'
import React, { useState } from 'react';
import Image from "next/image";
import { Container, Button, Modal, Tabs, Tab, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import CloseModal from "../../../../public/images/close-modal.png";
import CircularProgressBar from './CircularProgressBar';
import Link from 'next/link';
import CompleteProfile from './CompleteProfile';
import CompanyDocuments from './CompanyDocuments';
import ContactPersonDetails from './ContactPersonDetails';
import PayoutDetails from './PayoutDetails';
import Policies from './Policies';

const Home = () => {
  const [key, setKey] = useState('step1');
  const [showConfirm, setShowConfirm] = useState(false);

  const tabOrder = ['step1', 'step2', 'step3', 'step4', 'step5'];

  const getNextTab = () => tabOrder[tabOrder.indexOf(key) + 1];
  const getProgress = () => {
    const stepPercent = [20, 30, 40, 60, 90];
    return stepPercent[tabOrder.indexOf(key)] || 0;
  };

  const handleFinalSubmit = () => setShowConfirm(true);
  const handleConfirm = () => {
    setShowConfirm(false);
    alert('Form submitted successfully!');
  };

  return (
    <div className='steps-from-sec '>
      <Container className='min-vh-100 d-flex flex-column'>
        {/* Header and Progress */}
        
        <div className='steps-from-top d-flex align-items-center gap-md-4 gap-2 justify-content-between mb-32 pt-32'>
          <div className='text-box'>
            <h2>Complete Profile</h2>
            <p>Let's get your account set up—just provide a few details to complete your Company profile.</p>
          </div>
          <div className='progress-bar-box'>
            <div className="progress-bar-pro" style={{ display: 'flex', justifyContent: 'center' , alignItems: 'center'}}>
              <CircularProgressbar
                value={getProgress()}
                text={`${Math.round(getProgress())}%`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: '#652669',
                  textColor: '#652669',
                  trailColor: '#d6d6d6',
                  strokeLinecap: 'round',
                })}
              />
            </div>
          </div>
        </div>

        {/* Responsive Tabs with Scroll */}
        <div className='tabs-scroll-wrapper '>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k || 'step1')}
            className='tabs-nav-box flex-nowrap overflow-auto d-flex gap-0'
            justify
          >
            {tabOrder.map((tabKey, index) => (
              <Tab
                key={tabKey}
                eventKey={tabKey}
                title={
                  <span
                    className={
                      tabOrder.indexOf(key) > index
                        ? 'text-muted previous-selected justify-content-center d-flex align-items-center gap-1'
                        : 'd-flex align-items-center justify-content-center gap-1'
                    }
                  >
                    {tabOrder.indexOf(key) > index && (
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="8" r="8" fill="#20A66A" />
                        <path
                          d="M5.5 8L7.5 10L11 6.5"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    {tabKey === 'step1' && 'Complete Profile'}
                    {tabKey === 'step2' && 'Company Documents'}
                    {tabKey === 'step3' && 'Contact Person Details'}
                    {tabKey === 'step4' && 'Payout Details'}
                    {tabKey === 'step5' && 'Policies'}
                  </span>
                }
              >
                <div className="tab-content-wrapper mt-4">
                  {tabKey === 'step1' && (
                    <CompleteProfile nextStep={() => setKey(getNextTab())} />
                  )}
                  {tabKey === 'step2' && (
                    <CompanyDocuments nextStep={() => setKey(getNextTab())} />
                  )}
                  {tabKey === 'step3' && (
                    <ContactPersonDetails nextStep={() => setKey(getNextTab())} />
                  )}
                  {tabKey === 'step4' && (
                    <PayoutDetails nextStep={() => setKey(getNextTab())} />
                  )}
                  {tabKey === 'step5' && (
                    <Policies handleFinalSubmit={handleFinalSubmit} />
                  )}
                  
              <div className="skip-btn">
                <Button onClick={() => setKey(getNextTab())} className='btn-skip-btn'>
                  Skip for now
                </Button>
              </div>


                  {/* <div className="text-end mt-3">
                    <Button onClick={() => setKey(getNextTab())} className='btn btn-link'>
                      Skip for now
                    </Button>
                  </div> */}
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>

        {/* Footer */}
        <div className='mt-auto text-center pt-4'>
          <p>© 2024, SQUCH - Control Panel. All rights reserved.</p>
        </div>

        {/* Confirm Modal */}
        <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered className='modal-vendore'>
          <Modal.Header>
            <Button variant="close-btn" onClick={() => setShowConfirm(false)}>
              <Image src={CloseModal} alt="Close" />
            </Button>
          </Modal.Header>
          <Modal.Body>
              {/* <div className='modal-heading'>
                  <Modal.Title></Modal.Title>
              </div> */}
              <div className='modal-details-box'>
                <CircularProgressBar />
                <h4 className='text-center'> Profile Has been Updated Successfully</h4>
              </div>
           </Modal.Body>
          <Modal.Footer>
            {/* <Button variant="secondary" onClick={() => setShowConfirm(false)}>
              Cancel
            </Button> */}
            {/* <Link href=""  className='btn btn-secondary text-decoration-none' onClick={handleConfirm}> */}
            <Link href=""  className='btn btn-secondary btn-next-box text-decoration-none'>
              Go to Dashboard
            </Link>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Home;
