function openNav() { 
    document.getElementById("sidebar").style.width = "250px"; 
}

function closeNav() { 
    document.getElementById("sidebar").style.width = "0"; 
}

fetch("sidebar.html")
    .then(res => res.text())
    .then(html => {
        document.getElementById("sidebar").innerHTML = html;
    });
