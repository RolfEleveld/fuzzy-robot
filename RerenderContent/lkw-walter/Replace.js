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
    //replace menu icons

    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.camiontransport.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#00529E');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Arial,Tahoma,sans-serif');
    }

    //Background
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\nbody{background: #00529E;overflow-y: scroll;z-index: 1;background-image: url('http://static.lkw-walter.ch/static/media/images/hintergrund-verlauf.png');position: relative;background-repeat: repeat-x;background-position: top left;}";
    //rounded corners
    // ".topradius7 {border-radius: 7px 7px 0 0;position: relative;}"

    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.lkw-walter.ch/-/m/images/lkw/allgemein/lkw-walter-logo-slogan.ashx?h=50&amp;la=en&amp;w=200&amp;nocompress=1");
    $('div.ms-breadcrumb-top').attr('style', "background-color:#00529E;");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");


    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'LKW-Walter').replace(/GMZ/g, 'LKW-Walter');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'LKW-Walter');
    // hashtags
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/000/12f/1e8/139b87f.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Leo Hintersteiner');
    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/0bd/0ff/0825ad0.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Vincent Beaufils');
    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'x1.xingassets.com/img/users/c/e/2/608a94f06.6034810,2.256x256.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Simon Friedl');
    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        // images on content
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.lkw-walter.ch/-/m/images/lkw/ueber-uns/lkw-walter-zentrale.ashx?h=160&amp;la=de&amp;mw=300&amp;w=300');
        document.body.innerHTML = document.body.innerHTML.replace(/75 Jahre LKW-Walter./g, '30 year bearer of the Austrian state emblem');
        document.body.innerHTML = document.body.innerHTML.replace(/>Happy Birthday[^<]+</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
        document.body.innerHTML = document.body.innerHTML.replace(/LKW-Walter-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'LKW-Walter green transport');
        document.body.innerHTML = document.body.innerHTML.replace(/>Die LKW-Walter-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.lkw-walter.ch/-/m/images/lkw/ueber-uns/header/lkw-walter-green-transport-header.ashx?h=160&amp;la=de&amp;mw=300&amp;w=300');
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