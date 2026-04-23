import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', score: 22 },
    { id: 2, name: 'Jane Smith', score: 69 },
  ])

  const handleAddStudent = (newStudent) => {
    const student = {
      id: Math.max(...students.map(s => s.id), 0) + 1,
      name: newStudent.name,
      score: parseInt(newStudent.score)
    }
    setStudents([...students, student])
  }

  const handleUpdateScore = (id, newScore) => {
    setStudents(students.map(student =>
      student.id === id ? { ...student, score: parseInt(newScore) } : student
    ))
  }

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="form-section">
            <h2>Add New Student</h2>
            <AddStudentForm onAddStudent={handleAddStudent} />
          </div>
          <div className="table-section">
            <StudentTable 
              students={students} 
              onUpdateScore={handleUpdateScore}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
