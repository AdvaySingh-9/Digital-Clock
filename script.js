// Making a Time function to display the time in different time zones
function time() {
    // Get all the time zones 
    const ist = document.getElementById("ist");
    const gmt = document.getElementById("gmt");
    const est = document.getElementById("est");
    const pst = document.getElementById("pst");
    const tokyo = document.getElementById("tokyo");
    const sydney = document.getElementById("sydney");
    const dubai = document.getElementById("dubai");
    const beijing = document.getElementById("beijing");
    const moscow = document.getElementById("moscow");
    const paris = document.getElementById("paris");
    const cape_town = document.getElementById("cape_town");
    const rio_de_janeiro = document.getElementById("rio_de_janeiro");
    const toronto = document.getElementById("toronto");
    const singapore = document.getElementById("singapore");
    let now = new Date();

    // Check which time zone is selected and adjust the time accordingly to UTC
    if (ist.checked) {
        // Indian Standard Time (UTC+5:30)
        now = new Date(now.getTime() + (5.5 * 60 * 60 * 1000)); // 5.5*60*60*1000 is ms for 5 hours and 30 minutes
    } else if (gmt.checked) {
        // GMT- it's already in local time (UTC)
        now = new Date(now.getTime()); // optional, just for clarity
    }
    // EST- Eastern Standard Time (UTC-5)
    else if(est.checked){
        now = new Date(now.getTime() - 4 * 60 * 60 * 1000);
    }
    // PST (UTC-7)
    else if (pst.checked){
        now = new Date(now.getTime() - 7 * 60 * 60 * 1000);
    }
    // Tokyo (UTC+9)
    else if(tokyo.checked){
        now = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    }
    else if(sydney.checked){
        // Sydney (UTC+10)
        now = new Date(now.getTime() + 10*60*60*1000)
    }
    // Dubai (UTC+4)
    else if(dubai.checked){
        now = new Date(now.getTime() + 4*60*60*1000)
    }
    // Beijing (UTC+8)
    else if(beijing.checked){
        now = new Date(now.getTime() + 8*60*60*1000)
    }
    else if(moscow.checked){
        // Moscow (UTC+3)
        now = new Date(now.getTime() +3*60*60*1000)
    }
    else if(paris.checked || cape_town.checked){
        // Paris or Cape Town (UTC+2)
        now = new Date(now.getTime() + 2*60*60*1000)
    }
    else if(rio_de_janeiro.checked){
        // Rio De Janeiro (UTC-3)
        now = new Date(now.getTime()-3*60*60*1000)
    }
    else if(toronto.checked){
        // Toronto (UTC-4)
        now = new Date(now.getTime()-4*60*60*1000)
    }
    else if(singapore.checked){
        // Singapore (UTC+8)
        now = new Date(now.getTime()+8*60*60*1000)
    }
    else {
        // If no time zone is selected, display a message
        document.getElementById("clock").textContent = "Plz select a time zone";
        return;
    }

    // Getting the current time in UTC
    const hours = now.getUTCHours().toString().padStart(2, "0");
    const minutes = now.getUTCMinutes().toString().padStart(2, "0");
    const seconds = now.getUTCSeconds().toString().padStart(2, "0");
    // checking if hours is grater than 12 or equal to 12, if yes, then set AM/PM accordingly.
    const am_pm = hours >= 12 ? "PM" : "AM";
    // Format the time to display in HH:MM:SS AM/PM format
    const display = `${hours}:${minutes}:${seconds} ${am_pm}`;
    // Displaying the time in the clock element
    document.getElementById("clock").textContent = display;
}
// Call the time function every second to update the clock
setInterval(time, 1000);