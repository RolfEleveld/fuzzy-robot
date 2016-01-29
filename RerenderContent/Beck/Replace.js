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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.Becktransport.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#117277');
        //Fonts
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Verdana,Geneva,Arial,Helvetica');
        //Sidebar
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#202020}');
        //Menu color
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#F3ECE6');
    }

    //CSS updates
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\n";
    //rounded corners
    // ".topradius7 {border-radius: 7px 7px 0 0;position: relative;}"

    //replace logo
    $('#mpsnow-Logo > img').attr('style', "display:none");
    $('div.ms-breadcrumb-top').attr('style', "background-image: url('data:image/gif;base64,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'); background-size: contain;background-repeat: no-repeat; background-color:#000");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'Beck').replace(/GMZ/g, 'Beck');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Beck');
    // hashtags
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.becktransport.ch/bilder/team_ubeck.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Urs Beck');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.becktransport.ch/bilder/team_tmarizzi.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Thomas Marizzi');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.becktransport.ch/bilder/team_uhirnschall.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Uwe Hirnschall');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Thomas Kanis');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        // images on content
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635884501730000000/g, 'http://www.becktransport.ch/bilder/beck_mauren.jpg');
        document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'E.L.V.I.S AG');
        document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
        document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.becktransport.ch/bilder/stimmungsbild_3.jpg');
        document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Beck./g, 'Wir möchten was bewegen');
        document.body.innerHTML = document.body.innerHTML.replace(/>Happy Birthday[^<]+</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
        document.body.innerHTML = document.body.innerHTML.replace(/Beck-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, '4x Volvo FH 500 EURO 6');
        document.body.innerHTML = document.body.innerHTML.replace(/>Die Beck-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.becktransport.ch/bilder/galerie/gross/galerie_32.jpg');
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