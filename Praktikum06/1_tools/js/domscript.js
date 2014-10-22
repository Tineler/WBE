function dom_init() {
    $("a.menu").click(function() {
        $("html, body").animate({ scrollTop: $(document).height()}, "fast");
    });

    $("li.top a").click(function() {
        $("body").animate({ scrollTop: 0}, "fast");
    });
}