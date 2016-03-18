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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.homegate.ch/favicon.ico");
    //Menu coloring.
    $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
    $('.mpsnow-TopNavigationNode.selectedmenu').removeClass("selected")
    $('.mpsnow-TopNavigationNode').toggleClass('selected')
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#e63232');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#[fF][fF]861[fF]/g, '#e63232');

        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, '"Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;');
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#373737;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+a[ \t\n\r]*{([ \t\n\r]*)color[^};]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection a{\\$1;\\$2;color:#fff}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+.ms-webpart-titleText[ \t\n\r]*{([ \t\n\r]*)color[^};]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection .ms-webpart-titleText{\\$1;\\$2;color:#FFF;background-color:#373737;}');

        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#f0f0f0;color:#5f5f5f;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#e63232;color:#fff;}');
        // Menu-Selected
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\\$1\\$2;background-color:#c83232;color:#fff;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#f0f0f0;}');
        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)border-right-width[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;border-right-width:0px;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#mpsnow-Logo[ \t\n\r]*{([^}]*)border-right-width[^;}]+([^}]*)}/g, '#mpsnow-Logo{\\$1\\$2;border-right-width:0px;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1;border-top-color:#373737;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-width[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-width:0px;}');
        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#44423e;');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:##e63232;color:#fff;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#fff;}');
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#d1d3d4');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#d1d3d4');
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.homegate.ch/ver-20160316081622/assets/img/homegate-logo-small.png");
    // Make top bar background red
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + '\n.ms-breadcrumb-top{background-color:#e63232;color:#fff;}';

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Homegate')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Homegate')
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAT-AAAAJGZlODA1ODkxLTY1NzUtNGY5MC1iNWU5LTdiZTkxMGM1NWExNg.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'David Cannizzaro');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/7/005/033/1f6/2014b96.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Marcel Allemand');
    //logged on user
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAOQAAAAJDRhZjE0YWJiLTZlN2EtNDMyYy04YmVhLTNiOWQxMTBiMmU3Mw.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Axel Konjack');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Urs Hügli');
    document.body.innerHTML = document.body.innerHTML.replace(/Christoph Enderli/g, 'Maja Gunterberg');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_0316_hypothekenvergleich.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen in der Logistik Frische gekühlt.(<br \/>)*[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische gekühlt[^<]*</g, '>Ad cras per nisl<');

    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"background: url("http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_0316_hypothek_erklaert.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Accumsan per porta');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_1119_hypotheken_abschliessen.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Homegate./g, 'Leo justo');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Homegate-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Tempor neque');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Die Homegate-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_0715_sicherheitshinweis.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_1117_umzugsplanung.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_0715_immobilienpartner.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812320000000"/g, '"http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_0715_tipps_insertion.jpg"');

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
                this.src = "http://www.homegate.ch/neutral/img/cms/homegate_5.0/L_720x300/l_1117_umzugsplanung.jpg";
                break;
        }
    });
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#f1f1f1');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#f1f1f1');
    }
}
customize();
