import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import Grid from '@mui/material/Unstable_Grid2';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { formatDate } from '@fullcalendar/core';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import axios from 'axios';
import { addCalenderEvent, getCalenderEventByUserId } from '../../../Network/Api';

const Calendar = () => {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleAddEvent = async (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
    if (title) {
      try {
        const newCalender = {
          title,
          start: selected.startStr,
          end: selected.endStr,
          allDay: selected.allDay,
        }
        const createdEvent = await addCalenderEvent(newCalender);
        const newEvent = createdEvent.savedEvent;
        setCurrentEvents(prevEvents => [...prevEvents, newEvent]);
        calendarApi.addEvent({
          id: newEvent._id,
          userId: newEvent?.userId,
          title: newEvent.title,
          start: newEvent.start,
          end: newEvent.end,
          allDay: newEvent.allDay,
        });
      } catch (error) {
        console.error('Error creating event:', error);
      }
    }
  };

  const handleEventDelete = async (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      try {
        await axios.delete(`http://localhost:5000/api/calender/events/${selected.event.id}`);
        selected.event.remove();
        setCurrentEvents(prevEvents => prevEvents.filter(event => event._id !== selected.event.id));
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    }
  };

  useEffect(() => {
    const UserID = JSON.parse(localStorage.getItem('authId'));
    const getCalenderEvents = async () => {
      try {
        const data = await getCalenderEventByUserId(UserID);
        setCurrentEvents(data);
      } catch (err) {
        console.log('err', err);
      }
    };

    getCalenderEvents();
  }, []);

  return (
    <Box m="20px">
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <Box p="15px" borderRadius="4px">
            <Typography variant="h5">Events</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event._id}
                  sx={{
                    margin: '10px 0',
                    borderRadius: '2px',
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid xs={12} md={8}>
          <Box ml="15px">
            <FullCalendar
              height="75vh"
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
              }}
              initialView="dayGridMonth"
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleAddEvent}
              eventClick={handleEventDelete}
              initialEvents={currentEvents}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Calendar;

