// Array of fun facts
const funFacts = [
  {
    fact: "The First Computer Bug Was a Literal Bug",
    description: "In 1947, a moth was found trapped in a relay of Harvard's Mark II computer, marking the first documented 'bug' in programming."
  },
  {
    fact: "The First Email Was Sent in 1971",
    description: "Ray Tomlinson sent the first email to himself as a test message, which contained something like 'QWERTYUIOP.'"
  },
  {
    fact: "The First Website Is Still Online",
    description: "Tim Berners-Lee's 1991 website, explaining the World Wide Web, is still accessible today."
  },
  {
    fact: "The First 1GB Hard Drive Was the Size of a Refrigerator",
    description: "Introduced by IBM in 1980, it weighed over 500 pounds and cost $40,000."
  },
  {
    fact: "There Are Over 2 Billion Websites",
    description: "Only a fraction of the 2 billion websites are actively maintained, with most being inactive or spam."
  },
  {
    fact: "The '@' Symbol Wasn't Originally for Email",
    description: "Before email, the '@' symbol was used in accounting and commerce to mean 'at the rate of.'"
  },
  {
    fact: "The First Mobile Phone Call Was Made in 1973",
    description: "Martin Cooper of Motorola made the first mobile phone call to a rival at Bell Labs."
  },
  {
    fact: "The First Camera Took 8 Hours to Expose an Image",
    description: "The daguerreotype process in the 1820s required hours of exposure to light to produce a photograph."
  },
  {
    fact: "There Are More Transistors Than Humans",
    description: "Modern processors have billions of transistors, far outnumbering the human population."
  },
  {
    fact: "Nintendo Started as a Playing Card Company",
    description: "Founded in 1889, Nintendo initially produced handmade playing cards before transitioning to video games in the 1970s."
  }
];

let currentFactIndex = 0;

// DOM Elements
const factTitle = document.getElementById("fact-title");
const factDescription = document.getElementById("fact-description");
const nextFactButton = document.getElementById("next-fact-button");

// Event Listener for the Button
nextFactButton.addEventListener("click", () => {
  const currentFact = funFacts[currentFactIndex];
  factTitle.textContent = currentFact.fact;
  factDescription.textContent = currentFact.description;

  // Update the index to the next fact, and loop back to the beginning
  currentFactIndex = (currentFactIndex + 1) % funFacts.length;
});
