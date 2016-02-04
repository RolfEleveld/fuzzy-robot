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
    //replace menu icons
    $('.mpsnow-TopNavigationNode').toggleClass('selected')
    
    //replace page icon
    document.head.innerHTML = document.head.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.galliker.com/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Helvetica, Arial, sans-serif');

        //Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#780121}');

        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#780121');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(237, 114, 11\)/g, '#902f49');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 108, 10\)/g, '#902f49');

        //Sidebar Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#f6f6f6');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 204, 153\)/g, '#f6f6f6');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ffcc99/g, 'f6f6f6');
        
        //background color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-core-overlay[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'ms-core-overlay{background-color:#fff;}');
    }

    //CSS updates
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\n";

    //replace logo
    $('#mpsnow-Logo > img').attr('style', "display:none");
    $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.galliker.com/design/galliker2015302/custom/logo.png');background-position-x:27.5px; background-size:contain;background-repeat:no-repeat;background-color:#780121");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/gmz/g, 'Beck').replace(/GMZ/g, 'Galliker AG');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Galliker AG');
    
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://tse1.mm.bing.net/th?&amp;id=OIP.M07824d5e7a11559fd9179965038e4469o1&w=130&h=176&c=0&pid=1.9&rs=0&p=0&r=0');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Rolf Galliker');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'https://tse1.mm.bing.net/th?&amp;id=OIP.M389cecd17b4c9a03b3732954586694d8o1&w=135&h=184&c=0&pid=1.9&rs=0&p=0&r=0');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Peter Galliker');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/06a/291/1968431.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Fabian Studer');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Ester Studer');

    // Content TimeLine
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635884501730000000/g, 'http://www.galliker.com/media/138BBF4D-155D-C846-015DA70D9C91A930/Visualisierung_LC4-n.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Baustart zweite Etappe Logistikcenter 4');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'http://www.galliker.com/media/9C249D5D-155D-C846-01D8FE9B5EBDB3B5/Apotheke_2-n.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Galliker AG./g, 'Neu: Temperaturgeführte Transporte von Kleinsendungen ');
    document.body.innerHTML = document.body.innerHTML.replace(/>[ \t\n\r]*Happy Birthday[^<]+</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Galliker AG-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Neue Galliker Verteilplattform für die Südostschweiz');
    document.body.innerHTML = document.body.innerHTML.replace(/>Die Galliker AG-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'http://www.galliker.com/media/EB9EC3CD-155D-C846-01211F68F99E44D0/Visualisierung_Projekt_Plattform_Landquart-n.jpg');
    
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.galliker.com/media/EB1FDD96-155D-C846-0113E3A996D9A27A/Kombinierter_Verkehr-n.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635747988240000000"/g, '"http://www.galliker.com/media/B7BAC62A-DC1D-7268-36798B0C462AE0D8/Banner_news-t.jpg"');
    
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        // images on content
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
    
    // reiterate content colors
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(216, 216, 216\)/g, '#f6f6f6');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 204, 153\)/g, '#f6f6f6');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ffcc99/g, 'f6f6f6');
    } 
}
customize();