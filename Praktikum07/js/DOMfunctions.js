/**
 * Created by Sarah on 29.10.2014.
 */
(function ()	{
    var	result	=	[];
    walkTheDom(document.body,
        function	(el)	{
            result.push(el.nodeName);
        },
        function(){}
    );
    console.log(result);
})();


function walkTheDom(start, elementFound, textFound) {

    if (start.hasChildNodes()) {
        for (var i = 0; i< start.childNodes.length; i++) {
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