// Listen for authentication changes
auth.onAuthStateChanged(user => {
    if (user) {
        console.log("Logged in as: ", user);
    } else {
        console.log("User logged out");
    }
})



const loginForm = document.querySelector("#loginForm");
const registerForm = document.querySelector("#registerForm");
const logout = document.querySelector("#logout");

// Signup
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get userinfo
    const email = document.querySelector("#registerEmail").value;
    const password = document.querySelector("#registerPassword").value;
    const fName = document.querySelector("#registerFirstName").value;
    const lName = document.querySelector("#registerLastName").value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log("You have now been registered with email and password");
        const modal = document.querySelector("#registerModal");
        M.Modal.getInstance(modal).close();
        registerForm.reset();
    });
});

//Sign in
loginForm.addEventListener("submit", (e) => {
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log("You have been signed in.");
    });
});

// Sign out
logout.addEventListener("click", (e) => {
    e.preventDefault();

    auth.signOut();
});