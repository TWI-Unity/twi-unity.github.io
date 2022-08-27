var session = new Date().getTime();
var iframe = null;

function set(location)
{
    if (!location.hash) location.hash = "#installation";
    if (location.pathname.endsWith(".html")) location.pathname = location.pathname.substring(0, location.pathname.lastIndexOf('/'));
    if (iframe != null) iframe.src = location.protocol + '//' + location.host + location.pathname + location.hash.substring(1) + "?session=" + session;

    var element = document.querySelector("a[href='" + location.hash + "']");
    while(element != null && element.nodeName != "DETAILS") element = element.parentElement;
    if (element != null) element = element.parentElement;
    while(element != null)
    {
        if (element.nodeName == "DETAILS") element.setAttribute("open", "true");
        element = element.parentElement;
    }
}

window.addEventListener('hashchange', e => set(location));
window.addEventListener("DOMContentLoaded", () =>
{
    iframe = document.querySelector("iframe");
    set(location, true);
});