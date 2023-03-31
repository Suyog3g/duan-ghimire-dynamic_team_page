const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const closeBtn = document.querySelector('#close-btn');
const closeBtn2 = document.querySelector('#close-btn2');
const popup = document.querySelector('#popup');
const popup2 = document.querySelector('#popup2');


const teamMembers = [
  {
    name: "Suyog Ghimire",
    role: "Developer",
    bio: "Hey, My name is Suyog and I am the developer of this team. I am currently working on a school project to rebrand a drink brand by the name Zima. I am looking after all the development aspect of the website as well as some design aspect",
    image: "path/to/suyog/image"
  },
  {
    name: "Jintao Duan",
    role: "Designer",
    bio: "I am designer of this team",
    image: "path/to/jintao/image"
  },
];

const nameElement = document.querySelector(".popup__name");
const bioElement = document.querySelector(".popup__bio");
const popupElement = document.querySelector(".popup");
const closeBtnElement = document.querySelector("#close-btn");

// Add event listeners to each team member card
const cards = document.querySelectorAll(".team-member__card");
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Update the name, bio, and image for the selected team member
    nameElement.textContent = teamMembers[index].name;
    bioElement.textContent = teamMembers[index].bio;
    popupElement.style.display = "block";
  });
});

// Add close event listener to close button
closeBtnElement.addEventListener("click", () => {
  popupElement.style.display = "none";
});






card1.addEventListener('click', function() {
  showPopup1(popup);
});

card2.addEventListener('click', function() {
  showPopup2(popup2);
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});


closeBtn2.addEventListener('click', function() {
  popup2.style.display = 'none';
});

function showPopup1(popup) {
  popup.style.display = 'block';
}

function showPopup2(popup2) {
  popup2.style.display = 'block';
}
