import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../utils";


const Calendar = () => {
  const [event, setEvent] = useState([]);

  const handleDate = (Info) => {
    let title = prompt("Please Enter a New Title");
    let calendarApi = Info.view.calendar;

    calendarApi.unselect();
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: Info.startStr,
        end: Info.endStr,
        allDay: Info.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    const userConfirmed = window.confirm(
      `Are you want to delete the item '${clickInfo.event.title}'?`
    );

    if (userConfirmed) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setEvent(events);
  };

  const renderEventContent = (eventInfo) => {
    return (
      <div>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    );
  };


  return (
    <div className="w-10/12">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        headerToolbar={
          {
            start:"today prev,next",
            center:"title",
            end:"dayGridMonth,timeGridWeek,timeGridDay"
          }
        }
        editable ={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        initialEvents={INITIAL_EVENTS}
        select={handleDate}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
        eventsSet={handleEvents}

      />
    </div>
  );
};

export default Calendar;
