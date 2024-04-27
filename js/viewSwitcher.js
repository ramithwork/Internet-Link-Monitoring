// viewSwitcher [MODULE]


function viewSwitcher(deviceType){
    let mainContainerDiv = document.getElementById("main-container")
    let mobileContainerDiv = document.getElementById("mobile-container")

    if (deviceType != "desktop"){
        // On Mobile & Tablet
        mainContainerDiv.classList.remove("display-block")
        mainContainerDiv.classList.add("display-none")
        mobileContainerDiv.classList.remove("display-none")
        mobileContainerDiv.classList.add("display-block")
    }
    else if (deviceType === "desktop"){
        // On Desktop
        mainContainerDiv.classList.remove("display-none")
        mainContainerDiv.classList.add("display-block")
        mobileContainerDiv.classList.remove("display-block")
        mobileContainerDiv.classList.add("display-none")
    }
}

export { viewSwitcher as switchView }