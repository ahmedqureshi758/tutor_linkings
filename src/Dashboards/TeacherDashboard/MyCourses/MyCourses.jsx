import React, { useState } from 'react';

function MyCourses() {
  const [requirements, setRequirements] = useState('');
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newCourse, setNewCourse] = useState({ name: '', category: '', description: '' });

  const handleSearch = () => {
    const allCourses = [
      { id: 1, name: 'React Basics', category: 'Web Development' },
      { id: 2, name: 'Advanced JavaScript', category: 'Programming' },
      { id: 3, name: 'UI/UX Design', category: 'Design' },
      { id: 4, name: 'Machine Learning', category: 'AI & Data Science' },
    ];
    
    const filteredCourses = allCourses.filter(course => 
      course.name.toLowerCase().includes(requirements.toLowerCase()) ||
      course.category.toLowerCase().includes(requirements.toLowerCase())
    );

    setCourses(filteredCourses);
  };

  const handleAddCourse = () => {
    setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
    setShowForm(false);
  };

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '900px', margin: 'auto', alignItems: 'center' }}>
        <h2 style={{ color: '#0063ff', fontSize: '24px', fontWeight: 'bold', fontFamily:'Poppins' }}>My Courses</h2>
        <button onClick={() => setShowForm(!showForm)}
          style={{ backgroundColor: '#ffcf3a', padding: '12px 20px', borderRadius: '8px', cursor: 'pointer', border: 'none', fontSize: '16px', fontWeight: 'bold', fontFamily:"Poppins" }}>
          {showForm ? 'Close Form' : 'Add Course'}
        </button>
      </div>
      {showForm && (
        <div style={{ backgroundColor: '#fff', padding: '25px', margin: '30px auto', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', maxWidth: '600px' }}>
          <h3 style={{ color: '#0063ff', marginBottom: '15px', fontFamily:'Poppins' }}>Add a New Course</h3>
          <input type="text" placeholder="Course Name" value={newCourse.name} onChange={(e) => setNewCourse({...newCourse, name: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }} />
          <input type="text" placeholder="Category" value={newCourse.category} onChange={(e) => setNewCourse({...newCourse, category: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }} />
          <textarea placeholder="Description" value={newCourse.description} onChange={(e) => setNewCourse({...newCourse, description: e.target.value})} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '6px' }} />
          <button onClick={handleAddCourse} style={{ backgroundColor: '#0063ff', color: '#fff', padding: '12px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '16px',fontFamily:'Poppins'  }}>Add Course</button>
        </div>
      )}
      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center', fontFamily : "Poppins" }}>
        <input type="text" placeholder="Enter course requirements..."  value={requirements} onChange={(e) => setRequirements(e.target.value)} style={{ width: '100%', padding: '12px', border: '2px solid #0063ff', borderRadius: '6px', marginBottom: '12px' }} />
        <button onClick={handleSearch} style={{ backgroundColor: '#ffcf3a', padding: '12px 20px', borderRadius: '6px', cursor: 'pointer', fontSize: '16px',fontFamily:'Poppins'  }}>Search</button>
      </div>
      <div style={{ maxWidth: '900px', margin: '40px auto', textAlign: 'center' }}>
        <h3 style={{ color: '#0063ff', marginBottom: '20px' , fontFamily:'Poppins' }}>Available Courses</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          {courses.length > 0 ? (
            courses.map(course => (
              <div key={course.id} style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', borderLeft: '5px solid #0063ff' }}>
                <h4 style={{ margin: '0', color: '#0063ff', fontSize: '18px', fontWeight: 'bold', fontFamily:'Poppins' }}>{course.name}</h4>
                <p style={{ margin: '5px 0', color: '#555', fontSize: '14px', fontFamily:'Poppins' }}>{course.category}</p>
                <p style={{ color: '#777', fontSize: '13px' , fontFamily:'Poppins' }}>{course.description}</p>
              </div>
            ))
          ) : (
            <p style={{ color: '#888', fontSize: '16px' , fontFamily:'Poppins' }}>No courses found. Try a different search.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
