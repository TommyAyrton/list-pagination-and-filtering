/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
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
const studentList = document.getElementsByClassName('student-item cf');
const count = studentList.length;
const itemPerPage = 10;
let numberOfPage = 1;
if (count % itemPerPage > 0) {
   numberOfPage = Math.floor(count / itemPerPage) + 1;
} else {
    numberOfPage = Math.round(count / itemPerPage);
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
// const showPage = (list, page) => {
//    const startIndex = (page * listPerPage) - listPerPage;
//    const endIndex = (page * listPerPage) - 1;

//    for (let i = 0; i < list.length; i++) {
//       if (i >= startIndex && i <= endIndex) {
//          list[i].style.background = 'red';   
//       }      
//    }
// }



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = () => {
   const div = document.querySelector('.pagination');
   const ul = document.createElement('ul');
   div.appendChild(ul);   
   //console.log(div);
   for (let i = 1; i <= numberOfPage ; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      if (i === 1) {
         li.innerHTML = `<a href="#" class="active">${i}</a>`;
      } else {
         li.innerHTML = `<a href="#">${i}</a>`; 
      }                    
   }   
}

appendPageLinks();
// Remember to delete the comments that came with this file, and replace them with your own code comments.