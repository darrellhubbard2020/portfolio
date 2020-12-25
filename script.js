

window.addEventListener("load", function() {
    var aboutLinkSection = document.getElementById("AboutMe");

    aboutLinkSection.addEventListener("scroll", function(e) {
        viewScroll(e);
    });

    function viewScroll (e) {
        //check if working
        console.log("You are scrolling this page!");
    }

});

window.addEventListener("load", projectsCatalog);

function projectsCatalog () {

    var portofono = document.getElementById("Projects");

    for(var j = 0; j < 8; j++) {
        
        portofono.innerHTML += `
            <div class="projects">
                <div class="project-images">
                    <img src="images/sample.jpg" alt="" width="100%" height="100%" />
                </div>
                <h2 class="project-titles">Duis aute irure dolor</h2>
                <p class="project-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <button type="button" class="project-view">View Now</button>
            </div>
        `;
    }
}

//close when not hovering.
function openChatApp (e) {
    e.id = "ChatApp-Open";
    e.style.transitionDuration = "1s";
    e.innerHTML = `
        <div id="ChatApp-Open-Navbar">

            <label>Chat Application</label>

            <img src="images/minimize.png" alt="chat minimizing button" width="15" height="15" id="ChatMinimize" />

            <button type="button" id="ChatExit" onclick="closeThisChatApp(this)">
                <img src="images/exit.png" alt="chat exiting button" width="15" height="15" />
            </button>

        </div>

        <div id="ChatApp-Open-Message-Viewer"></div>

        <div id="ChatApp-Open-Send-Message-Container">

            <input type="text" id="Message" placeholder="Type a message" />
            <button type="button" id="sendMessage">SEND</button>

        </div>
    `;

}

//open when hover
function closeThisChatApp (e) {
    //test to see if works properly.
    alert("Closing chat application window.");

    var chatApp = document.getElementById("ChatApp-Open");

    //clear the html out
    chatApp.innerHTML = "";

    chatApp.id = "ChatApp-Close";
    chatApp.style.transitionDuration = "1s";
    chatApp.innerHTML = "Let's Talk";

    //send message to check if working 
    console.log("Chap App is now closing.");
}
