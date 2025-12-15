import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import DatePlace from './DatePlace';
import GuestDetails from './GuestDetails';
import Payment from './Payment';
import Enhancements from './Enhancements';
import Summery from './Summery';

const BookingsTabs = () => {const [key, setKey] = useState('DatePlace');
    const [visitedTabs, setVisitedTabs] = useState(['DatePlace']);
  
    const tabOrder = ['DatePlace', 'GuestDetails', 'Enhancements', 'Summery', 'Payment'];
  
    const updateVisitedTabs = (selectedKey) => {
      const selectedIndex = tabOrder.indexOf(selectedKey);
      const newVisited = tabOrder.slice(0, selectedIndex + 1);
      setVisitedTabs(newVisited);
    };
  
    const handleNext = () => {
      const currentIndex = tabOrder.indexOf(key);
      if (currentIndex < tabOrder.length - 1) {
        const nextKey = tabOrder[currentIndex + 1];
        setKey(nextKey);
        updateVisitedTabs(nextKey);
      }
    };
  
    const handleTabSelect = (selectedKey) => {
      setKey(selectedKey);
      updateVisitedTabs(selectedKey);
    };
  
    const renderTitle = (eventKey, label) => {
      const isVisited = visitedTabs.includes(eventKey);
      return (
        <span className={`tab-title d-flex align-items-center justify-content-center gap-lg-2 gap-1 flex-row-reverse ${isVisited ? 'selected' : ''}`}>{label} {isVisited && ( 
            <span className="check-icon d-block">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#20A66A" /><path d="M5.5 8L7.5 10L11 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          )}
        </span>
      );
    };
  
    return (
      <div className="create-booking-tabs-sec">
        <Tabs
          activeKey={key}
          onSelect={handleTabSelect}
          className="tabs-nav-box flex-nowrap overflow-auto d-flex gap-0"
        >
          <Tab eventKey="DatePlace" title={renderTitle('DatePlace', 'Date & Place')}>
            <div className="card-box tabs-booking">
              <div className="inner-tabs-booking-box">
                <DatePlace />
              </div>
              <div className="footer-step-form d-flex justify-content-end">
                <Button className="btn btn-secondary" onClick={handleNext}>
                  Save & Next
                </Button>
              </div>
            </div>
          </Tab>
  
          <Tab eventKey="GuestDetails" title={renderTitle('GuestDetails', 'Guest Information')}>
            <div className="card-box tabs-booking">
              <div className="inner-tabs-booking-box">
                  <GuestDetails />
              </div>
              <div className="footer-step-form d-flex justify-content-end">
                <Button className="btn btn-secondary" onClick={handleNext}>
                Save & Next
                </Button>
              </div>
            </div>
          </Tab>
  
          <Tab eventKey="Enhancements" title={renderTitle('Enhancements', 'Enhancements')}>
            <div className="card-box tabs-booking">
              <div className="inner-tabs-booking-box">
                    <Enhancements />
              </div>
              <div className="footer-step-form d-flex justify-content-end">
                <Button className="btn btn-secondary" onClick={handleNext}>
                Save & Next
                </Button>
              </div>
            </div>
          </Tab>
  
          <Tab eventKey="Summery" title={renderTitle('Summery', 'Summery')}>
              <div className="card-box tabs-booking">
                  <div className="inner-tabs-booking-box">
                      <Summery />
                  </div>
                  <div className="footer-step-form d-flex justify-content-end">
                      <Button className="btn btn-secondary" onClick={handleNext}>
                      Save & Next
                      </Button>
                  </div>
              </div>
          </Tab>
  
            <Tab eventKey="Payment" title={renderTitle('Payment', 'Payment')}>
                <div className="card-box tabs-booking">
                    <div className="inner-tabs-booking-box">
                        <Payment />
                    </div>
                    <div className="footer-step-form d-flex justify-content-end">
                        <Button className="btn btn-secondary" onClick={handleNext}>
                            Send Payment link
                        </Button>
                    </div>
                </div>
            </Tab>

        </Tabs>
      </div>
  )
}

export default BookingsTabs