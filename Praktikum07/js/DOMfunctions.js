/**
 * Created by Sarah on 29.10.2014.
 */
(function () {
    var result = [];
    walkTheDom(document.body,
        function (el) {
            result.push(el.nodeName);
        },
        function () {
        }
    );
    console.log(result);
    reallyNiceBlockquotes();
})();


function walkTheDom(start, elementFound, textFound) {

    if (start.hasChildNodes()) {
        for (var i = 0; i < start.childNodes.length; i++) {
            var that = start.childNodes[i];
            if (that.nodeType == 3) {
                textFound(that);
            }
            else {
                elementFound(that);

                if (that.hasChildNodes()) {
                    walkTheDom(that, elementFound, textFound);
                }
            }
        }
    }
}

function reallyNiceBlockquotes() {
    var blockquotes = document.getElementsByTagName("blockquote");
    for (var i = 0; i < blockquotes.length; i++) {
        var blockquote = blockquotes[i];
        var cite = blockquote.getAttribute("cite");

        var p = document.createElement("p");
        p.className = "attribution";

        var a = document.createElement("a");
        a.href = cite;
        a.innerHTML = "source";

        p.appendChild(a);

        blockquote.appendChild(p);
    }
}
