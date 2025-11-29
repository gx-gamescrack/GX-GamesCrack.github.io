if (typeof Module === 'undefined') {
    window.Module = {};
}

// Set up canvas element reference early
Module.canvas = document.getElementById("canvas");

// Wait until DOM is fully loaded
window.addEventListener("DOMContentLoaded", () => {
    // Main Page Elements
    const bodyElement = document.getElementsByTagName("body")[0];
    const statusElement = document.getElementById("status");
    const progressElement = document.getElementById("progress");
    const spinnerElement = document.getElementById("spinner");
    const canvasElement = document.getElementById("canvas");
    const outputElement = document.getElementById("output");
    const outputContainerElement = document.getElementById("output-container");
    const qrElement = document.getElementById("QRCode");
    const qr2Element = document.getElementById("QR2Code");
    const qrButton = document.getElementById("QRButton");
    const qr2Button = document.getElementById("QR2Button");
    const pauseMenu = document.getElementById("pauseMenuContainer");
    const resumeButton = document.getElementById("resumeButton");
    const quitButton = document.getElementById("quitButton");
    const messageContainerElement = document.getElementById("message-container");
    const messagesElement = document.getElementById("messages");
    
    // Update Module.canvas reference after DOM is loaded
    Module.canvas = canvasElement;

    let rollbackMessages = [];
    let clearRollbackMessagesTimeoutId = -1;
    var loadprogress = 0;
    var startingHeight, startingWidth, startingAspect;
    const CHANGE_ASPECT_RATIO = true;

    // Background Color Changer Function
    function changecolor(el) {
        document.body.style.backgroundColor = el.value;
    }

    // Show Rollback Messages
    const showRollbackMessage = function (message) {
        if (!messagesElement || !messageContainerElement) return;

        rollbackMessages.push(message);
        let messagesHTML = rollbackMessages.map(m => `<p>${m}</p>`).join("");
        messagesElement.innerHTML = messagesHTML;
        messageContainerElement.style.display = 'block';

        if (clearRollbackMessagesTimeoutId !== -1) {
            clearTimeout(clearRollbackMessagesTimeoutId);
        }
        clearRollbackMessagesTimeoutId = setTimeout(clearRollbackMessages, 5000);
    };

    const clearRollbackMessages = function () {
        rollbackMessages = [];
        if (messageContainerElement) messageContainerElement.style.display = 'none';
        clearRollbackMessagesTimeoutId = -1;
    };

    // Module Object
    const Module = {
        preRun: [],
        postRun: [],
        totalDependencies: 0,

        print: (function () {
            if (!outputElement) return () => {};
            outputElement.value = ""; // clear browser cache
            return function (text) {
                if (arguments.length > 1)
                    text = Array.prototype.slice.call(arguments).join(" ");

                if (text === "Starting WAD") loadprogress += 1;
                if (loadprogress === 1 && Module.setStatus) Module.setStatus(text);
                else if (loadprogress >= 2 && Module.setStatus) Module.setStatus("");

                // Only log meaningful console messages
                const ignoreStrings = [
                    "layer_set_visible() - could not find specified layer in current room",
                    "layer_tilemap_get_id() - specified tilemap not found",
                    "layer_depth() - can't find specified layer",
                    "draw_tilemap() - couldn't find specified tilemap",
                    "layer_get_all_elements() - can't find specified layer"
                ];
                if (!ignoreStrings.includes(text)) console.log(text);

                if (text === "Entering main loop.") {
                    ensureAspectRatio();
                    loadprogress += 1;
                }

                if (outputElement && !ignoreStrings.includes(text)) {
                    outputElement.value += text + "\n";
                    outputElement.scrollTop = outputElement.scrollHeight;
                }
            };
        })(),

        printErr: function (text) {
            if (arguments.length > 1) text = Array.prototype.slice.call(arguments).join(" ");
            console.error(text);
        },

        canvas: canvasElement || null,

        setStatus: function (text) {
            // Add null checks for all elements before accessing properties
            if (!Module.setStatus.last) Module.setStatus.last = { time: Date.now(), text: "" };
            if (text === Module.setStatus.last.text) return;

            var m = text ? text.match(/([^(]+)\((\d+(\.\d+)?)\/(\d+)\)/) : null;
            var now = Date.now();
            if (m && now - Module.setStatus.last.time < 30) return;

            Module.setStatus.last.time = now;
            Module.setStatus.last.text = text;

            if (m) {
                if (progressElement) {
                    progressElement.value = parseInt(m[2]) * 100;
                    progressElement.max = parseInt(m[4]) * 100;
                    progressElement.hidden = false;
                }
                if (spinnerElement) {
                    spinnerElement.hidden = false;
                }
            } else {
                if (progressElement) {
                    progressElement.value = null;
                    progressElement.max = null;
                    progressElement.hidden = true;
                }
                if (!text && spinnerElement && canvasElement) {
                    spinnerElement.style.display = "none";
                    canvasElement.style.display = "block";
                }
            }

            if (statusElement) statusElement.innerHTML = text || "";
        },

        monitorRunDependencies: function (left) {
            this.totalDependencies = Math.max(this.totalDependencies, left);
            if (Module.setStatus) {
                Module.setStatus(
                    left
                        ? "Preparing... (" + (this.totalDependencies - left) + "/" + this.totalDependencies + ")"
                        : "All downloads complete."
                );
            }
        }
    };

    // Error Handling
    window.onerror = function (event) {
        if (Module.setStatus) Module.setStatus("Exception thrown, see JavaScript console");
        if (spinnerElement && spinnerElement.style) spinnerElement.style.display = "none";

        Module.setStatus = function (text) {
            if (text) Module.printErr("[post-exception status] " + text);
        };
    };

    // Ensure Aspect Ratio
    function ensureAspectRatio() {
        if (!canvasElement || !CHANGE_ASPECT_RATIO || startingHeight === undefined || startingWidth === undefined) return;

        canvasElement.classList.add("active");

        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        let newWidth, newHeight;

        const heightQuotient = startingHeight / maxHeight;
        const widthQuotient = startingWidth / maxWidth;

        if (heightQuotient > widthQuotient) {
            newHeight = maxHeight;
            newWidth = newHeight * startingAspect;
        } else {
            newWidth = maxWidth;
            newHeight = newWidth / startingAspect;
        }

        canvasElement.style.height = newHeight + "px";
        canvasElement.style.width = newWidth + "px";
    }

    // Pause/Resume
    function pause() {
        if (!canvasElement || !canvasElement.classList.contains("active")) return;
        if (pauseMenu) pauseMenu.hidden = false;
        if (canvasElement) canvasElement.classList.add("paused");
    }

    function resume() {
        if (!canvasElement) return;
        if (pauseMenu) pauseMenu.hidden = true;
        canvasElement.classList.remove("paused");
        canvasElement.classList.add("unpaused");
    }

    // Resize Observer
    if (bodyElement) {
        const resizeObserver = new ResizeObserver(() => {
            window.requestAnimationFrame(ensureAspectRatio);
            setTimeout(() => window.requestAnimationFrame(ensureAspectRatio), 100);
        });
        resizeObserver.observe(bodyElement);
    }

    // Disable Scrolling on Mobile
    if (/Android|iPhone|iPod/i.test(navigator.userAgent)) {
        if (bodyElement) bodyElement.className = "scrollingDisabled";
        if (canvasElement) canvasElement.classList.add("animatedSizeTransitions");
        if (outputContainerElement) outputContainerElement.hidden = true;
    }

    // Visibility Change
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState !== "visible") pause();
    });

    // Window Load
    window.addEventListener("load", () => {
        if (quitButton && (!window.oprt || !window.oprt.enterFullscreen)) quitButton.hidden = true;
    });

    // Expose Module globally if needed
    window.Module = Module;

    // Additional safety check for canvas element
    if (!canvasElement) {
        console.warn("Canvas element not found. Some features may not work correctly.");
    }

}); // End DOMContentLoaded

// Define missing global functions that runner.js expects
window.manifestFiles = function() {
    // Return empty string if no manifest files
    return "";
};

window.manifestFilesMD5 = function() {
    // Return empty array if no manifest files
    return [];
};

window.setAddAsyncMethod = function(ptr) {
    window.g_pAddAsyncMethod = ptr;
};

window.g_pWadLoadCallback = null;
window.g_pAddAsyncMethod = null;
