const params = new URLSearchParams(window.location.search);
const courseId = params.get('id');

fetch(`data/course-${courseId}.json`)
  .then(res => res.json())
  .then(course => {
    document.getElementById('course-detail').innerHTML = `
      <h2>${course.title}</h2>
      <p>${course.description}</p>
      <h3>Materi</h3>
      <ul>
        ${course.topics.map(topic => `
          <li>
            <h4>${topic.title}</h4>
            <p>${topic.content}</p>
            ${topic.files ? topic.files.map(f => `<a href="${f.url}" target="_blank">${f.name}</a>`).join('') : ''}
            ${topic.video_url ? `<iframe src="${topic.video_url}" width="100%" height="315" frameborder="0" allowfullscreen></iframe>` : ''}
            <a href="quiz.html?course=${course.id}">Kerjakan Kuis</a>
          </li>
        `).join('')}
      </ul>
      <a href="assignment.html?course=${course.id}">Tugas Upload</a>
    `;
  });
