/*
//Load this script
$.getScript("./Replace.js")
*/
function firstfrequencies() {
    // set frequency bar heights
    $('span.mp-crwpRangeHistogramBar')[0].style.height = "calc(45% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[1].style.height = "calc(55% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[2].style.height = "calc(65% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[3].style.height = "calc(75% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[4].style.height = "calc(85% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[5].style.height = "calc(95% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[6].style.height = "calc(85% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[7].style.height = "calc(95% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[8].style.height = "calc(85% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[9].style.height = "calc(35% - 2px)";
}
function secondfrequencies() {
    //second frequencies
    $('span.mp-crwpRangeHistogramBar')[10].style.height = "calc(25% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[11].style.height = "calc(35% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[12].style.height = "calc(55% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[13].style.height = "calc(55% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[14].style.height = "calc(45% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[15].style.height = "calc(55% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[16].style.height = "calc(95% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[17].style.height = "calc(75% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[18].style.height = "calc(85% - 2px)";
    $('span.mp-crwpRangeHistogramBar')[19].style.height = "calc(55% - 2px)";
}
function customize() {
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.losinger-marazzi.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#f07e1a');
        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Tahoma,Verdana,sans-serif;');
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#FFF}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');

        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background:url(http://www.losinger-marazzi.ch/wp-content/themes/losingerTheme/images/bg_menubar.png) repeat-y 5px 0 #FFF;color:#FFF;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#FFF;}');
        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#FFF');

        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#FFF');                     
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJEAAABKCAYAAAC7IbbPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAD/2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MTg2ODRDN0MzMDIwNjgxMTgwODNDMjlEOTdDMTlDMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDVDRTAyNUMzNzIyMTFFMkE3OUJBOTFBOUM5QzY5MDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDVDRTAyNUIzNzIyMTFFMkE3OUJBOTFBOUM5QzY5MDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgSWxsdXN0cmF0b3IgQ1M1LjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0idXVpZDo2MGUzZDdiOS0zYTViLWY1NDgtODhlZi00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");

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Losinger-Marazzi')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Losinger-Marazzi')
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://allgemeinebauzeitung.de/media/temp/csm_pv_18194_-_1sp_34378bae6d.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Stefan Heissler');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, '');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Uwe Rechtsteiner');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, '');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Andreas Böhm');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Denis Zosso');

 //TODO:: pull from need on Losinger-Marazzi site
    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"http://www.losinger-marazzi.ch/shared/media/corporate/news/news-2016/02/11/Losinger-Marazzi-news-national-apprenticeship_img_310.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Awards');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.losinger-marazzi.ch/shared/media/corporate/news/news-2016/02/09/Losinger-Marazzi-clean-sky2-itd-launch-review-participants-nov2015-72dpi_img_310.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Losinger-Marazzi./g, 'Events');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Losinger-Marazzi-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Material');
    document.body.innerHTML = document.body.innerHTML.replace(/>Die Losinger-Marazzi-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.losinger-marazzi.ch/shared/media/corporate/news/news-2016/02/08/Losinger-Marazzi-lr-11000-hanchang-handover2-72dpi_img_220.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635747988240000000"/g, '"http://www.losinger-marazzi.ch/shared/media/corporate/news/news-2016/02/09/Losinger-Marazzi-clean-sky2-itd-launch-review-participants-nov2015_img_710.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.losinger-marazzi.ch/shared/media/corporate/news/news-2016/01/27/gesch%C3%A4ftsentwicklung/Losinger-Marazzi-bauma-2013-72dpi_img_220.jpg"');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        $('.mpsnow-feed-RowContainer')[0].remove();
    }
    // Workspaces
    if ($('#pageTitle').text().trim() === "Workspaces") {
        firstfrequencies();
        secondfrequencies();
    }
    if ($('#pageTitle').text().trim() === "Content") {
        firstfrequencies();
        secondfrequencies();
    }
    if ($('#pageTitle').text().trim() === "People") {
    }
    if ($('#pageTitle').text().trim() == "News") {
    }
    //Potal?
    $("div.slick-track img").each(function (index) {
        switch (index) {
            case 1:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/117/O_14fbb217-33a4-4d40-9544-a275d32b7abe.jpg";
                break;
        }
    });
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
    }
}
customize();
