/* Variables start here */
let headerDate = $("#currentDay");
let hrs7 = $("#7hrs");
let hrs8 = $("#8hrs");
let hrs9 = $("#9hrs");
let hrs10 = $("#10hrs");
let hrs11 = $("#11hrs");
let hrs12 = $("#12hrs");
let hrs13 = $("#13hrs");
let hrs14 = $("#14hrs");
let hrs15 = $("#15hrs");
let hrs16 = $("#16hrs");
let hrs17 = $("#17hrs");
let hrs18 = $("#18hrs");

const hours = [hrs7, hrs8, hrs9, hrs10, hrs11, hrs12, hrs13, hrs14, hrs15, hrs16, hrs17, hrs18]

// Gets the current date 
const today = new Date();
let text = today.toLocaleDateString();
let timeInHours = today.getHours();
headerDate.html(text);


/*  */