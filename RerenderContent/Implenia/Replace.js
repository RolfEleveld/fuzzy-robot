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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.implenia.com/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#f7b512');
        //Fonts
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Verdana,Geneva,Arial,Helvetica');
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#000}');
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#000;color:#999;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#000;color:#999;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#000;}');

        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#999');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#999');
        // Background on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(102, 102, 102\)/g, '#000');
    }

    //CSS updates
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + "\n #s4-workspace{background-color:#000;color:#999;}\n #contentBox > div {background-color:#FFF;color:#000;}";

    //replace logo
    $('#mpsnow-Logo > img').attr('style', "display:none");
    $('div.ms-breadcrumb-top').attr('style', "background-image: url('http://www.implenia.com/includes/logo.png'); background-size: contain;background-repeat: no-repeat; background-color:#000");
    $('#mpsnow-currentUser-Link').attr('style', "color:white;");

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/[gG][Mm][zZ]/g, 'Implenia');
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Implenia');
    // hashtags
    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.implenia.com/files/media/s160x0/28ea4c7d63ebc4945b3fabeb9396f17c/Implenia-Adrian-Wyss.png');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Adryan Wyss');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.implenia.com/files/media/s160x0/bf689068b51aad17e764ccc26a4a1d8f/Implenia-joerg-kaiser.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Jörg Kaiser');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://web.fhnw.ch/plattformen/wirtschaftsforum/referenten/ImpleniaAntonAffentranger.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Anton Affentranger');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Guido Schmidt');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"http://e2.marco.ch/publish/implenia/289_6924/HUM.png"');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Board');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://e2.marco.ch/publish/implenia/289_6858/20160129_Aussenansicht_gross.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Implenia./g, 'New Projects');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Implenia-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Stuttgart - Ulm');
    document.body.innerHTML = document.body.innerHTML.replace(/>Die Implenia-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://e2.marco.ch/publish/implenia/289_6781/20120509_Tunnelportal_Wendlingen_klein.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635747988240000000"/g, '"http://e2.marco.ch/publish/implenia/289_3014/Grundsteinlegung8.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.implenia.com/files/media/s0x876/aeae9fd9e4bd878f82fbc95dd7102861/aal.jpg"');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
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
    // update lines
    for (var count = 0; count < document.styleSheets.length; count++) {
    
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#000;}');
    }    
}
customize();
//# sourceMappingURL=Replace.js.map