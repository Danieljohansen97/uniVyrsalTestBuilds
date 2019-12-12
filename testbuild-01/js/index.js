// Document Ready function
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
});

const loggedInLinks = document.querySelectorAll(".loggedIn");
const loggedOutLinks = document.querySelectorAll(".loggedOut");
const userDetails = document.querySelector("#userDetails");

const setupUI = (user) => {
    if (user) {
        // User details on profilepage
        if (userDetails) {
            const html = `
            <ul class="collapsible">
                <li>
                    <div class="collapsible-header"><i class="material-icons">info</i>Contact info</div>
                    <div class="collapsible-body"><span>
                        Email: ${user.email}
                        <br>
                        Phone: 45468694
                    </span></div>
                </li>
                <li>
                    <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                    <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
            </ul>
            `;
            userDetails.innerHTML = html;
            $('.collapsible').collapsible();
        }

        // Toggle UI elements
        loggedInLinks.forEach(item => item.style.display = "block");
        loggedOutLinks.forEach(item => item.style.display = "none");
    } else {
        loggedInLinks.forEach(item => item.style.display = "none");
        loggedOutLinks.forEach(item => item.style.display = "block");
        userDetails.innerHTML = "";
    }
};