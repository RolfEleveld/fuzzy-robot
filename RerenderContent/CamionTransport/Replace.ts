/// <reference path="jquery.d.ts"/>
/*
// depends on https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/627b6c158b73494c803f36fc2fe00ad75faa8fde/jquery/jquery.d.ts
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
    //load the style
    var styleSheet: HTMLElement = document.createElement('STYLE');
    styleSheet.setAttribute("type",'text/css');
    styleSheet.setAttribute("rel", 'stylesheet');
    styleSheet.setAttribute("href", 'https://raw.githubusercontent.com/RolfEleveld/fuzzy-robot/master/RerenderContent/CamionTransport/Theme.css');
    document.head.appendChild(styleSheet);

    //replace menu icons

    //replace page icon
    http://www.camiontransport.ch/favicon.ico

    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.camiontransport.ch/portaldata/1/images/logo_symbol.gif");

    //replace gmz
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'Camion Transport').replace(/GMZ/g, 'Camion Transport');

    // hashtags

    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Kassensystem/g, 'Electro');

    // belending the icons on the right side
    $("ul.mpsnow-ul-no-bullets img").each(function (index) {
        this.style.opacity = 0.99;
    });

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();

        //Setting images
        $('.mpsnow-post-image > img')[0].setAttribute("src", "http://www.burkhalter.ch/img/catalogue/0/1232/80_53_71bcacc5-61e9-4701-a770-fe3f5384feb5.jpg");

        // Setting content
        $('.mpsnow-feed-date')[0].innerText = "5/11/2015 at 12:23 PM";
        $(".mpsnow-post-text > blockquote > a:first-child")[0].innerText = "BK Weekly 24 - Generalversammlung 22. Mai 2015";
        $(".mpsnow-post-text > blockquote")[0].innerHTML = $(".mpsnow-post-text > blockquote")[0].innerHTML.replace(/<br>[^<]+<br>/, "<br>Generalversammlung, Swissôtel Zürich, Schulstrasse 44, 8050 Zürich; New Intranet for mobile and on the road updates; Good customer portfolio from May onwards.<br>");
    }
    // Workspaces
    if ($('#pageTitle').text().trim() === "Workspaces") {
        firstfrequencies();

        $('.mpsnow-feed-date')[0].innerText = "5/11/2015 at 12:23 PM";
        $(".mpsnow-post-text > blockquote")[0].innerText = "HR update for group";

        // next page indicator
        if ($("img.ms-promlink-button-right")[0]) {
            $("img.ms-promlink-button-right")[0].style.opacity = "0.3";
        }
    }
    if ($('#pageTitle').text().trim() === "Content") {
        firstfrequencies();
        secondfrequencies();
        // dates
        $('.mpsnow-feed-date')[0].innerText = "5/11/2015 at 12:23 PM";

        //headings
        $('h2.mpsnow-feedHeader > a')[0].innerText = 'BK Weekly 24';

    }
    if ($('#pageTitle').text().trim() === "People") {
       // Nothing now
    }
    if ($('#pageTitle').text().trim() == "News") {
        $("div.news-compositeWP-teaser-title span").each(function (index) {
            this.style.color = "#bbb";
        });

        $("div.news-compositeWP-teaser-title span")[0].innerText = "BK Weekly 24";
        $('img.news-compositeWP-teaser-imageContainer')[0].setAttribute("src", "http://www.burkhalter.ch/img/catalogue/0/1232/80_53_cc6488eb-c204-4c43-987b-0b7a902d2d45.jpg");
        $("div.news-compositeWP-teaser-abstract")[0].innerHTML = $("div.news-compositeWP-teaser-abstract")[0].innerHTML.replace(/^[^<]+/, "Joining efforts with Kolb group has shared a few ideas and concepts of cable improvements. Teh speed of wiring an installation is particularly one that has major improvements. Not ony in teh quality of teh result, also in the speed at which the cabling can be done.");
    
    }
    //Potal?
    $("div.slick-track img").each(function (index) {
        switch(index){
            case 1:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/117/O_14fbb217-33a4-4d40-9544-a275d32b7abe.jpg";
                break
            case 2:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/1232/O_6fb9b0aa-111b-46f6-a837-2e4a0b68b57c.jpg";
                break;
            case 3:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/117/O_6b654689-d97d-4a5f-8ae9-1f552dcfbafc.jpg";
                break;
            case 4:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/1232/O_71bcacc5-61e9-4701-a770-fe3f5384feb5.jpg";
                break;
            case 5:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter-technics.ch/img/catalogue/0/11/O_fb502cc2-dfef-4a8f-90c7-8b54b48189b7.jpg";
                break;
        }
    });
    $('div.its-nav-first h1').each(function (index) {
        if (this.innerText.trim() == "Product" && index == 1) {
            this.innerText = "External";
        }
        if (this.innerText.trim() == "External" && index == 3) {
            this.innerText = "Services";
            $('div.its-nav-first')[3].innerHTML = $('div.its-nav-first')[3].innerHTML.replace(/Tools/g, "Electrical Engineering")
                .replace(/SBB/g, "Installations").replace(/A Site to Search the Internet/g, "Services")
                .replace(/Internal/g, "Switchboards").replace(/Legacy Task Management/g, "Telematics").replace(/CRM/g, "Automation");
        }
    });
}
customize();