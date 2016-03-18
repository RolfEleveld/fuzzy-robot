/*
//Load this script
$.getScript("./Replace.js")
*/
function firstfrequencies() {
    // set frequency bar heights
    if ($('span.mp-crwpRangeHistogramBar')[0]) {
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
        $('span.mp-crwpRangeHistogramBar')[10].style.height = "calc(25% - 2px)";
    }
}
function secondfrequencies() {
    //second frequencies
    if ($('span.mp-crwpRangeHistogramBar')[11]) {
        $('span.mp-crwpRangeHistogramBar')[11].style.height = "calc(35% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[12].style.height = "calc(55% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[13].style.height = "calc(55% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[14].style.height = "calc(45% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[15].style.height = "calc(55% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[16].style.height = "calc(95% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[17].style.height = "calc(75% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[18].style.height = "calc(85% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[19].style.height = "calc(50% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[20].style.height = "calc(55% - 2px)";
        $('span.mp-crwpRangeHistogramBar')[21].style.height = "calc(59% - 2px)";
    }
}
function customize() {
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.scout24.ch/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#ff7500');
        // titles:#003468
        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, '"Open Sans",sans-serif;');
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:rgb(0, 52, 104);color:#FFF;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');

        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#fafbfc;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#FFF;}');
        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');
        // Portal highlights:
        //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ffcc99/g, '06c');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#FFF');

        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'its-stream-tile a{\\$1\\$2;background-color:#06c;color:#fff;}');                             
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.scout24.ch/css/svg/logo_scout24.svg");

    // Colors corrections
    $('h1 > a').attr('style', 'color:#06c !important;');
    $('.mp-crwpControlHeader').attr('style', 'color:#06c !important;');
    $('.mpsnow-ul-no-bullets > li > a').attr('style', 'color:#fff;');
    $('.mpsnow-large-link-text > a').attr('style', 'color:#fff;');    
    $('.mpsnow-link-text > a').attr('style', 'color:#fff;');    
    $('.mp-tvwpLink').attr('style','color:#06c');
    $('.mp-tvwpSelected > .mp-tvwpLink').attr('style','color:#ff7500');
    $('.its-stream-tile > a').attr('style','background-color:#06c;');
    $('.its-stream-tile-type').attr('style','color:#fff;border-bottom-color:#ff7500');
    $('.its-stream-tile-title').attr('style','color:#fff !important;');	
    $('.its-stream-tile-abstract').attr('style','color:#fff !important;');
    //$('.mp-crwpRangeHistogramBar').attr('style','background-color:#ccc !important;');
    
    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Scout24')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Scout24')
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/24a/380/21559f5.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Olivier Rihs');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/033/1f6/2014b96.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Sandro Zosso');
    //logged on user
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/0ae/121/1e1dbf9.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Christian Bailly');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Jean-Daniel Graf');
    document.body.innerHTML = document.body.innerHTML.replace(/Christoph Enderli/g, 'Martin Waeber');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.scout24.ch/media/1013/logo_immoscout24.png"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen in der Logistik Frische gekühlt.(<br \/>)*[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische gekühlt[^<]*</g, '>Ad cras per nisl<');

    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"background: url("http://www.scout24.ch/media/1019/logo_autoscout24.svg');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Accumsan per porta');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.scout24.ch/media/1020/logo_immoscout24.svg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Scout24./g, 'Leo justo');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Scout24-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Tempor neque');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Die Scout24-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.scout24.ch/neutral/media/1019/logo_autoscout24.svg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://www.scout24.ch/media/32136/immoscout24_2.jpg?crop=0,0.33666666666666667,0,0.22583333333333333&cropmode=percentage&width=1200&height=350&rnd=130749677460000000"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.scout24.ch/media/1020/logo_immoscout24.svg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812320000000"/g, '"http://www.scout24.ch/media/1034/logo_anibis.svg"');


    //Frequencies
    firstfrequencies();
    secondfrequencies();

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        $('.mpsnow-feed-RowContainer')[0].remove();
    }
    // Workspaces
    if ($('#pageTitle').text().trim() === "Workspaces") {
    }
    if ($('#pageTitle').text().trim() === "Content") {
    }
    if ($('#pageTitle').text().trim() === "People") {
    }
    if ($('#pageTitle').text().trim() == "News") {
    }
    //Potal?
    $("div.slick-track img").each(function(index) {
        switch (index) {
            case 1:
                this.src = "http://www.scout24.ch/media/32136/immoscout24_2.jpg?crop=0,0.33666666666666667,0,0.22583333333333333&cropmode=percentage&width=1200&height=350&rnd=130749677460000000&bgcolor=ffffff";
                break;
        }
    });
}
customize();
