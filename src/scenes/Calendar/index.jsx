import { useState } from "react";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Add a title to your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: Math.random(),
        title: title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (selected.event.allDay) {
      alert(
        `${selected.event.title} at ${formatDate(selected.event.startStr, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`
      );
    } else {
      alert(
        `${selected.event.title} at ${formatDate(selected.event.startStr, {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hourCycle: "h24",
        })}`
      );
    }
  };
  return (
    <Box
      m="20px"
      sx={{
        "& .fc-event-title": {
          fontWeight: "bold",
        },
      }}
    >
      <Header
        title="Calendar"
        subTitle="Manage all your events in once place"
      />

      <Box
        sx={{
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
        }}
        display="flex"
        justifyContent="space-between"
        gap={1}
      >
        <Box
          flex="1 1 20%"
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: "2px",
            p: 1,
          }}
        >
          <Typography variant="h5" mb={1}>
            Events
          </Typography>
          <List>
            {currentEvents.map((e) => (
              <ListItem
                key={e.title}
                sx={{ backgroundColor: colors.greenAccent[500], m: "10px 0" }}
              >
                <ListItemText
                  primary={e.title}
                  secondary={
                    <Typography>
                      {formatDate(e.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%">
          <FullCalendar
            initialView="dayGridMonth"
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={[
              {
                id: "123",
                title: "event1",
                start: "2023-12-24",
                end: "2023-12-29",
              },
              { id: "456", title: "event2", date: "2023-12-07" },
              { id: "789", title: "event3", date: "2023-12-12" },
              { id: "111213", title: "event4", date: "2023-12-16" },
              { id: "131415", title: "event5", date: "2023-12-30" },
            ]}
            eventColor="yellowgreen"
            eventTextColor="black"
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
          ></FullCalendar>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
