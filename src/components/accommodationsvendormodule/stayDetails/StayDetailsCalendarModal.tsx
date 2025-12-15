"use client";

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Image from "next/image";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";
import CloseModal from "../../../../public/images/close-modal.png";
import MeetingMan from "../../../../public/images/meedint-girl.png"

const StayDetailsCalendarModal = ({ show, handleClose }: any) => {
  const [events, setEvents] = useState([
    {
      title: "George S. Duckett",
      start: "2025-11-06",
      end: "2025-11-08",
      extendedProps: {
        image: MeetingMan, 
        nights: "1 Night",
        guests: "2 Guests",
        enhancements: "5 Enhancements",
      },
    },
    {
      title: "George S. Duckett",
      start: "2025-11-24",
      end: "2025-11-26",
      extendedProps: {
        image: MeetingMan, 
        nights: "1 Night",
        guests: "2 Guests",
        enhancements: "5 Enhancements",
      },
    },
    {
      title: "Conference",
      date: "2025-11-12",
      extendedProps: {
        image: MeetingMan, 
        nights: "2 Nights",
        guests: "4 Guests",
      },
    },
    {
      title: "Conference",
      start: "2025-11-21",
      end: "2025-11-26",
      extendedProps: {
        image: MeetingMan, 
        nights: "2 Nights",
        guests: "4 Guests",
      },
    },
  ]);

  const renderEventContent = (eventInfo) => {
    const { image, nights, guests, enhancements } = eventInfo.event.extendedProps;

    return (
      <div className="calendar-box-meeting">
        <div className="relative calendar-img-box">
          <Image src={image} alt={eventInfo.event.title} className="object-cover"/>
        </div>
        <div className="text-box-calendar">
          <h6>{eventInfo.event.title}</h6>
          <div className="text-sub">{nights}, {guests} {enhancements}</div>
        </div>
      </div>
    );
  };


  return (
    <Modal show={show} onHide={handleClose} centered className="common-modal-sec pt-4 modal-full-calendar-modal">
      <Modal.Header>
        <Button variant="close-btn" onClick={handleClose}>
          <Image src={CloseModal} alt="close" />
        </Button>
      </Modal.Header>

      <Modal.Body className="common-modal-body">
        <div className="calendar-wrapper">
          <FullCalendar
  plugins={[dayGridPlugin, interactionPlugin]}
  initialView="dayGridMonth"
  events={events}
  eventContent={renderEventContent}
  height="auto"
  dayCellDidMount={(info) => {
    const cellDate = new Date(info.date);
    cellDate.setHours(0, 0, 0, 0);

    const hasEvent = events.some((event) => {
      const start = new Date(event.start || event.date);
      const end = new Date(event.end || event.start || event.date);

      start.setHours(0, 0, 0, 0);
      end.setHours(0, 0, 0, 0);

      if (event.end && end > start) {
      }

      return cellDate >= start && cellDate <= end;
    });

    if (hasEvent) {
      const td = info.el.closest(".fc-daygrid-day");
      if (td && !td.classList.contains("has-event-day")) {
        td.classList.add("has-event-day");
      }
    }
  }}
/>



        </div>
      </Modal.Body>

      <Modal.Footer className="footer-step-form modal-footer-box d-flex align-items-center gap-3 justify-content-end mt-0">
        <Link href="" className="btn btn-grey" onClick={handleClose}>
          Close
        </Link>
        <button className="btn btn-secondary">Set Icon</button>
      </Modal.Footer>

      
    </Modal>
  );
};

export default StayDetailsCalendarModal;



