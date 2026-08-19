// Ambil data courses
fetch('data/courses.json')
  .then(res => res.json())
  .then(courses => {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
      courseList.innerHTML += `
        <div class="course-card">
          <img src="${course.thumbnail}" alt="${course.title}">
          <h3>${course.title}</h3>
          <p>${course.description}</p>
          <a href="course.html?id=${course.id}">Buka Course</a>
        </div>
      `;
    });
  });

// Ambil pengumuman
fetch('data/announcements.json')
  .then(res => res.json())
  .then(announcements => {
    const list = document.getElementById('announcement-list');
    announcements.forEach(a => {
      list.innerHTML += `
        <div class="announcement">
          <h4>${a.title} <small>(${a.date})</small></h4>
          <p>${a.content}</p>
        </div>
      `;
    });
  });
