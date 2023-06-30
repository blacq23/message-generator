// Define arrays of message components
const subjects = ["JavaScript", "Node.js", "Git", "HTML", "CSS"];
const verbs = ["is", "can be", "should be", "will be"];
const adjectives = ["awesome", "fun", "exciting", "challenging", "rewarding"];
const objects = ["project", "journey", "experience", "opportunity"];

// Function to generate a random message
function generateMessage() {
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];

  const message = `${subject} ${verb} ${adjective} ${object}.`;

  return message;
}

// Generate and print a random message
console.log(generateMessage());
