// ==UserScript==
// @name         Chegg Uuid
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.chegg.com/homework-help/questions-and-answers/*
// @require      https://code.jquery.com/jquery-3.0.0-beta1.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    var element = document.scripts;
    for (let i = 0; i < element.length; i++) {
        var check = element[i].text
        var data = {
            check: check
        };
        try {
            var json = JSON.stringify(data).replaceAll("\\", "");
            var j = json.match(new RegExp(`uuid` + "(.*)" + `"body":`));
            var normalUuid = j[1].replaceAll("\\", "").replaceAll(":", "").replaceAll("\"", "").replaceAll(",", "")

            var textArea = document.createElement("textarea");
            textArea.style.position = 'fixed';
            textArea.style.top = 0;
            textArea.style.left = 0;

            // Ensure it has a small width and height. Setting to 1px / 1em
            // doesn't work as this gives a negative w/h on some browsers.
            textArea.style.width = '2em';
            textArea.style.height = '2em';

            // We don't need padding, reducing the size if it does flash render.
            textArea.style.padding = 0;

            // Clean up any borders.
            textArea.style.border = 'none';
            textArea.style.outline = 'none';
            textArea.style.boxShadow = 'none';

            // Avoid flash of the white box if rendered for any reason.
            textArea.style.background = 'transparent';

            textArea.value = normalUuid;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            navigator.clipboard.writeText(textArea.value);

            alert("Click \"OK\" to copy: "+normalUuid)
        } catch (err) {
            //pass
        }
    }
})();