// Object to store answers for each question
var answers = {
  question1: null,
  question2: null,
  question3: null
};

function choose(questionId, answer) {
  // Save the answer for the current question
  answers[questionId] = answer;

  // Determine what to do next based on the current question
  if (questionId === 'question1') {
    // Hide Question 1 and slide in Question 2
    document.getElementById('questionBox1').style.display = 'none';
    var nextBox = document.getElementById('questionBox2');
    nextBox.style.display = 'block';
    void nextBox.offsetWidth; // Force reflow
    nextBox.classList.add('slide-in');
  } else if (questionId === 'question2') {
    // Hide Question 2 and slide in Question 3
    document.getElementById('questionBox2').style.display = 'none';
    var nextBox = document.getElementById('questionBox3');
    nextBox.style.display = 'block';
    void nextBox.offsetWidth;
    nextBox.classList.add('slide-in');
  } else if (questionId === 'question3') {
    // Hide Question 3 and display the result container with animation
    document.getElementById('questionBox3').style.display = 'none';
    displayResult(); // Generate and show the result
  }
}

function displayResult() {
  let result = "";

  // Customize the result based on Question 1 (cat or dog)
  if (answers.question1 === 'cat') {
    result += "Cozy Cat Vibes. ";
    document.getElementById('resultImage').src = "cat.png"; // Update with actual cat image path
  } else if (answers.question1 === 'dog') {
    result += "Energetic Dog Spirit. ";
    document.getElementById('resultImage').src = "dog.png"; // Update with actual dog image path
  }

  // Customize based on Question 2 (ideal day off)
  if (answers.question2 === 'relax') {
    result += "You love quiet days off. ";
  } else if (answers.question2 === 'adventure') {
    result += "You're always up for an adventure. ";
  } else if (answers.question2 === 'balanced') {
    result += "You enjoy a balanced mix of relaxation and excitement. ";
  }

  // Customize based on Question 3 (perfect Valentine's day date)
  if (answers.question3 === 'quiet') {
    result += "You prefer intimate dinners.";
  } else if (answers.question3 === 'spontaneous') {
    result += "Spontaneity is your thing!";
  } else if (answers.question3 === 'creative') {
    result += "You love creative experiences.";
  }

  // Hide the quiz container so it's no longer visible
  document.querySelector('.container').style.display = 'none';

  // Set the result text in the speech bubble
  document.getElementById('resultSpeech').innerText = result;

  // Show the result container and trigger the slide-in animation
  const resultContainer = document.getElementById('resultContainer');
  resultContainer.style.display = 'flex'; // Ensure it's visible
  void resultContainer.offsetWidth; // Force reflow for animation
  resultContainer.classList.add('slide-in');
}


function updateVideoSource() {
  const video = document.getElementById('bgVideo');
  // Check if viewport width is 375px or less
  if (window.innerWidth <= 400) {
    // Change to the mobile video
    video.querySelector('source').src = 'mobilevideo.mp4';
  } else {
    // Use the desktop video
    video.querySelector('source').src = 'valentinebackground.mp4';
  }
  video.load();
}

// Run on load
updateVideoSource();

// Optionally, update on window resize
window.addEventListener('resize', updateVideoSource);


