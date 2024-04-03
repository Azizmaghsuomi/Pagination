// const listItem = [
//   { id: 1, name: "Aziz", family: "maghsuomi" },
//   { id: 2, name: "ali", family: "ahmadi" },
//   { id: 3, name: "mamad", family: "ahmadi" },
//   { id: 4, name: "sasi", family: "ahmadi" },
//   { id: 5, name: "ahmad", family: "ahmad" },
//   { id: 6, name: "zahra", family: "ahmad" },
//   { id: 7, name: "fati", family: "ahmad" },
//   { id: 8, name: "pary", family: "ahmad" },
//   { id: 9, name: "yasin", family: "ahmad" },
//   { id: 10, name: "dani", family: "ahmadi" },
//   { id: 11, name: "amir", family: "ahmadi" },
//   { id: 12, name: "hasan", family: "ahmadi" },
//   { id: 13, name: "gholami", family: "ahmadi" },
//   { id: 14, name: "jani", family: "ahmadi" },
//   { id: 15, name: "ajmal", family: "ahmadi" },
//   { id: 16, name: "ghayom", family: "ahmadi" },
//   { id: 17, name: "maryam", family: "ahmadi" },
//   { id: 18, name: "mojtaba", family: "ahmadi" },
//   { id: 19, name: "molaii", family: "ahmadi" },
// ];

// let userListContainer = document.querySelector("#list");
// let paginationContainer = document.querySelector("#pagination");

// let curentPage = 1;
// let rowsCunt = 5;

// function displayUesrsList(allUesrsArray, usersContainer, rowsCount, currentPage) {
//   usersContainer.innerHTML = "";

//   let endIndex = rowsCunt * curentPage;
//   let startIndex = endIndex - rowsCunt;

//   let pagenatedUsers = allUesrsArray.slice(startIndex, endIndex);

//   pagenatedUsers.forEach(function (user) {
//     let userElemnt = document.createElement("div");
//     userElemnt.classList.add("item");
//     userElemnt.innerHTML = user.name + " " + user.family;
//     usersContainer.appendChild(userElemnt);
//   });
// }

// function setUpPagenation(allUsersArray, pagesContainer, rowsCunt) {

//   pagesContainer.innerHTML = "";

//   let pagecunt = math.ceil(allUsersArray.length / rowsCunt);

//   for (let i = 1; i < pagecunt + 1; i++) {
//     let btn = pagenationButtonGenrator(i, allUsersArray);
//     pagesContainer.appendChild(btn);
//   }
// }
// function pagenationButtonGenrator(page, allUserArray) {
//   let button = document.createElement("button");
//   button.innerHTML = page;

//   if (page === curentPage) {
//     button.classList.add("active");
//   }
//   return button;
// }

// displayUesrsList(listItem, userListContainer, rowsCunt, curentPage);
// setUpPagenation(listItem, paginationContainer, rowsCunt);

////////////////////

const listItems = [
  { id: 1, name: "Aziz", family: "maghsuomi" },
  { id: 2, name: "ali", family: "ahmadi" },
  { id: 3, name: "mamad", family: "ahmadi" },
  { id: 4, name: "sasi", family: "ahmadi" },
  { id: 5, name: "ahmad", family: "ahmad" },
  { id: 6, name: "zahra", family: "ahmad" },
  { id: 7, name: "fati", family: "ahmad" },
  { id: 8, name: "pary", family: "ahmad" },
  { id: 9, name: "yasin", family: "ahmad" },
  { id: 10, name: "dani", family: "ahmadi" },
  { id: 11, name: "amir", family: "ahmadi" },
  { id: 12, name: "hasan", family: "ahmadi" },
  { id: 13, name: "gholami", family: "ahmadi" },
  { id: 14, name: "jani", family: "ahmadi" },
  { id: 15, name: "ajmal", family: "ahmadi" },
  { id: 16, name: "ghayom", family: "ahmadi" },
  { id: 17, name: "maryam", family: "ahmadi" },
  { id: 18, name: "mojtaba", family: "ahmadi" },
  { id: 19, name: "molaii", family: "ahmadi" },
];

let userListContainer = document.querySelector("#list");
let paginationContainer = document.querySelector("#pagination");

let currentPage = 1;
let rowsCount = 5;

function displayUesrsList(
  allUesrsArray,
  usersContainer,
  rowsCount,
  currentPage
) {
  usersContainer.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedUsers = allUesrsArray.slice(startIndex, endIndex);

  paginatedUsers.forEach(function (user) {
    let userElement = document.createElement("div");
    userElement.classList.add("item");
    userElement.innerHTML = user.name + " " + user.family;

    usersContainer.appendChild(userElement);
  });
}

function setupPagination(allUesrsArray, pagesContainer, rowsCount) {
  // Codes

  pagesContainer.innerHTML = "";

  let pageCount = Math.ceil(allUesrsArray.length / rowsCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let btn = paginationButtonGenerator(i, allUesrsArray);
    pagesContainer.appendChild(btn);
  }
}

function paginationButtonGenerator(page, allUesrsArray) {
  let button = document.createElement("button");
  button.innerHTML = page;

  if (page === currentPage) {
    button.classList.add("active");
  }

  button.addEventListener("click", function () {
    currentPage = page
    displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage);
   
    let prevPage = document.querySelector("button.active")
    prevPage.classList.remove("active")

    button.classList.add("active")
  });
 
  return button;
}

displayUesrsList(listItems, userListContainer, rowsCount, currentPage);
setupPagination(listItems, paginationContainer, rowsCount);
