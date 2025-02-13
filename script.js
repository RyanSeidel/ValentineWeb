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
    // Randomize between multiple "Cozy Cat" messages, if desired
    const catMessages = [
      "Cozy Cat Vibes.",
      "You're all about that feline finesse.",
      "Cat-tastic and cozy!",
      "You are Purr-fect!",
      "Your elegance is as timeless as a graceful cat.",
      "You have the mystique of a stealthy feline.",
      "Your charm is as irresistible as a cat's purr.",
      "You're as graceful as a cat on a moonlit night.",
      "You bring comfort and joy like a purring kitten.",
      "Your wit is as sharp as a cat's claws."
    ];
    const randomCatMessage = catMessages[Math.floor(Math.random() * catMessages.length)];
    result += randomCatMessage + " ";

    // Randomly select a cat image from the available files
    const catImages = ["cat.png", "cat2.png", "cat3.png", "cat4.png", "cat5.png", "cat6.png", "cat7.jpg", "cat8.jpg", "cat10.jgp", "cat11.jgp", "cat12.jgp", "cat1.jpg"]; // Update these file names as needed
    const randomCat = catImages[Math.floor(Math.random() * catImages.length)];
    document.getElementById('resultImage').src = "CatPhotos/" + randomCat; // Ensure the folder path is correct
  } else if (answers.question1 === 'dog') {
    // Randomize between multiple "Energetic Dog" messages
    const dogMessages = [
      "Energetic Dog Spirit.",
      "You're full of pup energy!",
      "Woof! You're a lively companion.",
      "Your loyalty is as boundless as your spirit.",
      "You're the best friend anyone could ask for!",
      "Your enthusiasm brightens every day!",
      "Your smile is as infectious as a wagging tail.",
      "You're always up for a fun adventure!",
      "Your heart is as big as your bark.",
      "You make the world a happier place with your cheerful nature."
    ];
    const randomDogMessage = dogMessages[Math.floor(Math.random() * dogMessages.length)];
    result += randomDogMessage + " ";

    // Randomly select a dog image from the available files
    const dogImages = ["dog.png", "dog.jpg", "dog2.jpg", "dog5.png", "dog8.jpg", "dog11.jpg", "dog12.jpg", "dog13.jpg", "dog14.jgp", "dog15.jpg", "pug.jpg", "husky.jpg"]; // Update these file names as needed
    const randomDog = dogImages[Math.floor(Math.random() * dogImages.length)];
    document.getElementById('resultImage').src = "DogPhotos/" + randomDog; // Ensure the folder path is correct
  }

  // Customize based on Question 2 (ideal day off)
  if (answers.question2 === 'relax') {
    result += "You love quiet days off. ";
  } else if (answers.question2 === 'adventure') {
    result += "You're always up for an adventure. ";
  } else if (answers.question2 === 'gym') {
    result += "You're passionate about fitness and love hitting the gym! ";
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
  if (window.innerWidth <= 810) {
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


