import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="student-table-wrapper">
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p className="no-students">No students added yet.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <StudentRow
                key={student.id}
                student={student}
                onUpdateScore={onUpdateScore}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default StudentTable
