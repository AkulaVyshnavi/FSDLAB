import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Appointment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function bookAppointment(e) {
    e.preventDefault();

    if (!name || !phone || !date || !time) {
      alert("Please fill all fields");
      return;
    }

    const appointment = {
      doctorId: id,
      patientName: name,
      phone: phone,
      date: date,
      time: time
    };

    const appointments =
      JSON.parse(localStorage.getItem("appointments")) || [];

    appointments.push(appointment);

    localStorage.setItem(
      "appointments",
      JSON.stringify(appointments)
    );

    alert("Appointment booked successfully!");

    navigate("/appointments");
  }

  return (
    <section className="form-container">
      <h1>Book Appointment</h1>

      <form onSubmit={bookAppointment}>
        <label>Patient Name</label>

        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Phone Number</label>

        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />

        <label>Appointment Date</label>

        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />

        <label>Appointment Time</label>

        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />

        <button type="submit">
          Confirm Appointment
        </button>
      </form>
    </section>
  );
}

export default Appointment;