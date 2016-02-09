//Load this script
//$.getScript("./Replace.js")

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
    //swich active menu icons
    //$('.mpsnow-TopNavigationNode').toggleClass('selected')
    
    //replace page icon
    document.head.innerHTML = document.head.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.ldc-holding.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Verdana, Arial, Helvetica, sans-serif');

        //Sidebar
        // right
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:rgb(51, 51, 51)}');

        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#bd1a1f');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(237, 114, 11\)/g, '#bd1a1f');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 108, 10\)/g, '#bd1a1f');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#e2e2e2');
        // selected menu color: #bd1a1f
        // not selected menu color: #e2e2e2

        //Sidebar Menu color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 204, 153\)/g, '#f8eabc');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ffcc99/g, 'f8eabc');
        
        //background color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-core-overlay[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'ms-core-overlay{background-color:#fff;}');
    }

    //CSS updates
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\n";

    //replace logo
    $('#mpsnow-Logo > img').attr('style', "display:none");
    $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.ldc-holding.ch/fileadmin/templates/gui/_LOGO_LAC.gif');background-position-x:20px;background-size:contain;background-repeat:no-repeat;background-color:#f8eabc");
    $('#mpsnow-currentUser-Link').attr('style', "color:#000;");

    // left sidebar menu:
    $("#sideNavBox").attr("style", "background-color:rgb(255, 201, 14);")
     
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'Standorte');
    
    // Content TimeLine
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635884501730000000/g, 'http://www.ldc-holding.ch/typo3temp/pics/77cb1becd0.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Abadía Retuerta LeDomaine');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.ldc-holding.ch/typo3temp/pics/c1523fc405.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/>[ \t\n\r]*75.Jahre[^<]+</g, '>Chinesischer Ansturm auf Bordeaux<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[ \t\n\r]*Happy Birthday[^<]+</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]+Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy[ \t\n\r]*</g, '>Seresin: 20 Jahre biodynamische Weinkultur<');
    document.body.innerHTML = document.body.innerHTML.replace(/>Die[^<]+-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.ldc-holding.ch/typo3temp/pics/f294bd9f3e.jpg');
    
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.ldc-holding.ch/typo3temp/pics/0c9dbef1b4.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635747988240000000"/g, '"http://www.ldc-holding.ch/typo3temp/pics/5c9e645c57.jpg"');
    
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        // images on content weinkellerei
        $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.ldc-holding.ch/fileadmin/templates/gui/_LOGO_WKA.gif');background-position-x:20px;background-size:contain;background-repeat:no-repeat;background-color:#f8eabc");
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/9c53cfd897.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Ulrich Stucky');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/6dd0ce469e.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Konrad Duttwiler');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Beat Bolzhauser');
        document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Stéphane Meyer');

        document.body.innerHTML = document.body.innerHTML.replace(/[gG][mM][zZ]/g, 'Weinkellereien Aarau');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Weinkellereien Aarau AG');
        document.body.innerHTML = document.body.innerHTML.replace(/[Kk ]+iosk/g, 'Weinkellereien Aarau AG');
    }
    // Workspaces
    if ($('#pageTitle').text().trim() === "Workspaces") {
        firstfrequencies();
        // image and content Lagerhaus Aarau
        $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.ldc-holding.ch/fileadmin/templates/gui/_LOGO_LAG_NEU.gif');background-position-x:20px;background-size:contain;background-repeat:no-repeat;background-color:#f8eabc");
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Beat Bolzhauser');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/64a57a9f5e.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Hanswerner Kaelin');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Beat Bolzhauser');
        document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Stéphane Meyer');

        document.body.innerHTML = document.body.innerHTML.replace(/[gG][mM][zZ]/g, 'Lagerhäuser Aarau');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Lagerhäuser Aarau AG');
        document.body.innerHTML = document.body.innerHTML.replace(/[Kk ]+iosk/g, 'Lagerhäuser Aarau AG');
    }
    if ($('#pageTitle').text().trim() === "Content") {
        firstfrequencies();
        secondfrequencies();
        // images and content oel pool
        $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.ldc-holding.ch/fileadmin/templates/gui/_LOGO_Oelpool.gif');background-position-x:20px;background-size:contain;background-repeat:no-repeat;background-color:#f8eabc");
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/da86ae2df9.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Daniel Sieber');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/6dd0ce469e.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Konrad Duttwiler');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Beat Bolzhauser');
        document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Stéphane Meyer');

        document.body.innerHTML = document.body.innerHTML.replace(/[gG][mM][zZ]/g, 'Oel-Pool');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Oel-Pool AG');
        document.body.innerHTML = document.body.innerHTML.replace(/[Kk ]+iosk/g, 'Oel-Pool AG');
    }
    if ($('#pageTitle').text().trim() === "People") {
          
    }
    if ($('#pageTitle').text().trim() == "News") {
        // images and content Cotra autotransport
        $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.ldc-holding.ch/fileadmin/templates/gui/_LOGO_Cotra.gif');background-position-x:20px;background-size:contain;background-repeat:no-repeat;background-color:#f8eabc");
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/8483abc7ec.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Martin Furrer');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/6dd0ce469e.png');
        document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Konrad Duttwiler');
        document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Beat Bolzhauser');
        document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Stéphane Meyer');

        document.body.innerHTML = document.body.innerHTML.replace(/[gG][mM][zZ]/g, 'Cotra Autotransport');
        document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Cotra Autotransport AG');
        document.body.innerHTML = document.body.innerHTML.replace(/[Kk ]+iosk/g, 'Cotra Autotransport AG');
    }
    //Potal?
    $("div.slick-track img").each(function (index) {
        switch (index) {
            case 1:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/117/O_14fbb217-33a4-4d40-9544-a275d32b7abe.jpg";
                break;
        }
    });
    
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/c6268cb8dc.png');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Stéphane Meyer');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/6dd0ce469e.png');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Konrad Duttwiler');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://www.ldc-holding.ch/typo3temp/GB/02cd7670f1.png');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Beat Bolzhauser');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Martin Furrer');

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/[gG][mM][zZ]/g, 'Lagerhäuser der Centralschweiz');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Lagerhäuser der Centralschweiz AG');
    document.body.innerHTML = document.body.innerHTML.replace(/[Kk ]+iosk/g, 'Lagerhäuser der Centralschweiz AG');

    // reiterate content colors
    for (var count = 0; count < document.styleSheets.length; count++) {
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#f6f6f6');
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 204, 153\)/g, '#f6f6f6');
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ffcc99/g, 'f6f6f6');
    } 
}
customize();