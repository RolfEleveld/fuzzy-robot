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
    //var styleSheet: HTMLElement = document.createElement('STYLE');
    //styleSheet.setAttribute("type",'text/css');
    //styleSheet.setAttribute("rel", 'stylesheet');
    //styleSheet.setAttribute("href", 'https://raw.githubusercontent.com/RolfEleveld/fuzzy-robot/master/RerenderContent/CamionTransport/Theme.css');
    //document.head.appendChild(styleSheet);
    //replace menu icons
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.camiontransport.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].href;
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, 'rgb(170, 43, 62)');
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.camiontransport.ch/portaldata/1/images/logo_symbol.gif");
    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'Camion Transport').replace(/GMZ/g, 'Camion Transport');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'CT').replace(/GMZ/g, 'Camion Transport');
    // hashtags
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/vc0065\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/081/1b2/095ace7.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Josef A. Jäger');
    document.body.innerHTML = document.body.innerHTML.replace(/vc0065\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'x1.xingassets.com/image/a_5_f_5e5312c87_23268962_1/josef-jäger-foto.256x256.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Reto Schenk');
    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        $('.mpsnow-feed-RowContainer')[0].remove();
        // images on content
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.camiontransport.ch/PortalData/1/Resources/bilder/aktuelles/CT_90Anni_01.jpg');
        document.body.innerHTML = document.body.innerHTML.replace(/75 Jahr/g, '90 Jahr');
        document.body.innerHTML = document.body.innerHTML.replace(/das Fitnessunternehmen Inline\/Injoy/g, 'der Jost Transport GmbH, Rümlang');
        document.body.innerHTML = document.body.innerHTML.replace('Die Camion Transport-Tochtergesellschaft Migros Freizeit Deutschland GmbH übernimmt die deutsche Firma INLINE Beratung für Fitnessanlagen', 'CAMION TRANSPORT AG (CT) übernimmt die Bereiche Transport und Logistik der Jost Transport GmbH in Rümlang per 1. Januar 2016.');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.camiontransport.ch/PortalData/1/Resources/bilder/aktuelles/CT_JostTransporte.jpg');
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
}
customize();
//# sourceMappingURL=Replace.js.map