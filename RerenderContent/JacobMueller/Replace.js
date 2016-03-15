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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.mueller-frick.com/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#e2001a');
        // background buttons: #ebebec, selected menu background #e2001a 
        // bachground rest: #FFF, color: #555
        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'Arial,Verdana,Helvetica,sans-serif;');        
        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#f8f3ee;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+a[ \t\n\r]*{([ \t\n\r]*)color[^};]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection a{\\$1;\\$2;color:#333}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+.ms-webpart-titleText[ \t\n\r]*{([ \t\n\r]*)color[^};]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection .ms-webpart-titleText{\\$1;\\$2;color:#FFF;background-color:#E3C9AF;}');        
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#FFF; color:#555555}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');

        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#ebebec;color:#333;}');
        // Menu-Selected
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selected{\\$1\\$2;background-color:#e2001a;color:#FFF;}');

        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#E3C9AF;}');
        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1;border-top-color:#E3C9AF;}');

        // Text on menu
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#525E68;');
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#FFF');
        // document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-webpartzone-cell[ \t\n\r]*{([ \t\n\r]*)border-bottom-color:[^;}]+([^}]*)}/g, 'ms-webpartzone-cell{\\$1;\\$2;border-bottom-color:#e3c9af;}');
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#d1d3d4');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#d1d3d4');
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.mueller-frick.com/typo3conf/ext/sfptemplate/files/defaultdomain/images/logo.gif");
    $('.ui-accordion').attr('style', 'border-bottom:7px solid #ebebec');

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Jacob Müller AG')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Jacob Müller AG')
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/0ae/39c/09b23e7.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Reto Wassmer');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/0b0/37a/2efa43d.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Arno Zindel');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Christian Kuoni');
    //logged on user
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/067/2a9/3287991.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Robert Reimann');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.mueller-frick.com/fileadmin/user_upload/domain1/Home/globa_01.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen in der Logistik Frische gekühlt.(<br \/>)*[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische gekühlt[^<]*</g, '>Nisl tempor lacinia duis<');

    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"background: url("http://www.mueller-frick.com/typo3temp/pics/ACOTRONIC_1600_fe844e3f09.jpg")');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Ad cras per nisl tempor');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.mueller-frick.com/images/typo3temp/pics/UV60_Det_ccd4aedfde.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Jacob Müller AG./g, 'Porttitor iaculis viverra condimentum');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Jacob Müller AG-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Tempor neque at dui libero');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Die Jacob Müller AG-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.mueller-frick.com/typo3temp/pics/SCH4_b177efb4ba.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://www.mueller-frick.com/typo3temp/pics/weben_2deee320f2.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.mueller-frick.com/typo3temp/pics/weben_2deee320f2.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812320000000"/g, '"http://www.mueller-frick.com/fileadmin/user_upload/domain1/Home/kundensituation1.jpg"');

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
    $("div.slick-track img").each(function (index) {
        switch (index) {
            case 1:
                this.src = "http://www.mueller-frick.com/typo3temp/pics/weben_2deee320f2.jpg";
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
