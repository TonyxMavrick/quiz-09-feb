// Result page JavaScript

let resultData = null;

// Load result data
function loadResultData() {
  const data = localStorage.getItem('quizResult');
  
  if (!data) {
    window.location.href = 'index.html';
    return;
  }
  
  resultData = JSON.parse(data);
  displayResults();
}

// Get performance message based on percentage
function getPerformanceMessage(percentage) {
  if (percentage >= 90) {
    return {
      title: 'Outstanding! 🎉',
      message: "You're a true expert!",
      gradient: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)'
    };
  } else if (percentage >= 70) {
    return {
      title: 'Great Job! 👏',
      message: 'You did really well!',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
    };
  } else if (percentage >= 50) {
    return {
      title: 'Good Effort! 💪',
      message: 'Keep practicing!',
      gradient: 'linear-gradient(135deg, #eab308 0%, #f97316 100%)'
    };
  } else {
    return {
      title: 'Keep Trying! 📚',
      message: 'Practice makes perfect!',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)'
    };
  }
}

// Display results
function displayResults() {
  if (!resultData) return;
  
  const percentage = Math.round((resultData.score / resultData.totalQuestions) * 100);
  const performance = getPerformanceMessage(percentage);
  
  // Update title
  document.title = `${percentage}% - ${resultData.quizTitle} Results - Online Quiz`;
  
  // Performance icon and title
  const performanceIcon = document.getElementById('performance-icon');
  performanceIcon.style.background = performance.gradient;
  performanceIcon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>
  `;
  
  document.getElementById('performance-title').textContent = performance.title;
  document.getElementById('performance-message').textContent = performance.message;
  document.getElementById('score-percentage').textContent = `${percentage}%`;
  
  // Stats
  document.getElementById('total-questions').textContent = resultData.totalQuestions;
  document.getElementById('correct-answers').textContent = resultData.score;
  document.getElementById('incorrect-answers').textContent = resultData.totalQuestions - resultData.score;
  
  // Retry button
  document.getElementById('retry-btn').href = `quiz.html?id=${resultData.quizId}`;
  
  // Summary list
  const summaryList = document.getElementById('summary-list');
  summaryList.innerHTML = resultData.answers.map((isCorrect, index) => `
    <div class="summary-item ${isCorrect ? 'correct' : 'incorrect'}">
      ${isCorrect ? `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-green-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      ` : `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-red-600)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
      `}
      <span class="summary-text" style="font-weight: 600;">Question ${index + 1}</span>
    </div>
  `).join('');
}

// Share score
function shareScore() {
  if (!resultData) return;
  
  const percentage = Math.round((resultData.score / resultData.totalQuestions) * 100);
  const text = `I scored ${resultData.score}/${resultData.totalQuestions} (${percentage}%) on "${resultData.quizTitle}" at Online Quiz! Can you beat my score?`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Online Quiz - My Score',
      text: text,
      url: window.location.origin
    }).catch(() => {
      // Fallback to clipboard
      copyToClipboard(text);
    });
  } else {
    copyToClipboard(text);
  }
}

// Copy to clipboard
function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Score copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

// Fallback copy method
function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    alert('Score copied to clipboard!');
  } catch (err) {
    alert('Failed to copy to clipboard');
  }
  document.body.removeChild(textArea);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadResultData();
  
  document.getElementById('share-btn').addEventListener('click', shareScore);
});
