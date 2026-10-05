import { Link } from "react-router-dom";

function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h2>{doctor.name}</h2>

      <p>Specialization: {doctor.specialization}</p>

      <p>Experience: {doctor.experience}</p>

      <p>Consultation Fee: ₹{doctor.fee}</p>

      <Link
        className="btn"
        to={`/appointment/${doctor.id}`}
      >
        Book Appointment
      </Link>
    </div>
  );
}

export default DoctorCard;