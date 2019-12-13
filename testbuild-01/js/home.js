const input = document.querySelector("#destination");
const submitBtn = document.querySelector("#submitBtn");

// eventlisteners for disabling/enabling submitBtn
input.addEventListener("mouseenter", () => {
    if (input.value !== "") {
        submitBtn.classList.remove("disabled");
    } else if (input.value == "") {
        submitBtn.classList.add("disabled");
    }

});
input.addEventListener("mouseleave", () => {
    if (input.value !== "") {
        submitBtn.classList.remove("disabled");
    } else if (input.value == "") {
        submitBtn.classList.add("disabled");
    }

});

// submitBtn eventlistener

submitBtn.addEventListener("click", () => {
    console.log(input.value);
    location.href = "routePlanning.html";
});