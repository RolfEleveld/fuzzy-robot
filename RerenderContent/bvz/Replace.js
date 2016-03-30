/*
//Load this script
$.getScript("./Replace.js")
*/
function firstfrequencies() {
    // set frequency bar heights
    if ($('span.mp-crwpRangeHistogramBar')[0]){
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
}
function secondfrequencies() {
    //second frequencies
    if ($('span.mp-crwpRangeHistogramBar')[10]){
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
}
function customize() {
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.bvzholding.ch/favicon.ico");

    // style menu colors
    $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
    $('.mpsnow-TopNavigationNode').toggleClass('selected')

    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#000');

        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Arial,Helvetica,sans-serif;');        
        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-image:url(http://www.bvzholding.ch/publishingimages/bg.gif);color:#000;}');
        
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#f1f5f8; color:#000}');
        // Left menu look and feel
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)margin-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;margin-left:0;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ui-slider-range[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ui-slider-range{\\$1\\$2;background-color:#93b2c6;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]*{([^}]*)border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1\\$2;border-top-color:#93b2c6;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]*{([^}]*) ?width[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1\\$2;width:100%;}');
        //    border-top: solid 1px #93b2c6;

        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-image:linear-gradient(to bottom, rgb(167, 170, 175) 0%, rgb(107, 109, 113) 100%);color:#fff;}');
        // Menu-Selected
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\\$1\\$2;background-image:linear-gradient(to bottom, rgb(207, 211, 219) 0%, rgb(247, 251, 252) 100%);color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:rgb(187,187,187);}');
        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigation(Node)*[ \t\n\r]*{([^}]*)border-right-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigation\\$1{\\$2\\$3;border-right-color:rgb(130,130,130);border-right-width:1px;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#mpsnow-Logo[ \t\n\r]*{([^}]*)border-right-color[^;}]+([^}]*)}/g, '#mpsnow-Logo{\\$1\\$2;border-right-color:rgb(130,130,130);border-right-width:1px;}');        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1;border-top-color:rgb(87, 122, 154);}');

        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#525E68;');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');

        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#d1d3d4');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#d1d3d4');
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.bvzholding.ch/publishingimages/logo.gif");

    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://media.licdn.com/media/p/1/005/079/304/2d67fdc.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Fernando Lehner');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, '');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Alice Kalbermatter');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Martin Berchtold');
    //logged on user
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'http://webresizer.com/resizer/download.cgi?session=eWuTfnmz36OWjyBamIrtdgjVhHg8XAiU&from=result.jpg&to=brig-glis-ernennung-3-neuer-geschaeftsleitungsmitglieder-bei-der-mgb-37080%5B1%5D_opt.jpg&type=jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Marco Tacchella');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.bvzholding.ch/de/konzern/tochtergesellschaften/gornergrat-bahn-ag/PublishingImages/Logo-GGB.gif"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen in der Logistik Frische gekühlt.(<br \/>)*[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische gekühlt[^<]*</g, '>Nisl tempor lacinia duis<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"http://www.bvzholding.ch/de/konzern/tochtergesellschaften/bvz-asset-management-ag/PublishingImages/logo-BVZ-AssetManagement.gif")');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Ad cras per nisl tempor');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.bvzholding.ch/de/konzern/tochtergesellschaften/matterhorn-gotthard-bahn-ag/PublishingImages/Logo-MGB.gif"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*75.Jahre[^<]*</g, '>Porttitor iaculis viverra condimentum<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/[^<]*-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy[^<]*</g, '>Tempor neque at dui libero<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Set and Reset.Reset Notturnino[^<]*</g, '>Mauris nibh risus<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Das Programm dieser[^<]+zu weisen.[^<]+</g, '>Sed ut dapibus diam. Integer pulvinar, dolor ullamcorper lacinia dignissim, erat sapien malesuada elit, et dictum nibh diam sit amet magna.<');    
    
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://awp.gornergratbahn.ch/Holding/de/Content/ContentB2CImageImage/komet_kl.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://awp.gornergratbahn.ch/Holding/de/Content/ContentB2CImageImage/ggb_kl.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://awp.gornergratbahn.ch/Holding/de/Content/ContentB2CImageImage/alpincargo_kl.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812320000000"/g, '"http://awp.gornergratbahn.ch/Holding/de/Content/ContentB2CImageImage/immobilien_kl.jpg"');

    //Frequencies
    firstfrequencies();
    secondfrequencies();

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'BVZ Holding')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'BVZ Holding')

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
    $("div.slick-track img").each(function (index) {
        switch (index) {
            case 1:
                this.src = "http://awp.gornergratbahn.ch/Holding/de/Content/ContentB2CImageImage/andermatt_kl.jpg";
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
