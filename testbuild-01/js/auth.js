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
    const birthDate = document.querySelector("#registerBirth").value;
    const number = document.querySelector("#registerNumber").value;
    
    // Signup the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection("users").doc(cred.user.uid).set({
            fName: fName,
            lName: lName,
            birthDate: birthDate,
            number: number
        });

    }).then(() => {
        const modal = document.querySelector("#registerModal");
        const loginModal = document.querySelector("#loginModal");
        M.Modal.getInstance(modal).close();
        M.Modal.getInstance(loginModal).close();
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