// Quiz Data
const quizData = {
  categories: [
    {
      id: 'general',
      name: 'General Knowledge',
      icon: 'brain',
      color: 'from-purple-500 to-pink-500',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)'
    },
    {
      id: 'science',
      name: 'Science',
      icon: 'microscope',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)'
    },
    {
      id: 'history',
      name: 'History',
      icon: 'landmark',
      color: 'from-amber-500 to-orange-500',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: 'trophy',
      color: 'from-green-500 to-emerald-500',
      gradient: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)'
    },
    {
      id: 'movies',
      name: 'Movies & TV',
      icon: 'film',
      color: 'from-red-500 to-rose-500',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #f43f5e 100%)'
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: 'laptop',
      color: 'from-indigo-500 to-purple-500',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)'
    }
  ],
  
  quizzes: [
    {
      id: 'general-1',
      title: 'World Knowledge Challenge',
      category: 'general',
      description: 'Test your general knowledge about the world',
      difficulty: 'Medium',
      timePerQuestion: 30,
      questions: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['London', 'Berlin', 'Paris', 'Madrid'],
          correctAnswer: 2,
          explanation: 'Paris is the capital and most populous city of France.'
        },
        {
          id: 2,
          question: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 1,
          explanation: 'Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.'
        },
        {
          id: 3,
          question: 'What is the largest ocean on Earth?',
          options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
          correctAnswer: 3,
          explanation: 'The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth\'s surface.'
        },
        {
          id: 4,
          question: 'Who painted the Mona Lisa?',
          options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
          correctAnswer: 2,
          explanation: 'Leonardo da Vinci painted the Mona Lisa in the early 16th century.'
        },
        {
          id: 5,
          question: 'What is the smallest country in the world?',
          options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
          correctAnswer: 1,
          explanation: 'Vatican City is the smallest country in the world by both area and population.'
        },
        {
          id: 6,
          question: 'How many continents are there?',
          options: ['5', '6', '7', '8'],
          correctAnswer: 2,
          explanation: 'There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Oceania, and South America.'
        },
        {
          id: 7,
          question: 'What is the longest river in the world?',
          options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
          correctAnswer: 1,
          explanation: 'The Nile River in Africa is generally considered the longest river in the world at about 6,650 km.'
        },
        {
          id: 8,
          question: 'Which element has the chemical symbol "Au"?',
          options: ['Silver', 'Gold', 'Aluminum', 'Copper'],
          correctAnswer: 1,
          explanation: 'Au is the chemical symbol for Gold, derived from the Latin word "aurum".'
        },
        {
          id: 9,
          question: 'What year did World War II end?',
          options: ['1943', '1944', '1945', '1946'],
          correctAnswer: 2,
          explanation: 'World War II ended in 1945 with the surrender of Japan in September.'
        },
        {
          id: 10,
          question: 'Mount Everest is located in which mountain range?',
          options: ['Alps', 'Andes', 'Himalayas', 'Rocky Mountains'],
          correctAnswer: 2,
          explanation: 'Mount Everest, the world\'s highest mountain, is located in the Himalayas on the border of Nepal and Tibet.'
        }
      ]
    },
    {
      id: 'science-1',
      title: 'Science Fundamentals',
      category: 'science',
      description: 'Explore basic science concepts',
      difficulty: 'Easy',
      timePerQuestion: 25,
      questions: [
        {
          id: 1,
          question: 'What is the speed of light?',
          options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
          correctAnswer: 0,
          explanation: 'The speed of light in vacuum is approximately 300,000 kilometers per second.'
        },
        {
          id: 2,
          question: 'What is the chemical formula for water?',
          options: ['H2O', 'CO2', 'O2', 'H2O2'],
          correctAnswer: 0,
          explanation: 'Water is composed of two hydrogen atoms and one oxygen atom, hence H2O.'
        },
        {
          id: 3,
          question: 'What is the powerhouse of the cell?',
          options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Chloroplast'],
          correctAnswer: 1,
          explanation: 'Mitochondria produce energy (ATP) for the cell, earning them the nickname "powerhouse of the cell".'
        },
        {
          id: 4,
          question: 'How many bones are in the adult human body?',
          options: ['186', '206', '226', '246'],
          correctAnswer: 1,
          explanation: 'An adult human body has 206 bones, while babies are born with about 270 bones.'
        },
        {
          id: 5,
          question: 'What gas do plants absorb from the atmosphere?',
          options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
          correctAnswer: 2,
          explanation: 'Plants absorb carbon dioxide during photosynthesis and release oxygen.'
        },
        {
          id: 6,
          question: 'What is the largest organ in the human body?',
          options: ['Heart', 'Brain', 'Liver', 'Skin'],
          correctAnswer: 3,
          explanation: 'The skin is the largest organ of the human body.'
        },
        {
          id: 7,
          question: 'What is the center of an atom called?',
          options: ['Electron', 'Proton', 'Nucleus', 'Neutron'],
          correctAnswer: 2,
          explanation: 'The nucleus is the center of an atom, containing protons and neutrons.'
        },
        {
          id: 8,
          question: 'What is the process by which plants make food?',
          options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
          correctAnswer: 1,
          explanation: 'Photosynthesis is the process by which plants use sunlight to make food from carbon dioxide and water.'
        },
        {
          id: 9,
          question: 'What is the boiling point of water in Celsius?',
          options: ['50°C', '75°C', '100°C', '125°C'],
          correctAnswer: 2,
          explanation: 'Water boils at 100°C (212°F) at standard atmospheric pressure.'
        },
        {
          id: 10,
          question: 'What force keeps us on the ground?',
          options: ['Magnetism', 'Gravity', 'Friction', 'Inertia'],
          correctAnswer: 1,
          explanation: 'Gravity is the force that attracts objects toward each other, keeping us on the ground.'
        }
      ]
    },
    {
      id: 'history-1',
      title: 'Ancient Civilizations',
      category: 'history',
      description: 'Journey through ancient history',
      difficulty: 'Medium',
      timePerQuestion: 30,
      questions: [
        {
          id: 1,
          question: 'Which ancient wonder is still standing today?',
          options: ['Hanging Gardens of Babylon', 'Great Pyramid of Giza', 'Colossus of Rhodes', 'Lighthouse of Alexandria'],
          correctAnswer: 1,
          explanation: 'The Great Pyramid of Giza is the only surviving ancient wonder of the world.'
        },
        {
          id: 2,
          question: 'Who was the first Emperor of Rome?',
          options: ['Julius Caesar', 'Augustus', 'Nero', 'Caligula'],
          correctAnswer: 1,
          explanation: 'Augustus, originally named Octavian, became the first Roman Emperor in 27 BC.'
        },
        {
          id: 3,
          question: 'The Rosetta Stone helped decipher which ancient language?',
          options: ['Latin', 'Greek', 'Egyptian Hieroglyphics', 'Sumerian'],
          correctAnswer: 2,
          explanation: 'The Rosetta Stone was key to understanding Egyptian hieroglyphics through its trilingual inscription.'
        },
        {
          id: 4,
          question: 'Which civilization built Machu Picchu?',
          options: ['Aztec', 'Maya', 'Inca', 'Olmec'],
          correctAnswer: 2,
          explanation: 'Machu Picchu was built by the Inca civilization in the 15th century in Peru.'
        },
        {
          id: 5,
          question: 'In which year did Christopher Columbus reach the Americas?',
          options: ['1492', '1498', '1500', '1506'],
          correctAnswer: 0,
          explanation: 'Christopher Columbus reached the Americas in 1492, marking a significant moment in world history.'
        },
        {
          id: 6,
          question: 'Who built the Taj Mahal?',
          options: ['Akbar', 'Shah Jahan', 'Aurangzeb', 'Babur'],
          correctAnswer: 1,
          explanation: 'Shah Jahan built the Taj Mahal in memory of his wife Mumtaz Mahal.'
        },
        {
          id: 7,
          question: 'What was the ancient name of Istanbul?',
          options: ['Athens', 'Constantinople', 'Sparta', 'Thebes'],
          correctAnswer: 1,
          explanation: 'Istanbul was formerly known as Constantinople, named after Emperor Constantine.'
        },
        {
          id: 8,
          question: 'Which empire was ruled by Julius Caesar?',
          options: ['Greek Empire', 'Persian Empire', 'Roman Empire', 'Egyptian Empire'],
          correctAnswer: 2,
          explanation: 'Julius Caesar was a leader of the Roman Empire, though he never officially became Emperor.'
        },
        {
          id: 9,
          question: 'The ancient Olympic Games originated in which country?',
          options: ['Italy', 'Greece', 'Egypt', 'Turkey'],
          correctAnswer: 1,
          explanation: 'The ancient Olympic Games began in Olympia, Greece, in 776 BC.'
        },
        {
          id: 10,
          question: 'What was the primary writing material in ancient Egypt?',
          options: ['Clay tablets', 'Papyrus', 'Parchment', 'Stone'],
          correctAnswer: 1,
          explanation: 'Ancient Egyptians wrote primarily on papyrus, made from the papyrus plant.'
        }
      ]
    },
    {
      id: 'sports-1',
      title: 'Sports Trivia',
      category: 'sports',
      description: 'Challenge your sports knowledge',
      difficulty: 'Easy',
      timePerQuestion: 20,
      questions: [
        {
          id: 1,
          question: 'How many players are on a soccer team?',
          options: ['9', '10', '11', '12'],
          correctAnswer: 2,
          explanation: 'A standard soccer team has 11 players on the field, including the goalkeeper.'
        },
        {
          id: 2,
          question: 'Which country has won the most FIFA World Cups?',
          options: ['Germany', 'Argentina', 'Brazil', 'Italy'],
          correctAnswer: 2,
          explanation: 'Brazil has won the FIFA World Cup 5 times, more than any other country.'
        },
        {
          id: 3,
          question: 'In which sport would you perform a slam dunk?',
          options: ['Volleyball', 'Basketball', 'Tennis', 'Badminton'],
          correctAnswer: 1,
          explanation: 'A slam dunk is a basketball move where a player jumps and scores by putting the ball directly through the hoop.'
        },
        {
          id: 4,
          question: 'How many Grand Slam tournaments are there in tennis?',
          options: ['3', '4', '5', '6'],
          correctAnswer: 1,
          explanation: 'There are 4 Grand Slam tournaments: Australian Open, French Open, Wimbledon, and US Open.'
        },
        {
          id: 5,
          question: 'What is the diameter of a basketball hoop in inches?',
          options: ['16 inches', '18 inches', '20 inches', '22 inches'],
          correctAnswer: 1,
          explanation: 'A regulation basketball hoop has a diameter of 18 inches.'
        },
        {
          id: 6,
          question: 'In which sport do you use a puck?',
          options: ['Soccer', 'Hockey', 'Baseball', 'Rugby'],
          correctAnswer: 1,
          explanation: 'Hockey uses a puck instead of a ball.'
        },
        {
          id: 7,
          question: 'How many points is a touchdown worth in American football?',
          options: ['3', '5', '6', '7'],
          correctAnswer: 2,
          explanation: 'A touchdown in American football is worth 6 points, with an extra point attempt following.'
        },
        {
          id: 8,
          question: 'What is the maximum score in a single frame of bowling?',
          options: ['10', '20', '30', '40'],
          correctAnswer: 2,
          explanation: 'The maximum score in a single frame of bowling is 30 (three strikes in a row).'
        },
        {
          id: 9,
          question: 'Which country hosted the 2016 Summer Olympics?',
          options: ['China', 'UK', 'Brazil', 'Japan'],
          correctAnswer: 2,
          explanation: 'The 2016 Summer Olympics were held in Rio de Janeiro, Brazil.'
        },
        {
          id: 10,
          question: 'In golf, what is a score of one under par called?',
          options: ['Eagle', 'Birdie', 'Bogey', 'Albatross'],
          correctAnswer: 1,
          explanation: 'A birdie is a golf score of one stroke under par for a hole.'
        }
      ]
    },
    {
      id: 'movies-1',
      title: 'Cinema Classics',
      category: 'movies',
      description: 'Test your movie knowledge',
      difficulty: 'Medium',
      timePerQuestion: 25,
      questions: [
        {
          id: 1,
          question: 'Which movie won the Academy Award for Best Picture in 1994?',
          options: ['Pulp Fiction', 'The Shawshank Redemption', 'Forrest Gump', 'The Lion King'],
          correctAnswer: 2,
          explanation: 'Forrest Gump won the Best Picture Oscar in 1995 for the 1994 film year.'
        },
        {
          id: 2,
          question: 'Who directed "The Dark Knight"?',
          options: ['Steven Spielberg', 'Christopher Nolan', 'James Cameron', 'Quentin Tarantino'],
          correctAnswer: 1,
          explanation: 'Christopher Nolan directed The Dark Knight trilogy, with The Dark Knight released in 2008.'
        },
        {
          id: 3,
          question: 'What is the highest-grossing film of all time (not adjusted for inflation)?',
          options: ['Titanic', 'Avatar', 'Avengers: Endgame', 'Star Wars: The Force Awakens'],
          correctAnswer: 1,
          explanation: 'Avatar (2009) reclaimed the top spot as the highest-grossing film after its re-release.'
        },
        {
          id: 4,
          question: 'In "The Matrix", what color pill does Neo take?',
          options: ['Blue', 'Red', 'Green', 'Yellow'],
          correctAnswer: 1,
          explanation: 'Neo takes the red pill to learn the truth about the Matrix.'
        },
        {
          id: 5,
          question: 'Which actor played Iron Man in the Marvel Cinematic Universe?',
          options: ['Chris Evans', 'Chris Hemsworth', 'Robert Downey Jr.', 'Mark Ruffalo'],
          correctAnswer: 2,
          explanation: 'Robert Downey Jr. portrayed Tony Stark/Iron Man throughout the MCU.'
        },
        {
          id: 6,
          question: 'What is the name of the hobbit played by Elijah Wood?',
          options: ['Frodo', 'Sam', 'Merry', 'Pippin'],
          correctAnswer: 0,
          explanation: 'Elijah Wood played Frodo Baggins in The Lord of the Rings trilogy.'
        },
        {
          id: 7,
          question: 'Which film features the quote "Here\'s looking at you, kid"?',
          options: ['Gone with the Wind', 'Casablanca', 'The Wizard of Oz', 'It\'s a Wonderful Life'],
          correctAnswer: 1,
          explanation: 'This iconic quote is from Casablanca (1942), spoken by Humphrey Bogart.'
        },
        {
          id: 8,
          question: 'Who directed "Jurassic Park"?',
          options: ['James Cameron', 'Steven Spielberg', 'George Lucas', 'Ridley Scott'],
          correctAnswer: 1,
          explanation: 'Steven Spielberg directed Jurassic Park, released in 1993.'
        },
        {
          id: 9,
          question: 'What is the name of the island in "Jurassic Park"?',
          options: ['Isla Sorna', 'Isla Nublar', 'Skull Island', 'Treasure Island'],
          correctAnswer: 1,
          explanation: 'The dinosaur theme park in Jurassic Park is located on Isla Nublar.'
        },
        {
          id: 10,
          question: 'Which actress played Hermione Granger in the Harry Potter films?',
          options: ['Emma Stone', 'Emma Watson', 'Emily Blunt', 'Emma Roberts'],
          correctAnswer: 1,
          explanation: 'Emma Watson portrayed Hermione Granger throughout all eight Harry Potter films.'
        }
      ]
    },
    {
      id: 'technology-1',
      title: 'Tech Innovators',
      category: 'technology',
      description: 'Explore the world of technology',
      difficulty: 'Hard',
      timePerQuestion: 35,
      questions: [
        {
          id: 1,
          question: 'Who is known as the father of computer science?',
          options: ['Steve Jobs', 'Bill Gates', 'Alan Turing', 'Tim Berners-Lee'],
          correctAnswer: 2,
          explanation: 'Alan Turing is considered the father of theoretical computer science and artificial intelligence.'
        },
        {
          id: 2,
          question: 'What does "HTTP" stand for?',
          options: ['HyperText Transfer Protocol', 'High Transfer Text Protocol', 'HyperText Transmission Process', 'High Tech Transfer Protocol'],
          correctAnswer: 0,
          explanation: 'HTTP stands for HyperText Transfer Protocol, the foundation of data communication on the web.'
        },
        {
          id: 3,
          question: 'In which year was the first iPhone released?',
          options: ['2005', '2006', '2007', '2008'],
          correctAnswer: 2,
          explanation: 'Apple released the first iPhone on June 29, 2007, revolutionizing mobile technology.'
        },
        {
          id: 4,
          question: 'What does "AI" stand for in technology?',
          options: ['Automated Intelligence', 'Artificial Intelligence', 'Advanced Integration', 'Automated Integration'],
          correctAnswer: 1,
          explanation: 'AI stands for Artificial Intelligence, the simulation of human intelligence by machines.'
        },
        {
          id: 5,
          question: 'Who founded Microsoft?',
          options: ['Steve Jobs and Steve Wozniak', 'Bill Gates and Paul Allen', 'Larry Page and Sergey Brin', 'Mark Zuckerberg'],
          correctAnswer: 1,
          explanation: 'Microsoft was founded by Bill Gates and Paul Allen in 1975.'
        },
        {
          id: 6,
          question: 'What programming language is primarily used for web development?',
          options: ['Python', 'Java', 'JavaScript', 'C++'],
          correctAnswer: 2,
          explanation: 'JavaScript is the primary programming language for web development, running in browsers.'
        },
        {
          id: 7,
          question: 'What does "CPU" stand for?',
          options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Computer Processing Unit'],
          correctAnswer: 0,
          explanation: 'CPU stands for Central Processing Unit, the "brain" of a computer.'
        },
        {
          id: 8,
          question: 'Who invented the World Wide Web?',
          options: ['Steve Jobs', 'Bill Gates', 'Tim Berners-Lee', 'Mark Zuckerberg'],
          correctAnswer: 2,
          explanation: 'Tim Berners-Lee invented the World Wide Web in 1989.'
        },
        {
          id: 9,
          question: 'What does "RAM" stand for?',
          options: ['Random Access Memory', 'Read Access Memory', 'Rapid Access Module', 'Random Active Memory'],
          correctAnswer: 0,
          explanation: 'RAM stands for Random Access Memory, used for temporary data storage in computers.'
        },
        {
          id: 10,
          question: 'Which company developed the Android operating system?',
          options: ['Apple', 'Microsoft', 'Google', 'Samsung'],
          correctAnswer: 2,
          explanation: 'Google developed and maintains the Android operating system.'
        }
      ]
    }
  ]
};

// Helper functions
function getQuizById(quizId) {
  return quizData.quizzes.find(quiz => quiz.id === quizId);
}

function getCategoryById(categoryId) {
  return quizData.categories.find(cat => cat.id === categoryId);
}

function getFeaturedQuizzes() {
  return quizData.quizzes.slice(0, 3);
}
