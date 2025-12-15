import { useState } from 'react';
import { Tabs, Tab, Button } from 'react-bootstrap';
import PropertyDetails from './PropertyDetails';
import AddEnhancements from './AddEnhancements';
import HostDetails from './HostDetails';
import NearbyLandmark from './NearbyLandmark';


const AddingProperties = () => {
    const [key, setKey] = useState('DatePlace');
    const [visitedTabs, setVisitedTabs] = useState(['DatePlace']);
  
    const tabOrder = ['DatePlace', 'GuestDetails', 'Enhancements', 'SummeryNew'];
  
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
        <span className={`tab-title d-flex align-items-center justify-content-center gap-lg-2 gap-1 flex-row-reverse ${isVisited ? 'selected' : ''}`}>
          {label}
          {isVisited && (
            <span className="check-icon d-block">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="8" fill="#20A66A" />
                <path d="M5.5 8L7.5 10L11 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          )}
        </span>
      );
    };
  
    const renderFooterButtons = (isLastTab = false) => {
      return (
        <div className="footer-step-form d-flex justify-content-end gap-3">
          <Button variant="outline-secondary btn-skip-btn btn btn-primary btn btn-primary position-static" onClick={handleNext}>
            {isLastTab ? 'Save for Later' : 'Skip for Now'}
          </Button>
          <Button className="btn btn-secondary" onClick={handleNext}>
            {isLastTab ? 'Save & Next' : 'Save & Next'}
          </Button>
        </div>
      );
    };
  
    return (
      <div className="create-booking-tabs-sec">
        <Tabs activeKey={key} onSelect={handleTabSelect} className="tabs-nav-box flex-nowrap overflow-auto d-flex gap-0">
          <Tab eventKey="DatePlace" title={renderTitle('DatePlace', 'Property Details')}>
            <div className="card-box tabs-booking">
              <div className="inner-tabs-booking-box">
                    <PropertyDetails />
              </div>
              {renderFooterButtons()}
            </div>
          </Tab>
  
          <Tab eventKey="GuestDetails" title={renderTitle('GuestDetails', 'Add Enhancements')}>
            <div className=" tabs-booking">
              <div className="inner-tabs-booking-box">
                <AddEnhancements />
              </div>
              {renderFooterButtons()}
            </div>
          </Tab>
  
          <Tab eventKey="Enhancements" title={renderTitle('Enhancements', 'Nearby Attractions/Landmark')}>
            <div className="card-box tabs-booking">
              <div className="inner-tabs-booking-box">
                <NearbyLandmark />
              </div>
              {renderFooterButtons()}
            </div>
          </Tab>
  
          <Tab eventKey="SummeryNew" title={renderTitle('SummeryNew', 'Host Details')}>
              <div className="card-box tabs-booking">
                  <div className="inner-tabs-booking-box">
                    <HostDetails />
                  </div>
                  {renderFooterButtons(true)} {/* <- this triggers the two last-tab buttons */}
              </div>
              </Tab>
        </Tabs>
      </div>
  )
}

export default AddingProperties