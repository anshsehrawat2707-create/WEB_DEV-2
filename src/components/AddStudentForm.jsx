import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ onAddStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    score: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.score) {
      newErrors.score = 'Score is required'
    } else if (parseInt(formData.score) < 0 || parseInt(formData.score) > 100) {
      newErrors.score = 'Score must be between 0 and 100'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    onAddStudent(formData)
    setFormData({ name: '', score: '' })
    setErrors({})
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter student name"
          className={errors.name ? 'input-error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="score">Score (0-100)</label>
        <input
          type="number"
          id="score"
          name="score"
          value={formData.score}
          onChange={handleChange}
          placeholder="Enter score"
          min="0"
          max="100"
          className={errors.score ? 'input-error' : ''}
        />
        {errors.score && <span className="error-message">{errors.score}</span>}
      </div>

      <button type="submit" className="btn-submit">
        Add Student
      </button>
    </form>
  )
}

export default AddStudentForm
