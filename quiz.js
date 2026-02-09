// Quiz page JavaScript

let currentQuiz = null;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let isAnswered = false;
let score = 0;
let timeLeft = 30;
let timerInterval = null;
let answers = [];

// Get quiz ID from URL
function getQuizIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id') || 'general-1';
}

// Load quiz
function loadQuiz() {
  const quizId = getQuizIdFromURL();
  currentQuiz = getQuizById(quizId);
  
  if (!currentQuiz) {
    window.location.href = 'index.html';
    return;
  }
  
  document.title = `${currentQuiz.title} - Online Quiz`;
  timeLeft = currentQuiz.timePerQuestion || 30;
  
  renderQuestion();
  startTimer();
}

// Render current question
function renderQuestion() {
  if (!currentQuiz) return;
  
  const question = currentQuiz.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
  
  // Update header
  document.getElementById('quiz-title').textContent = currentQuiz.title;
  document.getElementById('quiz-progress').textContent = 
    `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
  document.getElementById('progress-fill').style.width = `${progress}%`;
  
  // Update question
  document.getElementById('question-text').textContent = question.question;
  
  // Render answers
  const answersContainer = document.getElementById('answers-container');
  answersContainer.innerHTML = question.options.map((option, index) => {
    const letter = String.fromCharCode(65 + index); // A, B, C, D
    return `
      <button class="answer-option" data-index="${index}">
        <div class="answer-content">
          <div class="answer-letter">${letter}</div>
          <span class="answer-text">${option}</span>
        </div>
        <div id="answer-icon-${index}"></div>
      </button>
    `;
  }).join('');
  
  // Add event listeners to answer options
  document.querySelectorAll('.answer-option').forEach(btn => {
    btn.addEventListener('click', () => handleAnswerSelect(parseInt(btn.dataset.index)));
  });
  
  // Hide explanation
  document.getElementById('explanation').classList.add('hidden');
  
  // Update navigation buttons
  document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
  document.getElementById('next-btn').disabled = true;
  document.getElementById('next-btn-text').textContent = 
    currentQuestionIndex === currentQuiz.questions.length - 1 ? 'Finish' : 'Next';
}

// Handle answer selection
function handleAnswerSelect(answerIndex) {
  if (isAnswered) return;
  
  const question = currentQuiz.questions[currentQuestionIndex];
  selectedAnswer = answerIndex;
  isAnswered = true;
  
  // Stop timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  // Check if correct
  const isCorrect = answerIndex === question.correctAnswer;
  if (isCorrect) {
    score++;
  }
  answers.push(isCorrect);
  
  // Update answer buttons
  const answerButtons = document.querySelectorAll('.answer-option');
  answerButtons.forEach((btn, index) => {
    btn.classList.add('disabled');
    btn.style.cursor = 'default';
    
    if (index === question.correctAnswer) {
      btn.classList.add('correct');
      document.getElementById(`answer-icon-${index}`).innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-green-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      `;
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      btn.classList.add('incorrect');
      document.getElementById(`answer-icon-${index}`).innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-red-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      `;
    }
  });
  
  // Show explanation
  if (question.explanation) {
    document.getElementById('explanation').classList.remove('hidden');
    document.getElementById('explanation-text').textContent = question.explanation;
  }
  
  // Enable next button
  document.getElementById('next-btn').disabled = false;
}

// Handle next question
function handleNext() {
  if (currentQuestionIndex < currentQuiz.questions.length - 1) {
    currentQuestionIndex++;
    selectedAnswer = null;
    isAnswered = false;
    timeLeft = currentQuiz.timePerQuestion || 30;
    
    renderQuestion();
    startTimer();
  } else {
    // Quiz complete - save results and navigate to result page
    const resultData = {
      score: score,
      totalQuestions: currentQuiz.questions.length,
      answers: answers,
      quizId: currentQuiz.id,
      quizTitle: currentQuiz.title
    };
    
    localStorage.setItem('quizResult', JSON.stringify(resultData));
    window.location.href = 'result.html';
  }
}

// Handle previous question
function handlePrevious() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    selectedAnswer = null;
    isAnswered = false;
    timeLeft = currentQuiz.timePerQuestion || 30;
    
    // Remove last answer from array
    if (answers.length > currentQuestionIndex) {
      const removedAnswer = answers.pop();
      if (removedAnswer) {
        score--;
      }
    }
    
    renderQuestion();
    startTimer();
  }
}

// Start timer
function startTimer() {
  // Clear existing timer
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  
  updateTimerDisplay();
  
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (!isAnswered) {
        // Auto-select no answer (count as incorrect)
        answers.push(false);
        handleNext();
      }
    }
  }, 1000);
}

// Update timer display
function updateTimerDisplay() {
  const timerElement = document.getElementById('timer');
  timerElement.textContent = `${timeLeft}s`;
  
  if (timeLeft <= 10) {
    timerElement.classList.add('warning');
  } else {
    timerElement.classList.remove('warning');
  }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  loadQuiz();
  
  document.getElementById('next-btn').addEventListener('click', handleNext);
  document.getElementById('prev-btn').addEventListener('click', handlePrevious);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});
