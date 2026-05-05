import { useState } from 'react'
import './App.css'

const destinations = [
  {
    name: 'Maldives',
    emoji: '🏝️',
    type: 'Beach Holiday',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80',
    description: 'Clear water, white sand, and peaceful island resorts.',
  },
  {
    name: 'Paris',
    emoji: '🗼',
    type: 'City Tour',
    budget: 'Medium',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    description: 'Famous for food, culture, museums, and sightseeing.',
  },
  {
    name: 'Dubai',
    emoji: '🌆',
    type: 'Luxury Travel',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern buildings, shopping, and desert adventure.',
  },
  {
    name: 'Goa',
    emoji: '🌊',
    type: 'Beach Holiday',
    budget: 'Low',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    description: 'Relaxed beaches, fun nightlife, and local seafood.',
  },
  {
    name: 'Kerala',
    emoji: '🚤',
    type: 'Nature Tour',
    budget: 'Low',
    image: 'https://images.unsplash.com/photo-1516690554209-5bc53b1b25bf?auto=format&fit=crop&w=1200&q=80',
    description: 'Backwaters, greenery, and calm hill stations.',
  },
  {
    name: 'London',
    emoji: '🎡',
    type: 'City Tour',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    description: 'Historic landmarks, museums, and famous city views.',
  },
  {
    name: 'Singapore',
    emoji: '🌇',
    type: 'City Tour',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    description: 'Modern skyline, clean streets, and family attractions.',
  },
  {
    name: 'Thailand',
    emoji: '🛕',
    type: 'Beach Holiday',
    budget: 'Medium',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1200&q=80',
    description: 'Beautiful islands, temples, street food, and nightlife.',
  },
  {
    name: 'Switzerland',
    emoji: '🏔️',
    type: 'Nature Tour',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1527668752968-14dc70a27c95?auto=format&fit=crop&w=1200&q=80',
    description: 'Snowy mountains, lakes, and scenic train rides.',
  },
  {
    name: 'Japan',
    emoji: '🗾',
    type: 'City Tour',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=1200&q=80',
    description: 'Cherry blossoms, culture, technology, and delicious food.',
  },
  {
    name: 'Bali',
    emoji: '🌺',
    type: 'Beach Holiday',
    budget: 'Medium',
    image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
    description: 'Tropical beaches, temples, and relaxing resorts.',
  },
  {
    name: 'New York',
    emoji: '🗽',
    type: 'City Tour',
    budget: 'High',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1200&q=80',
    description: 'Famous skyline, shopping, shows, and city energy.',
  },
  {
    name: 'Philippines',
    emoji: '🏝️',
    type: 'Beach Holiday',
    budget: 'Medium',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80',
    description: 'Tropical islands, clear water, and beautiful coastal views.',
  },
]

const tripTypes = ['All', 'Beach Holiday', 'City Tour', 'Luxury Travel', 'Nature Tour']

function App() {
  const [formData, setFormData] = useState({
    name: '',
    destination: '',
    date: '',
  })
  const [searchText, setSearchText] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [message, setMessage] = useState('')
  const [bookings, setBookings] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.destination || !formData.date) {
      setMessage('Please fill all fields before booking.')
      return
    }

    const newBooking = {
      id: Date.now(),
      name: formData.name,
      destination: formData.destination,
      date: formData.date,
    }

    setBookings([...bookings, newBooking])
    setMessage('Booking saved successfully.')
    setFormData({ name: '', destination: '', date: '' })
  }

  const handleDelete = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id))
    setMessage('Booking removed successfully.')
  }

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.name.toLowerCase().includes(searchText.toLowerCase())
    const matchesType = selectedType === 'All' || destination.type === selectedType
    return matchesSearch && matchesType
  })

  return (
    <div className="page">
      {/* Header section: holds the top navigation and hero message. */}
      <header className="hero-section">
        {/* Navigation bar: site brand and quick jump links. */}
        <nav className="topbar">
          <div className="brand">TravelVista</div>
          <div className="top-links">
            {/* Anchor links: jump to page sections. */}
            <a href="#destinations">Destinations</a>
            <a href="#bookings">Bookings</a>
          </div>
        </nav>
        <p className="tag">Travel & Tourism Capstone</p>
        <h1>Plan your next memorable trip</h1>
        <p className="hero-text">
          A simple travel project with cleaner design, search, filters, and easy booking
          management built using basic React code.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#destinations">Explore Places</a>
          <a className="secondary-link" href="#bookings">View Bookings</a>
        </div>
      </header>

      {/* Main content: all interactive sections of the app. */}
      <main className="content">
        {/* Stats row: quick summary cards. */}
        <section className="stats-row">
          <div className="stat-card">
            <strong>{destinations.length}</strong>
            <span>Destinations</span>
          </div>
          <div className="stat-card">
            <strong>{bookings.length}</strong>
            <span>Saved Bookings</span>
          </div>
          <div className="stat-card">
            <strong>{tripTypes.length - 1}</strong>
            <span>Trip Categories</span>
          </div>
        </section>

        {/* Destination gallery section. */}
        <section className="section" id="destinations">
          <h2>Popular Destinations</h2>
          {/* Search and filter controls for destination cards. */}
          <div className="filter-bar">
            {/* Text input: filters places by name. */}
            <input
              className="search-input"
              type="text"
              placeholder="Search a place..."
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
            {/* Button group: filters destinations by trip type. */}
            <div className="filter-buttons">
              {tripTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  className={selectedType === type ? 'filter-button active' : 'filter-button'}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          {/* Card grid: displays matching destination articles. */}
          <div className="card-grid">
            {filteredDestinations.map((destination) => (
              <article className="card" key={destination.name}>
                <img className="destination-photo" src={destination.image} alt={destination.name} />
                <div className="card-icon">{destination.emoji}</div>
                <h3>{destination.name}</h3>
                <p className="card-type">{destination.type}</p>
                <p className="budget-line">Budget: {destination.budget}</p>
                <p>{destination.description}</p>
              </article>
            ))}
          </div>
          {filteredDestinations.length === 0 && (
            <p className="empty-state">No destinations match your search.</p>
          )}
        </section>

        {/* Two-column section: information box plus booking form. */}
        <section className="section two-column">
          <div className="info-box">
            <h2>Why Travel With Us</h2>
            {/* Unordered list: key project features. */}
            <ul>
              <li>Simple booking form</li>
              <li>Basic destination cards</li>
              <li>Easy design for beginners</li>
              <li>Search and filter options</li>
              <li>Booking delete option</li>
            </ul>
          </div>

          {/* Form: collects booking details from the user. */}
          <form className="booking-form" onSubmit={handleSubmit} id="bookings">
            <h2>Book a Trip</h2>
            {/* Label + input: full name field. */}
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </label>
            {/* Label + select: destination chooser. */}
            <label>
              Destination
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Select destination</option>
                {destinations.map((destination) => (
                  <option key={destination.name} value={destination.name}>
                    {destination.name}
                  </option>
                ))}
              </select>
            </label>
            {/* Label + date input: travel date field. */}
            <label>
              Travel Date
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Submit Booking</button>
            {message && <p className="message">{message}</p>}
          </form>
        </section>

        {/* Saved bookings section: shows submitted entries. */}
        <section className="section">
          <h2>Saved Bookings</h2>
          {bookings.length === 0 ? (
            <p className="empty-state">No bookings added yet.</p>
          ) : (
            <div className="booking-list">
              {bookings.map((booking) => (
                <div className="booking-item" key={booking.id}>
                  <div>
                    <p>
                      <strong>{booking.name}</strong> booked <strong>{booking.destination}</strong>
                    </p>
                    <p>Travel Date: {booking.date}</p>
                  </div>
                  <button type="button" className="delete-button" onClick={() => handleDelete(booking.id)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer: closing project label. */}
      <footer className="footer">
        <p>Travel & Tourism Capstone Project</p>
      </footer>
    </div>
  )
}

export default App
