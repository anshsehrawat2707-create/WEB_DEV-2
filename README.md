# Student Report Card Application

A React-based student scoreboard application that allows users to view, manage, and track student scores with pass/fail status indicators.

## ✨ Features

- 📊 **View Students**: Display a list of students with their names and scores in a table format
- ✏️ **Update Scores**: Dynamically update student scores using inline editing
- ➕ **Add Students**: Add new students to the list using a form
- ✅ **Pass/Fail Status**: Automatic status display based on marks (Pass ≥ 40, Fail < 40)
- 🎨 **Conditional Styling**: Color-coded status indicators (Green for Pass, Red for Fail)
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

- **React 18.2** - UI library with functional components
- **Vite 4.3** - Build tool and dev server
- **JavaScript (JSX)** - Component logic
- **CSS** - Pure CSS styling (no Tailwind)

## 📁 Project Structure

```
student_report_card/
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Application header
│   │   ├── Header.css
│   │   ├── StudentTable.jsx           # Main student table display
│   │   ├── StudentTable.css
│   │   ├── StudentRow.jsx             # Individual student row (reusable)
│   │   ├── StudentRow.css
│   │   ├── AddStudentForm.jsx         # Form to add new students
│   │   └── AddStudentForm.css
│   ├── App.jsx                        # Main app component (state management)
│   ├── App.css
│   ├── main.jsx                       # React root entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
├── package.json                       # Project dependencies
└── .gitignore                         # Git ignore rules
```

## 🚀 Getting Started

### Installation

1. Navigate to the project directory:
   ```bash
   cd student_report_card
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will open automatically at `http://localhost:5173/`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 🧩 Component Architecture

### App Component
- **Role**: Main container and state management
- **State**: Manages the students array
- **Functions**: 
  - `handleAddStudent()` - Adds new students to the list
  - `handleUpdateScore()` - Updates existing student scores

### Header Component
- **Role**: Displays application title
- **Props**: None
- **Display**: Application name and subtitle

### StudentTable Component
- **Role**: Displays all students in table format
- **Props**: 
  - `students` - Array of student objects
  - `onUpdateScore` - Callback function to update scores
- **Display**: Renders StudentRow components for each student

### StudentRow Component
- **Role**: Displays individual student data (reusable)
- **Props**: 
  - `student` - Single student object
  - `onUpdateScore` - Callback function to update score
- **Features**:
  - Inline score editing
  - Pass/Fail status badge
  - Edit/Save/Cancel buttons

### AddStudentForm Component
- **Role**: Form for adding new students
- **Props**: 
  - `onAddStudent` - Callback function to add student
- **Features**:
  - Input validation
  - Error messages
  - Form reset after submission
  - Score range validation (0-100)

## 📊 Data Structure

Each student object has the following structure:
```javascript
{
  id: number,
  name: string,
  score: number (0-100)
}
```

Pass/Fail Criteria:
- **Pass**: Score ≥ 40 (Green color)
- **Fail**: Score < 40 (Red color)

## 🎨 Styling Features

- Modern gradient background (purple theme)
- Responsive grid layout
- Color-coded status badges
- Smooth transitions and hover effects
- Mobile-friendly design with media queries
- Accessible form inputs with validation feedback

## 📝 Example Usage

The application comes pre-loaded with sample students:
- John Doe (85) - Pass
- Jane Smith (92) - Pass
- Michael Johnson (35) - Fail
- Emily Davis (78) - Pass
- David Wilson (25) - Fail

You can:
1. Click "Edit" to modify a student's score
2. Use the form on the left to add new students
3. View real-time pass/fail status updates

## ✅ Requirements Met

- ✅ React app with Vite setup
- ✅ Functional components only
- ✅ Header component
- ✅ StudentTable component
- ✅ StudentRow reusable component
- ✅ AddStudentForm component
- ✅ State management with useState
- ✅ Props passing between components
- ✅ Display students in table format
- ✅ Update scores dynamically
- ✅ Add new students via form
- ✅ Pass/Fail status based on marks (≥40 = Pass)
- ✅ Conditional rendering with color coding
- ✅ Pure CSS styling

## 📱 Responsive Breakpoints

- Desktop: Grid layout with form on left, table on right
- Tablet/Mobile: Stacked layout with table above form
- Breakpoint: 768px

## 🎯 Future Enhancements

- Delete student functionality
- Sort students by name or score
- Search/filter students
- CSV export functionality
- Grade letter assignment (A, B, C, etc.)
- Student performance statistics
- Local storage persistence
