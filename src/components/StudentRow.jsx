import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, onUpdateScore }) {
  const [score, setScore] = useState(student.score)
  const [isEditing, setIsEditing] = useState(false)

  const isPass = score >= 40
  const statusClass = isPass ? 'pass' : 'fail'
  const statusText = isPass ? 'Pass' : 'Fail'

  const handleUpdate = () => {
    onUpdateScore(student.id, score)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setScore(student.score)
    setIsEditing(false)
  }

  const handleScoreChange = (e) => {
    const value = e.target.value
    if (value === '' || (parseInt(value) >= 0 && parseInt(value) <= 100)) {
      setScore(value === '' ? '' : parseInt(value))
    }
  }

  return (
    <tr className={`student-row ${statusClass}`}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>
        {isEditing ? (
          <input
            type="number"
            min="0"
            max="100"
            value={score}
            onChange={handleScoreChange}
            className="score-input"
            autoFocus
          />
        ) : (
          <span className="score-display">{score}</span>
        )}
      </td>
      <td>
        <span className={`status-badge ${statusClass}`}>
          {statusText}
        </span>
      </td>
      <td>
        {isEditing ? (
          <div className="action-buttons">
            <button
              className="btn btn-save"
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              className="btn btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="btn btn-edit"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  )
}

export default StudentRow
