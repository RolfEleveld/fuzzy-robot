/*
//Load this script
$.getScript("./Replace.js")
*/
function frequencies(name) {
    // set frequency bar heights
    var index = 0;
    while ($(name)[index]) {
        var val = Math.floor(20 + Math.random()*79);
        $(name)[index].style.height = "calc("+val+"% - 2px)";
        index++;
    }
}
function customize() {
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.jungfrau.ch/favicon.ico");
    
    // Menu coloring
    $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
    $('.mpsnow-TopNavigationNode.selectedmenu').removeClass("selected")
    $('.mpsnow-TopNavigationNode').toggleClass('selected')

    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#4e9cd1');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(112, 113, 114\)/g, '#4e9cd1');                
        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, 'helvetica,"helvetica neue",arial,sans-serif;');        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*([^}]+)}/g, 'mpsnow-webPartZoneRightSection{\\$1;background: linear-gradient(to right, rgb(253, 198, 0) 0%, rgb(249, 175, 0) 100%);color:#fff;}');
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:rgb(225,225,225);color:#666666;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;border-left-width:0;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;border-right-width:0;}');
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigation(Node)*[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigation\\$1{\\$2\\$3;background-color:rgb(82,91,97);}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigation(Node)*[ \t\n\r]*{([^}]*)color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigation\\$1{\\$2\\$3;color:#fff;}');
        // Menu-Selected
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigation(Node)*.selected[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigation\\$1.selectedmenu{\\$2\\$3;background-color:rgb(62,72,78);color:#fff;}');        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#1a9ce3;}');
        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigation(Node)*[ \t\n\r]*{([^}]*)border-right-width[^;}]+([^}]*)}/g, 'mpsnow-TopNavigation\\$1{\\$2\\$3;border-right-width:0px;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#mpsnow-Logo[ \t\n\r]*{([^}]*)border-right-width[^;}]+([^}]*)}/g, '#mpsnow-Logo{\\$1\\$2;border-right-width:0px;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator{\\$1;border-top-color:rgb(82,91,97);}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-width[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-width:0px;}');

        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#44423e;');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:##e63232;color:#fff;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#666666;}');

        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#f0f0f0');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#f1f1f1');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-background[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'its-stream-tile-background{\\$1\\$2;background-color:#f0f0f0;}');                             
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*)color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\\$1\\$2;color:#005a96;}');   
    }
    //TopNav Background
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + ".mpsnow-TopNavigationNode{background-color:rgb(82,91,97);}";
    
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.jungfrau.ch/uploads/media/Jungfrau_rgb_web.png");
    //Add second logo
    $('#mpsnow-Logo').append($('#mpsnow-Logo > img').clone().attr('src', "http://www.jungfrau.ch/uploads/media/SKI_REGION_rgb_web.png"));
    $('#mpsnow-Logo').attr('style','width: 198px;padding-left: 20px;');
    $('.its-stream-tile > a').attr('style', "background: linear-gradient(to bottom, rgb(253, 198, 0) 0%, rgb(249, 175, 0) 100%);");
    
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'http://www.jungfrau.ch/typo3temp/GB/07553ea9cd.png');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'Urs Kessler');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, '');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Urs Siegenthaler');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/media/p/4/000/15d/3c6/290790c.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Daniel Steinmann');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Mark Bachmann');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische[^<]*</g, '>Quis accumsan per<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen[^<]*</g, '>Etiam varius cursus est ac ornare. Mauris non tortor ac nibh laoreet condimentum ut nec ex.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Mit unseren 66[^<]*</g, '>Praesent tortor urna, consequat a ultricies quis, molestie vel tortor. Maecenas ac justo commodo, iaculis ipsum et, sollicitudin metus. Quisque ut turpis nec dolor porttitor venenatis ac sit amet justo. Ut eu ex in nibh molestie ornare. Morbi et felis lobortis, sodales nibh ut, ullamcorper nibh. Nam congue vehicula velit eleifend aliquet.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/winter/JB_045_Kal_12_rgb.jpg"');
         
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/sommer/JB_001_Eiger_rgb.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Nunc consequat');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/historische_bilder/Eismeer_Felsengalerie_ab1905_rgb.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*75.Jahre.[^<]*</g, '>Ut id interdum<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]+Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy[^<]*</g, '>Fusce dui turpis<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]+Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812320000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Ausflugsziele/Jungfraujoch_Top_of_Europe/jungfraujoch/JJ_n_0125_Plateau_rgb.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Ausflugsziele/Jungfraujoch_Top_of_Europe/jungfraujoch/JJ_029_Eispalast_rgb.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Ausflugsziele/Jungfraujoch_Top_of_Europe/jungfraujoch/JJ_n_0042_Fun_Park_rgb.jpg"');
    
    //Frequencies
    frequencies('span.mp-crwpRangeHistogramBar');
    //frequencies('span.mp-crwpRangeHistogramBarContainer');

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Jungfrau')
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Jungfrau')

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
    //portal banner
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635747988240000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/winter/JB_020_Kal_10_cmyk.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/winter/JB_020_Kal_10_cmyk.jpg"');    
    //Potal?
    $("div.slick-track img").each(function(index) {
        switch (index) {
            case 1:
                this.src = "http://www.jungfrau.ch/download.php?f=fileadmin/mydrive/Bahnen/Jungfraubahn/winter/JB_020_Kal_10_cmyk.jpg";
                break;
        }
    });
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;border-left-width:0;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;border-right-width:0;}');
    }
}
customize();
