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


}