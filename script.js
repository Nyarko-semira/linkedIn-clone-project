const showProfile = document.querySelector(".show");
const profile = document.querySelector(".profile-menu-wrap")

showProfile.addEventListener("click", showProfilePic);


function showProfilePic() {
    profile.classList.toggle("open-menu")
};


let sideActivity = document.getElementById("sidebarActivity");
let morelink = document.getElementById("showMoreLink");

morelink.addEventListener("click", toggleShow);

function toggleShow() {
    sideActivity.classList.toggle("open-activity")

    if (sideActivity.classList.contains("open-activity")) {
        morelink.innerHTML = "show less <b>-<b>"
    }

    else {
        morelink.innerHTML = "show more <b> + </b>"
    }

}
