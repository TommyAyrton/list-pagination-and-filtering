/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
"use strict";
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelector('.student-list');
const pagination = document.querySelector(".pagination");
const numChild = studentList.childElementCount;
const itemPerPage = 10;

const pagination = () => {
  let numberOfPage = 1;
  if (numChild % itemPerPage > 0) {
    numberOfPage = Math.floor(numChild / itemPerPage) + 1;
  } else {
    numberOfPage = Math.round(numChild / itemPerPage);
  }
  return numberOfPage; 
};

const links = () => {  
  const ul = document.createElement("ul");
  pagination.appendChild(ul); 
  for (let i = 1; i <= pagination(); i++) {
    const li = document.createElement("li");
    ul.appendChild(li);
    const a = document.createElement('a');    
    ul.appendChild(a);
    li.innerHTML = `<a href="#">${i}</a>`; 
  }
}

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const showPage = (list, page) => {
  const studentDetails = list.getElementsByClassName('student-item cf');
  const startIndex = page * itemPerPage - itemPerPage;
  const endIndex = page * itemPerPage - 1;
  for (let i = 0; i < numChild; i++) {
    studentDetails[i].style.display = "none";
    if (i >= startIndex && i <= endIndex) {
      studentDetails[i].style.display = "block";
    }
  }
};

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = () => {
  
};

pagination.addEventListener('click', (e) => {
  showPage(studentList,1);
});
// Remember to delete the comments that came with this file, and replace them with your own code comments.
