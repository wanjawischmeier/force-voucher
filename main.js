javascript:(
    function(e) {
        e.setAttribute("src","JS-URL-to-inject");
        document.getElementsByTagName("body")[0].appendChild(e);
    }
)
(
    document.createElement("script")
);
void(0);