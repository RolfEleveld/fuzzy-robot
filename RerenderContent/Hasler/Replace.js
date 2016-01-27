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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.haslertransport.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#E3001B');
        //Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Verdana,Arial,Geneva,Helvetica,sans-serif');
        //Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#202020}');
        //Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#F3ECE6');
    }

    //CSS updates
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\n";
    //rounded corners
    // ".topradius7 {border-radius: 7px 7px 0 0;position: relative;}"

    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.haslertransport.ch/templates/tmpl_std/hasler-transport-neu2.png");
    $('div.ms-breadcrumb-top').attr('style', "background: url('http://www.haslertransport.ch/templates/tmpl_std/lastwagen.jpg') no-repeat 0% 0% #202020;");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'Hasler').replace(/GMZ/g, 'Hasler');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Hasler');
    // hashtags
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.haslertransport.ch/documents/pool/t0_dh-k.png');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Dominik Hasler');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.haslertransport.ch/documents/pool/timg_6604k.JPG');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Bruno Lusti');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.haslertransport.ch/documents/pool/t0_img_5865.JPG');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Valentin Hasler');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Beat Gnädinger');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        // images on content
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635884501730000000/g, 'http://www.haslertransport.ch/documents/news/h4_unbenannt.JPG');
        document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Lehrstellen');
        document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Ohne Sie steht alles still');
        document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Zwei Lehrlinge haben erfolgreich ihre Lehre abgeschlossen.');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.haslertransport.ch/documents/news/hp1080660-medium.JPG');
        document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Hasler./g, 'Weihnachtsfeier 2015');
        document.body.innerHTML = document.body.innerHTML.replace(/>Happy Birthday[^<]+</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
        document.body.innerHTML = document.body.innerHTML.replace(/Hasler-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Marco Oswald wird mit Iveco Markensieger');
        document.body.innerHTML = document.body.innerHTML.replace(/>Die Hasler-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.haslertransport.ch/documents/news/h11334069_10205960066155098_2833440809713667081_o.jpg');
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