const questions = [{
    name: "question1",
    question: "How would a data index of 0 be set?",
    answer: "Element.setAttribute(‘data-index’, 0);",
    incorrect: ["Element.getAttribute(‘data-index’, 0);", "Element.dataset(‘data-index’, 0);","Element.innerIndex = 0;"]
},
{
    name: "question2",
    question: "What does the querySelectorAll() method return?",
    answer: "A nodelist",
    incorrect: ["An array", "A string","A stringray"]
},
{
    name: "question3",
    question: "How can an object be turned into a string to be stored in Local Storage?",
    answer: "variable = JSON.stringify(object);",
    incorrect: ["variable = object.stringForm();","variable = object.toString();", "variable = JSON.setString(object);"]
},
{
    name: "question4",
    question: "How might an object be stored in Local Storage?",
    answer: "localStorage.setItem([‘item name’], [item]);",
    incorrect: ["localStorage.setAttribute([‘attribute name’], [attribute]);", "localStorage.setList([‘setlist name’], [setlist]);","localStorage.setString([‘string name’], [string]);"]
},
{
    name: "question5",
    question: "How can items in an array be sorted in descending order by numerical value?",
    answer: "array.sort((a,b)=>{return b-a});",
    incorrect: ["array.sort((a,b)=>{return a-b});", "array.sort(a,b, return b-a);","array.sort(a,b, return a-b);"]
}];

