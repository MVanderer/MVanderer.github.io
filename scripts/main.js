
function goToBookmark(address) {
    let dir = document.getElementById(address);
    dir.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}




document.addEventListener("DOMContentLoaded", (e) => {
    let projects = {
        sb: {
            dom: document.getElementById("swordbuilder"),
            url: "http://18.223.203.241",
        },
        galleass: {
            dom: document.getElementById("galleass"),
            url: "https://github.com/MVanderer/Galleass",
        },
        skillet: {
            dom: document.getElementById("skillet"),
            url: "https://github.com/jollyblondgiant/skillet",
        },
    };

    for (let key in projects) {
        projects[key].dom.addEventListener("touchend", (e) => {
            goToProjPage(projects[key].dom, projects[key].url);
        });
        projects[key].dom.addEventListener("click", (e) => {
            goToProjPage(projects[key].dom, projects[key].url);
        });
    }

    function goToProjPage(domElem, url) {
        if (window.innerWidth > window.innerHeight) {
            if (domElem.clientWidth >= Math.floor(window.innerWidth * 0.75)) {
                window.location.href = url;
            };
        }
        else {
            if (domElem.clientHeight >= Math.floor(domElem.parentElement.parentElement.clientHeight * 0.75)) {
                window.location.href = url;
            };

        }
    }
});


