function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Appointment Request Sent!");
  };

  return (
    <section id="contact" className="contact fade-in">
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <input type="text" placeholder="Your Name" required />

        <input type="email" placeholder="Your Email" required />

        <input type="text" placeholder="Preferred Service" required />

        <textarea placeholder="Message"></textarea>

        <button type="submit">
          Send Booking Request
        </button>

      </form>
    </section>
  );
}

export default Contact;