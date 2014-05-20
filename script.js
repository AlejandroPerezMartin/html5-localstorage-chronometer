if (window.localStorage) {

    // Initialize timer or get previous value
    localStorage.timer = (localStorage.timer || 0.0);

    // Variable declaration
    var chronoDiv = document.getElementById("chrono"),
        playStopButton = document.getElementsByTagName("button")[1],
        i = undefined;

    // Show current chrono value
    chronoDiv.innerHTML = (+localStorage.timer).toFixed(1);

    // Start chrono and update each 0.1 seconds
    function start() {
        i = setInterval(function() {
            localStorage.timer = +localStorage.timer + 0.1;
            chronoDiv.innerHTML = (+localStorage.timer).toFixed(1);
        }, 100);
    }

    function changeToStart() {
        playStopButton.className = "start";
        playStopButton.innerHTML = '<span id="button-icon" class="icon-play"></span>Start';
    }

    function changeToStop() {
        playStopButton.className = "stop";
        playStopButton.innerHTML = '<span id="button-icon" class="icon-stop"></span>Stop';
    }

    // Reset event
    document.getElementsByName("button-reset")[0].addEventListener("click", function() {
        window.clearInterval(i);
        i = undefined;
        localStorage.timer = 0.0;
        chronoDiv.innerHTML = (+localStorage.timer).toFixed(1);
        changeToStart();
    });

    // Start/stop event
    document.getElementsByName("button-stop")[0].addEventListener("click", function() {
        // Stop chrono
        if (i) {
            window.clearInterval(i);
            changeToStart();
            i = undefined;
        }
        // Start chrono
        else {
            changeToStop();
            start();
        }
    });

} else {
    // Error message
    document.getElementsByTagName("header")[0].innerHTML += "<h3 style=\"color:red\">Sorry, your browser doesn't suppot LocalStorage</h3>";
}
