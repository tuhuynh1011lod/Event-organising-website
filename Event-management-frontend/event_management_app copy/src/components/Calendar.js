import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'StaticDatePicker',
        ]}
      >
        <DemoItem label="Static variant">
          <StaticDatePicker defaultValue={dayjs('date')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default Calendar;
