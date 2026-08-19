const params = new URLSearchParams(window.location.search);
const courseId = params.get('course');

fetch(`data/quiz-${courseId}.json`)
  .then(res => res.json())
  .then(quiz => {
    const container = document.getElementById('quiz-container');
    container.innerHTML = `<h2>${quiz.title}</h2>`;
    quiz.questions.forEach((q, index) => {
      container.innerHTML += `
        <div class="question">
          <p>${index+1}. ${q.question}</p>
          ${q.options.map((opt, i) => `
            <label>
              <input type="radio" name="q${index}" value="${i}"> ${opt}
            </label><br>
          `).join('')}
        </div>
      `;
    });
    // Simpan soal di variable global untuk penilaian
    window.quizData = quiz;
  });

document.getElementById('submit').addEventListener('click', () => {
  const quiz = window.quizData;
  let score = 0;
  quiz.questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) score++;
  });
  document.getElementById('result').innerHTML = `Skor Anda: ${score} / ${quiz.questions.length}`;
  // Simpan skor ke localStorage
  localStorage.setItem(`quiz-${quiz.course_id}`, score);
});
