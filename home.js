// Home page JavaScript

const categoryIcons = {
  'brain': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></svg>',
  'microscope': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>',
  'landmark': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"></line><line x1="6" y1="18" x2="6" y2="11"></line><line x1="10" y1="18" x2="10" y2="11"></line><line x1="14" y1="18" x2="14" y2="11"></line><line x1="18" y1="18" x2="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>',
  'trophy': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>',
  'film': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>',
  'laptop': '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="16" rx="2" ry="2"></rect><path d="M2 18h20"></path></svg>'
};

// Render categories
function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  
  grid.innerHTML = quizData.categories.map(category => `
    <a href="quiz.html?id=${quizData.quizzes.find(q => q.category === category.id)?.id || 'general-1'}" class="category-card">
      <div class="category-icon" style="background: ${category.gradient};">
        ${categoryIcons[category.icon] || ''}
      </div>
      <h3 class="category-title">${category.name}</h3>
      <p class="category-description">Explore amazing quizzes</p>
      <div class="category-link-text">
        Play Quiz 
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </div>
    </a>
  `).join('');
}

// Render featured quizzes
function renderFeaturedQuizzes() {
  const container = document.getElementById('featured-quizzes');
  if (!container) return;
  
  const featured = getFeaturedQuizzes();
  
  container.innerHTML = featured.map(quiz => {
    const category = getCategoryById(quiz.category);
    const difficultyClass = quiz.difficulty === 'Easy' ? 'difficulty-easy' : 
                           quiz.difficulty === 'Medium' ? 'difficulty-medium' : 
                           'difficulty-hard';
    
    return `
      <div class="quiz-card">
        <div class="quiz-header">
          <div class="quiz-icon" style="background: ${category?.gradient};">
            ${categoryIcons[category?.icon] || ''}
          </div>
          <div>
            <div class="quiz-category">${category?.name}</div>
            <span class="difficulty-badge ${difficultyClass}">${quiz.difficulty}</span>
          </div>
        </div>
        
        <h3 class="quiz-title">${quiz.title}</h3>
        <p class="quiz-description">${quiz.description}</p>
        
        <div class="quiz-meta">
          <span>${quiz.questions.length} Questions</span>
          ${quiz.timePerQuestion ? `
            <span style="display: flex; align-items: center; gap: 0.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              ${quiz.timePerQuestion}s each
            </span>
          ` : ''}
        </div>
        
        <a href="quiz.html?id=${quiz.id}" class="btn btn-primary" style="width: 100%; text-align: center; background: ${category?.gradient};">
          Start Now
        </a>
      </div>
    `;
  }).join('');
}

// Initialize home page
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  renderFeaturedQuizzes();
});
