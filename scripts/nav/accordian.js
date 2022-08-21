window.addEventListener("DOMContentLoaded", () =>
{
    var accordians = document.querySelectorAll('nav[class="accordian"]');
    var submenus = null;

    accordians.forEach(a => a.querySelectorAll("li").forEach(e => e.querySelectorAll("header").forEach(e => e.addEventListener("click", function(args)
    {
        var attribute = "aria-expanded";
        var value = e.parentElement.getAttribute(attribute);
        value = value === null || value === "false";
        e.parentElement.setAttribute(attribute, value);
        args.stopImmediatePropagation();
    }))));
});