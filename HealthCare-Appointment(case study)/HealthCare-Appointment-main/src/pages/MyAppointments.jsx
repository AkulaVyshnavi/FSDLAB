import { useEffect, useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("appointments")) || [];

    setAppointments(data);
  }, []);

  return (
    <section className="page">
      <h1>My Appointments</h1>

      {appointments.length === 0 ? (
        <p>No appointments booked yet.</p>
      ) : (
        appointments.map((appointment, index) => (
          <div className="appointment" key={index}>
            <h3>Appointment {index + 1}</h3>

            <p>
              <b>Patient:</b> {appointment.patientName}
            </p>

            <p>
              <b>Phone:</b> {appointment.phone}
            </p>

            <p>
              <b>Date:</b> {appointment.date}
            </p>

            <p>
              <b>Time:</b> {appointment.time}
            </p>
          </div>
        ))
      )}
    </section>
  );
}

export default MyAppointments;