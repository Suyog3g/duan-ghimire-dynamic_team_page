const teamMember1 = [
  {
    name: "Suyog Ghimire",
    role: "Developer",
    bio: "Hey, My name is Suyog and I am the developer of this team. I am currently working on a school project to rebrand a drink brand by the name Zima. I am looking after all the development aspect of the website as well as some design aspect",
    image: "path/to/suyog/image"
  }];
  const teamMember2 = [ {
    name: "Jintao Duan",
    role: "Designer",
    bio: "I am designer of this team",
    image: "path/to/jintao/image"
  }];

const nameElement = document.querySelector(".popup h2");
const bioElement = document.querySelector(".popup__p");
const popupElement = document.querySelector(".popup");


// Add event listeners to each team member card
const cards = document.querySelectorAll(".team-member__card");
cards.forEach((card, index) => {
  card.addEventListener("click", () => {
    // Update the name and bio for the selected team member
    nameElement.textContent = teamMember1[index].name;
    bioElement.textContent = teamMember1[index].bio;
    nameElement.textContent = teamMember2[index].name;
    bioElement.textContent = teamMember2[index].bio;
    popupElement.style.display = "block";
  });
});



// Add close event listener to close button
const closeBtnElement = document.querySelector("#close-btn");
closeBtnElement.addEventListener("click", () => {
  popupElement.style.display = "none";
});

// Add event listeners to the second set of card and close button
const card1 = document.querySelector('#card-1');
const card2 = document.querySelector('#card-2');
const closeBtn2 = document.querySelector('#close-btn2');
const popup2 = document.querySelector('#popup2');

card1.addEventListener('click', function() {
  showPopup1(popup);
  console.log(teamMember1)
});

card2.addEventListener('click', function() {
  showPopup2(popup2);
  console.log(teamMember2)
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
