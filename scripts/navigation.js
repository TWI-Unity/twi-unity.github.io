var iframe = null;

function set(location)
{
    if (iframe != null) iframe.src = location.protocol + '//' + location.host + location.pathname + location.hash.substring(1);

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
    set(location);
});