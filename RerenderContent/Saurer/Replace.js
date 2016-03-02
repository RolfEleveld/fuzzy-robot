/*
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
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.saurer.com/favicon.ico");
    //replace colors:
    for (var count = 0; count < document.styleSheets.length; count++) {
        //Accent color        
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, '#c10000');
        // background buttons: #605e5b, selected menu background #9a978f 
        // bachground rest: #FFF
        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, '"FrutigerLTW01-45Light","Arial","Helvetica",sans-serif;');        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:#4e4644; color:#000}');
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:#e6e7e8;color:#444444;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#FFF;}');
        // Text on menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(85, 85, 85\)/g, '#44423e;');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(67, 67, 67\)/g, '#FFF');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:#FFF;color:#000;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:#000;}');
        // Portal highlights:
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/background-color:[ \t\n\r]*#ffcc99[^;]/g, 'background-color:#d1d3d4');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255,[ \t\n\r]*204,[ \t\n\r]*153\)/g, '#d1d3d4');
    }
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://www.saurer.com/fileadmin/templates/img/logos/saurer/SAURER-168x68.gif");

    // Any left over words
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Saurer')
    document.body.innerHTML = document.body.innerHTML.replace(/migros/g, 'Saurer')
    // hashtags
    // Workspaces
    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar\.toskovic\&amp\;size\=M/g, 'https://www.xing.com/image/e_9_4_97494704f_15492982_1/rené-uebelhart-foto.256x256.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar Toskovic/g, 'René Uebelhart');
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey\.mouse\&amp\;size\=M/g, 'http://www.friedrich-zeitschrift.de/cms/wp-content/uploads/philipp-koester-02-470x323.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey Mouse/g, 'Philipp Köstner');
    //logged on user
    document.body.innerHTML = document.body.innerHTML.replace(/https...vc[0-9]{4}\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria\.studer\&amp\;size\=M/g, 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/000/000/28f/39b7864.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]aria.[Ss]tuder/g, 'Martin Pfister');
    document.body.innerHTML = document.body.innerHTML.replace(/Ralph.Keller/g, 'Hansrudolf Labhart');

    // images on content
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635918225680000000"/g, '"http://www.saurer.com/de/Resources/experience/Kategorie-Bilder/Inspiration/Saurer-Kreativwelt-Inspiration-Teaser.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Herzlich willkommen in der Logistik Frische gekühlt.(<br \/>)*[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Logistik Frische gekühlt[^<]*</g, '>PourMonBijou<');

    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635884501730000000"/g, '"background: url("http://blog.saurer.com/de/wp-content/uploads/sites/2/2016/02/img065-2-240x180.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Tanzwerk101/g, 'Quilten');
    document.body.innerHTML = document.body.innerHTML.replace(/Das finde ich super, bin dabei/g, 'Class luctus. Ad cras per nisl tempor lacinia duis.');
    document.body.innerHTML = document.body.innerHTML.replace(/Der Tag der offenen Tanztür steht an - ein Tanzfest für Jedermann./g, 'Quis accumsan per porta hac.');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881808960000000"/g, '"http://www.saurer.com/de/TeaserData-de/Saurer-Maschinen/Images/modulteaser_1300mdc.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/75.Jahre.Saurer./g, 'Community');
    document.body.innerHTML = document.body.innerHTML.replace(/>[^<]*Happy Birthday[^<]*</g, '>Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur convallis vulputate, facilisi tellus metus suspendisse pellentesque maecenas convallis, per. Class luctus. Ad cras per nisl tempor lacinia duis.<');
    document.body.innerHTML = document.body.innerHTML.replace(/Saurer-Tochtergesellschaft übernimmt das Fitnessunternehmen Inline\/Injoy/g, 'Nähen');
    document.body.innerHTML = document.body.innerHTML.replace(/>Die Saurer-Tochtergesellschaft[^<]+</g, '>Imperdiet hac volutpat. Tempor neque at dui libero lobortis congue a dictum conubia natoque malesuada non eget. Urna pede integer platea ligula bibendum lobortis congue nonummy, lacinia viverra interdum ac dis class auctor nam. Feugiat magna ultrices a. Sit ornare.<');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881805010000000"/g, '"http://www.saurer.com/de/TeaserData-de/Software/Images/modulteaser_designworks-de.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635883825300000000"/g, '"http://www.saurer.com/assetgen/4/de/Resources/company/company_header-png.jpg"');
    document.body.innerHTML = document.body.innerHTML.replace(/"[^"]+635881812330000000"/g, '"http://www.saurer.com/de/TeaserData-de/Saurer-Maschinen/Images/modulteaser_580-png.jpg"');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();
        $('.mpsnow-feed-RowContainer')[0].remove();
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
                this.src = "http://www.saurer.com/uploads/pics/geschichte.jpg";
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
