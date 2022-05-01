/* Variables start here */
let headerDate = $("#currentDay");
let saveButtons = $(".saveBtn")

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

const hoursInADay = [hrs7, hrs8, hrs9, hrs10, hrs11, hrs12, hrs13, hrs14, hrs15, hrs16, hrs17, hrs18]
let dayLength = hoursInADay.length;
let hour;

// Gets the current date 
const today = new Date();
let text = today.toLocaleDateString();
let timeInHours = today.getHours();
console.log(timeInHours);
headerDate.html(text);

function currentHour() {
    for (i= 0; i < dayLength; i++) {
        
        // parseInt() finds the first integer assigned, and .attr returns the specific element we are looking for
        hour = (parseInt(hoursInADay[i].attr('id')) )
        console.log(hour);
        hoursInADay[i].removeClass("past present future")
        //.next()Applies to the element next to the targeted one in this case text area 
        if (hour < timeInHours ) hoursInADay[i].next().addClass("past")
        if (hour === timeInHours) hoursInADay[i].next().addClass("present")
        if (hour > timeInHours) hoursInADay[i].next().addClass("future")
    }
}


saveButtons.click(function(){
    
})

currentHour()