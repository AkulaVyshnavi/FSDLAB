import { useState } from "react";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    name: "Dr. Ananya Rao",
    specialization: "Cardiologist",
    experience: "10 years",
    fee: 800
  },
  {
    id: 2,
    name: "Dr. Rahul Sharma",
    specialization: "Dermatologist",
    experience: "7 years",
    fee: 600
  },
  {
    id: 3,
    name: "Dr. Priya Reddy",
    specialization: "Pediatrician",
    experience: "8 years",
    fee: 700
  },
  {
    id: 4,
    name: "Dr. Arjun Kumar",
    specialization: "Neurologist",
    experience: "12 years",
    fee: 1000
  }
];

function Doctors() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    doctor =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="page">
      <h1>Find a Doctor</h1>

      <input
        className="search"
        type="text"
        placeholder="Search doctor or specialization"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="doctor-container">
        {filteredDoctors.map(doctor => (
          <div className="card" key={doctor.id}>
            <h2>{doctor.name}</h2>

            <p>
              <b>Specialization:</b> {doctor.specialization}
            </p>

            <p>
              <b>Experience:</b> {doctor.experience}
            </p>

            <p>
              <b>Consultation Fee:</b> ₹{doctor.fee}
            </p>

            <Link
              className="btn"
              to={`/appointment/${doctor.id}`}
            >
              Book Appointment
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Doctors;