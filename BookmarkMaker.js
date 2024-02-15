// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormE1 = document.getElementById("bookmarkForm");

let siteNameInputE1 = document.getElementById("siteNameInput");
let siteNameErrMsgE1 = document.getElementById("siteNameErrMsg");

let siteUrlInputE1 = document.getElementById("siteUrlInput");
let siteUrlErrMsgE1 = document.getElementById("siteUrlErrMsg");

let submitBtnE1 = document.getElementById("submitBtn");
let bookmarksListE1 = document.getElementById("bookmarksList");

function siteNameInputValidation(event) {
    if (event.target.value === "") {
        siteNameErrMsgE1.textContent = "Required*";
        siteNameErrMsgE1.classList.add("error-msg");
    } else {
        siteNameErrMsgE1.textContent = "";
    }
}

function siteUrlInputValidation(event) {
    if (event.target.value === "") {
        siteUrlErrMsgE1.textContent = "Required*";
        siteUrlErrMsgE1.classList.add("error-msg");
    } else {
        siteUrlErrMsgE1.textContent = "";
    }
}

siteNameInputE1.addEventListener("change", siteNameInputValidation);

siteUrlInputE1.addEventListener("change", siteUrlInputValidation);

bookmarkFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
});

function createAndAppendLink(event) {
    let siteNameInputValue = siteNameInputE1.value;
    let siteUrlInputValue = siteUrlInputE1.value;

    if (siteUrlInputValue !== "" && siteNameInputValue !== "") {
        let resultItem = document.createElement("li");
        resultItem.classList.add("result-coontainer", "m-3");
        bookmarksListE1.appendChild(resultItem);

        let headingElement = document.createElement("h1");
        headingElement.textContent = siteNameInputValue;
        headingElement.classList.add("result-heading");
        resultItem.appendChild(headingElement);

        let linkElement = document.createElement("a");
        linkElement.href = siteUrlInputValue;
        linkElement.textContent = siteUrlInputValue;
        linkElement.target = "_blank";
        linkElement.classList.add("result-link");
        resultItem.appendChild(linkElement);

    } else if (siteNameInputValue === "") {
        siteNameInputValidation(event);
    } else {
        siteUrlInputValidation(event);
    }

}

submitBtnE1.addEventListener("click", createAndAppendLink);