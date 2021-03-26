import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from "react-router-dom";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import {createBooking} from '../../slices/user'
import {getReferences} from '../../selectors/Basket'
import { getUserAdress,getAnswerApi } from '../../selectors/User'

export default function Appointment() {
  const dispatch = useDispatch()
  const references = useSelector(getReferences)
  const adress = useSelector(getUserAdress)
  const answerApi = useSelector(getAnswerApi)


  const handleSubmit = (startDate) => {
   dispatch(createBooking(references, startDate.toISOString(), adress))
  }
  
  const [startDate, setStartDate] = useState(null);
   
    const filterPassedTime = time => {
      const currentDate = new Date();
      const selectedDate = new Date(time);
      const selectedHour = selectedDate.getHours();
      return currentDate.getTime() < selectedDate.getTime() && selectedHour >=7 && selectedHour <= 22;
    }

    if (answerApi && answerApi.success) {
     return  <Redirect to="/confirmation" />
    }
    
    return (
      <>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          showTimeSelect
          filterTime={filterPassedTime}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <button onClick={() => handleSubmit(startDate)}>Valider ce rendez-vous</button>
      </>
    );
  };

