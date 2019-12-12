// Listen for authentication changes
auth.onAuthStateChanged(user => {
    if (user) {
        setupUI(user);
    } else {
        setupUI();
    }
});



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
    e.preventDefault();
    const email = document.querySelector("#loginEmail").value;
    const password = document.querySelector("#loginPassword").value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        const modal = document.querySelector("#loginModal");
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    });
});

// Sign out
logout.addEventListener("click", (e) => {
    e.preventDefault();

    auth.signOut();
});