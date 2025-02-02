let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

let profile = document.querySelector(".header .flex .profile");

document.querySelector("#user-btn").onclick = () => {
  profile.classList.toggle("active");
  search.classList.remove("active");
};

let search = document.querySelector(".header .flex .search-form");

document.querySelector("#search-btn").onclick = () => {
  search.classList.toggle("active");
  profile.classList.remove("active");
};

let sideBar = document.querySelector(".side-bar");

document.querySelector("#menu-btn").onclick = () => {
  sideBar.classList.toggle("active");
  body.classList.toggle("active");
};

document.querySelector("#close-btn").onclick = () => {
  sideBar.classList.remove("active");
  body.classList.remove("active");
};

window.onscroll = () => {
  profile.classList.remove("active");
  search.classList.remove("active");

  if (window.innerWidth < 1200) {
    sideBar.classList.remove("active");
    body.classList.remove("active");
  }
};

// filepath: /d:/Online Course/design/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/design/context/courseList.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const container = document.getElementById("reviews-container");
      container.classList.add("reviews", "box-container");
      data.forEach((review) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
                  <p>${review.description}</p>
                  <div class="student">
                        <img src="${review.image}" alt="${review.name}'s profile">
                        <div>
                          <h3>${review.name}</h3>
                          <div class="stars">
                              ${generateStars(review.rating)}
                          </div>
                        </div>
                  </div>
              `;
        container.appendChild(box);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  let starsHtml = "";

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="fas fa-star"></i>';
  }

  if (halfStar) {
    starsHtml += '<i class="fas fa-star-half-alt"></i>';
  }
  return starsHtml;
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("../context/commentList.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response is not OK.");
    }
    return response.json();
  })
    .then((data) => {
      const container = document.getElementById('comments-container');
      container.classList.add('comments', "box-container")
        data.forEach((comment) => {
          const box = document.createElement("div");
          box.classList.add("box");
          box.innerHTML = `
                  <img src="${ comment.profile }" alt="${comment.name}'s profile">
               <div>
                  <h3>${comment.name}</h3>
                  <span>${comment.date}</span>
               </div>
            </div>
            <div class="comment-box">${comment.description}</div>
            <form action="" class="flex-btn">
               <input type="submit" value="edit comment" name="edit_comment" class="inline-option-btn"
                  onclick="EditComment()">
               <input type="submit" value="delete comment" name="delete_comment" class="inline-delete-btn"
                  onclick="DeleteComment()">
            </form>
               `;
          container.appendChild(box);
      })
    })
        .catch((error) => console.error("Error fetching data:", error));
    });
