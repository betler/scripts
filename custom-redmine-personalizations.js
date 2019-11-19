// JS for Redmine & https://mybrowseraddon.com/custom-style-script.html Opera AddOn 
window.addEventListener("load", () => {
    // Remove progress bar and set a badge with % in text
    $.each($('[table.progress'), function (index, value) {
            $(value).removeClass("progress");
            var progress = value.classList.item(0).split("-")[1];
            $(value).empty();
            $(value).html('<div style="width:4em;font-weight:bold;background: #9DB9D5;color:white;padding: 0px 6px 1px 6px;border-radius: 3px;">' + progress + '%</div>');
        });

    $.each($('p.percent'), function (index, value) {
            $(value).remove();
        });

    // Replace text in all td (shorten project names, for example)
    $.each($('td'), function (index, value) {
        $(value).html($(value).html().replace("texto 1", "H2 - "));
    });
    
    // Make link to issues longer in children view and issues view
    $.each($('td.subject'), function (index, value) {
        $(value).html($(value).html().replace("</a>", "") + "</a>");
    });
}, false)

