TrelloPowerUp.initialize(
    {
        "card-buttons": function (t, options) {
            return [
                {
                    icon: "https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421",
                    text: "Summary",
                    //callback: copySummary,
                    callback: function (t) {
                        return t.popup({
                                title: "Simple popup"
                            }
                        )
                    }
                }
            ];
        },
    });

const copySummary = function (t) {
    const text = "XXXXX"
    setTimeout(function () {
        copyTextToClipboard(text)
    }, 3000)
}

function copyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });

    document.body.removeChild(textArea);
}