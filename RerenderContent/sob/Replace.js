/*
//Load this script
// use https://vc0086.virtualcorp.ch/snow/SitePages/Content.aspx
// use https://vc0095.virtualcorp.ch/snow/SitePagevirtualcorps/Timeline.aspx
$.getScript("./Replace.js")
*/
var look = {
    font: 'Verdana,Arial,helvetica,sans-serif;',
    icon: 'http://www.sob.ch/favicon.ico',
    logo: 'http://www.sob.ch/fileadmin/templates/img/sob.png',
    accents: '#e52931',
    menu: '', //active, inactive, inverted
    selectedMenuBackground: '#e52931',
    selectedMenuColor: '#fff',
    passiveMenuBackground: 'rgb(222,230,230)',
    passiveMenuColor: '#000',
    menuSeparator: 'rgb(222,230,230)',
    RightBarBackground: 'rgb(171,171,171)', // also buttons
    RightBarColor: '#fff', // also button txt
    LeftBarBackground: 'rgb(222,230,230)',
    LeftBarColor: '#000',
    LeftBarChartColor: '#e52931',
    StreamBackground: '#e52931',
    StreamAltBackground: '#aaa',
    StreamOverlayBackground: 'rgba(0,0,0,0.3)',
    StreamColor: '#fff',
    Curve: 0
};
//http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=1&right_x=0&bottom_y=1&img=
var people = [
    { oldname: 'Maria.Studer', newname: 'Bruno Baumgartner', image: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.38&top_y=0.56&right_x=0.46&bottom_y=0.72&img=https://t1dccw.dm2302.livefilestore.com/y3mUJaqPj7PsX0xMljGBN3nMa244XkOFkZYZsz14yJXdogmwPjw-WY-GEkpcv_W6RvaxFybtXys0YjxH7WNbRm7wgRDOCYwhwgh8ScjTRfc-je0bBN3UcSejrvGyw13P7iJCZCavQqrNZ9QP2EvdXayHlGYWcCyMcIhjknRXtPAlbg/2016-05-03.png' }, 
    { oldname: 'Christoph.Enderli|Leonie.Faber', newname: 'Thomas Küchler', image: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.13&top_y=0.56&right_x=0.22&bottom_y=0.72&img=https://t1dccw.dm2302.livefilestore.com/y3mUJaqPj7PsX0xMljGBN3nMa244XkOFkZYZsz14yJXdogmwPjw-WY-GEkpcv_W6RvaxFybtXys0YjxH7WNbRm7wgRDOCYwhwgh8ScjTRfc-je0bBN3UcSejrvGyw13P7iJCZCavQqrNZ9QP2EvdXayHlGYWcCyMcIhjknRXtPAlbg/2016-05-03.png' }, 
    { oldname: 'Aleksandar.Toskovic|Tim.Kaufmann', newname: 'Henrich Güttinger', image: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.13&top_y=0.735&right_x=0.21&bottom_y=0.89&img=https://t1dccw.dm2302.livefilestore.com/y3mUJaqPj7PsX0xMljGBN3nMa244XkOFkZYZsz14yJXdogmwPjw-WY-GEkpcv_W6RvaxFybtXys0YjxH7WNbRm7wgRDOCYwhwgh8ScjTRfc-je0bBN3UcSejrvGyw13P7iJCZCavQqrNZ9QP2EvdXayHlGYWcCyMcIhjknRXtPAlbg/2016-05-03.png' },
    { oldname: 'Mickey.Mouse|Diana.Richter', newname: 'Manuela Hutter', image: '' },
    { oldname: 'Ralph.Keller|Patrick.Püntener', newname: 'Marianne Reisner-Schmid', image: '' },
    { oldname: 'Christoph.Müller|Mike.Wirtz|Stefan.Luginb.hl|Stefan.Luginb..hl', newname: 'Ronald Kressbach', image: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.365&top_y=0.735&right_x=0.44&bottom_y=0.89&img=https://t1dccw.dm2302.livefilestore.com/y3mUJaqPj7PsX0xMljGBN3nMa244XkOFkZYZsz14yJXdogmwPjw-WY-GEkpcv_W6RvaxFybtXys0YjxH7WNbRm7wgRDOCYwhwgh8ScjTRfc-je0bBN3UcSejrvGyw13P7iJCZCavQqrNZ9QP2EvdXayHlGYWcCyMcIhjknRXtPAlbg/2016-05-03.png' },
    { oldname: 'Cyrill.Hagmann', newname: 'Daniel Kobler', image: '' },
    { oldname: 'Alain.Zurbriggen', newname: 'Michael Sutter', image: '' },
    { oldname: 'Verena.Leitner|Andr..Heymann', newname: 'Claudia Krucker', image: '' },
    { oldname: 'Elmar.Volken', newname: 'Stefan Hähnlein', image: '' },
    { oldname: 'Radu.Tut', newname: 'Markus Frei', image: 'http://gv2.cs.tcd.ie/images/anonymous_person.png' },
];

var images = [
    { image: 'http://www.sob.ch/uploads/pics/SOB-Streckennetz.jpg' },
    { image: 'http://www.sob.ch/uploads/pics/kugelschreiber.jpg' },
    { image: 'http://freizeit.sob.ch/Images/SOB/8122985303_38824377b8_z.jpg' },
    { image: 'http://www.sob.ch/uploads/pics/Fuehrerstandsfahrt_47.jpg' },
    { image: 'http://www.sob.ch/uploads/pics/S4_Sargans_Schloss-_Falknis_web.jpg' },
    { image: 'http://www.sob.ch/uploads/pics/Kontrollfahrt_15.jpg' },
];

var portal = [
    { heroimage: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.1&top_y=0.51&right_x=0.8&bottom_y=0.65&img=https://upload.wikimedia.org/wikipedia/commons/8/80/Ebnat_Kappel_SOB_FLIRT.jpg' },
    { heroimage: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=0.1&right_x=1&bottom_y=0.75&img=http://www.stadlerrail.com/media/tmp/uploads/stadler/flirt/Schweizerische_Suedostbahn_AG_SOB_Schweiz_JPG_960x350_crop_q95.jpg' },
    { heroimage: 'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.01&top_y=0.3&right_x=1&bottom_y=0.8&img=http://www.bahnbilder.de/1024/sob--voralpen-express--633473.jpg' }
];

var content = [
    { title: 'Proin neque dui.', short: 'Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur vulputate.' },
    { title: 'Etiam elementum quis enim', short: 'Proin hendrerit, felis vel mattis blandit, urna massa porttitor ante, id aliquet massa urna eget nibh. Fusce at eleifend justo, at rutrum metus' },
    { title: 'Nunc et nisl nec leo commodo', short: 'Aliquam bibendum rhoncus urna, vitae congue leo sodales sit amet. Integer rhoncus arcu eu lacus aliquam, sed tempor velit ornare' },
    { title: 'Nam ut ipsum ac', short: 'Integer pellentesque mattis tincidunt. Etiam venenatis lobortis lacus, accumsan auctor nisl pretium in. Aliquam porta nisl a vehicula ultrices.' },
    { title: 'Praesent sed volutpat lacus', short: 'Etiam a lacus vitae erat pretium consectetur. Donec ultricies sed ex in sagittis. Ut mattis sapien nec arcu lacinia, eu tristique elit placerat.' },
    { title: 'Etiam convallis nibh', short: 'Curabitur non ornare metus. Integer pharetra eget nulla quis fringilla. Nunc sagittis hendrerit ipsum' },
    { title: 'Nam ut pulvinar dui', short: 'Curabitur dignissim tortor nisl, sed aliquet leo feugiat volutpat. Integer non enim a purus sagittis accumsan sed sed magna.' },
    { title: 'Cum sociis natoque penatibus', short: 'Morbi a hendrerit ipsum, id luctus lorem. Curabitur sem massa, accumsan id consequat in, varius id metus. Aenean consectetur imperdiet rhoncus' },
    { title: 'Nulla id erat semper', short: 'Pellentesque mattis est eget elementum pharetra. Integer ipsum mauris, placerat at sodales sit amet, dapibus eget enim. Sed cursus ac neque at facilisis' },
    { title: 'Etiam dictum arcu', short: 'Sed id nulla ut nulla hendrerit aliquam. In at tellus odio. In vehicula tempus nisi, ac porttitor nisi euismod eget.' },
];

//Use with care applied at end!
var words = [
    { old: 'gmz|saurer|Frutiger', newword: 'SOB' },
    { old: 'migros', newword: 'Südostbahn' },
    { old: '\@itsystems.ch|\@SOB.com', newword: '' },
];

function frequencies(name) {
    // set frequency bar heights
    var index = 0;
    while ($(name)[index]) {
        var val = Math.floor(20 + Math.random() * 79);
        $(name)[index].style.height = "calc(" + val + "% - 2px)";
        index++;
    }
}

function lookAndFeel() {
    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, look.icon);
    // menu image colors, keep existing menu    
    $('.mpsnow-TopNavigationNode').addClass("normalmenu")
    $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu").removeClass("normalmenu")
    if (look.menu === 'active' || look.menu === 'inactive') {
        $('.mpsnow-TopNavigationNode.selectedmenu').removeClass("selected")
    }
    if (look.menu === 'active' || look.menu === 'inverted') {
        $('.mpsnow-TopNavigationNode').toggleClass('selected')
    }

    for (var count = 0; count < document.styleSheets.length; count++) {
        // links
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:visited[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:visited{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:last-child.mpsnow-BreadcrumbSegment[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:last-child.mpsnow-BreadcrumbSegment{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:hover[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:hover{\$1;\$2;color:' + look.accents + ';}');

        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, look.font);

        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection{\$1background-color:' + look.RightBarBackground + '; color:' + look.RightBarColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+a[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection a{\$1color:' + look.RightBarColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]+.ms-webpart-titleText[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneRightSection .ms-webpart-titleText{\$1color:' + look.RightBarColor + ';\$2}');

        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\$1\$2;background-color:' + look.LeftBarBackground + ';color:' + look.LeftBarColor + '}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-crwpControlHeader[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mp-crwpControlHeader{\$1color:' + look.LeftBarColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneLeftSection[ \t\n\r]+.ms-webpart-titleText[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneLeftSection .ms-webpart-titleText{\$1color:' + look.LeftBarColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-crwpRangeHistogramBar[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mp-crwpRangeHistogramBar{\$1background-color:' + look.LeftBarChartColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\$1\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\$1\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)margin-right[^;}]+([^}]*)}/g, '#sideNavBox{\$1\$2}');

        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\$1\$2;background-color:' + look.passiveMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\$1\$2;color:' + look.passiveMenuColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*[^-])border-right-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\$1\$2;border-right-color:' + look.menuSeparator + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#mpsnow-Logo[ \t\n\r]*{([^}]*[^-])border-right-color[^;}]+([^}]*)}/g, '#mpsnow-Logo{\$1\$2;border-right-color:' + look.menuSeparator + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\$1\$2;border-bottom-color:#FFF;}');
        // Non-selected menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top {\$1\$2;background-color:' + look.passiveMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\$1;color:' + look.passiveMenuColor + ';}');
        // Selected menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\$1;\$2;background-color:' + look.selectedMenuBackground + ';}\ndiv.selectedmenu{color:' + look.selectedMenuColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\$1color:' + look.selectedMenuColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a:hover[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser.normalmenu a:hover{\$1;color:' + look.selectedMenuColor + ';}');

        // Search Box
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)[ \t\n\r]*border[^;}]+([^}]*)}/g, 'its-landing-toggleView-Button{\$1;\$2;border: 1px solid' + look.selectedMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)[ \t\n\r]*background-color[^;}]+([^}]*)}/g, 'its-landing-toggleView-Button{\$1;\$2;background-color:' + look.passiveMenuBackground + ';}');
        
        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator a{\$1;border-top-color:' + look.menuSeparator + ';}');
        // Lines in Text
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneMiddleSection[ \t\n\r]+\.s4-wpActive[ \t\n\r]*{([^}]*)[ \t\n\r]border-top-color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneMiddleSection .s4-wpActive{\$1;\$2;border-top-color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwp.mpsnow-tab[ \t\n\r]*{([^}]*)[ \t\n\r]border-bottom-color[^;}]+([^}]*)}/g, 'mp-tvwp.mpsnow-tab{\$1;\$2;border-bottom-color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-stream-header[ \t\n\r]+>[ \t\n\r]+h1[ \t\n\r]*{([^}]*)[ \t\n\r]border-color[^;}]+([^}]*)}/g, 'its-landing-stream-header > h1{\$1;\$2;border-color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/h1[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'h1{\$1;\$2;color:' + look.accents + ';}');
        //tab header
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwp.mpsnow-tab[ \t\n\r]+li:hover[ \t\n\r]+>[ \t\n\r]+.mp-tvwpLink[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mp-tvwp.mpsnow-tab li:hover > .mp-tvwpLink{\$1color:' + look.selectedMenuColor + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwp.mpsnow-tab[ \t\n\r]+li:hover[ \t\n\r]+>[ \t\n\r]+.mp-tvwpLink[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mp-tvwp.mpsnow-tab li:hover > .mp-tvwpLink{\$1background-color:' + look.selectedMenuBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwp[ \t\n\r]+.mp-tvwpLink[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-tvwp .mp-tvwpLink{\$1color:' + look.accents + ';\$2}');

        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-core-pageTitle[ \t\n\r]+a[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'ms-core-pageTitle a{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-selectedRow[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-selectedRow{\$1;\$2;color:' + look.accents + ';}');

        // stack bars
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-crwpRangeControl.ui-slider-horizontal[ \t\n\r]+\.ui-slider-range[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mp-crwpRangeControl.ui-slider-horizontal .ui-slider-range{\$1;\$2;background-color:' + look.accents + ';}');

        // inside Newsroom:
        // buttons
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'button:hover{\$1background-color:' + look.RightBarBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*)border-color[^;}]+;?([^}]*)}/g, 'button:hover{\$1border-color:' + look.RightBarBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*[^-])color[^;}]+;?([^}]*)}/g, 'button:hover{\$1color:' + look.RightBarColor + ';\$2}');
        // link
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tagAction[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mp-tagAction{\$1color:' + look.accents + ';\$2}');

        // curvy text boxes
        if (look.Curve !== 0) {
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-inputBox[ \t\n\r]*{([^}]*)}/g, 'ms-inputBox{\$1;border-radius:' + look.Curve + ';}');
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)}/g, 'its-landing-toggleView-Button{\$1;border-radius:' + look.Curve + ';}');
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-searchDefinition[ \t\n\r]*{([^}]*)}/g, 'mp-searchDefinition{\$1;border-radius:' + look.Curve + ';}');
        }

        // portal stream
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile{\$1background-color:' + look.StreamBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile a{\$1background-color:' + look.StreamBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-title[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'its-stream-tile-title{\$1;\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\$1;\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-abstract[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'its-stream-tile-abstract{\$1;\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*)[ \t\n\r]*border-(bottom-)*color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\$1\$3;border-\$2color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-light[ \t\n\r]+.its-stream-tile-background[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile-light .its-stream-tile-background{\$1background-color:' + look.StreamBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-dark[ \t\n\r]+.its-stream-tile-background[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile-dark .its-stream-tile-background{\$1background-color:' + look.StreamAltBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-background-overlay[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile-background-overlay{\$1background-color:' + look.StreamOverlayBackground + ';\$2}');
    }

    $('.ng-hide').each(function (index) { this.remove(); });
    //replace logo
    $('#mpsnow-Logo > img').attr('src', look.logo);
    $('#mpsnow-Logo').attr('style', 'background-color:#fff'); //Custom!

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        //$('.mpsnow-feed-RowContainer')[0].remove();
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
        this.src = portal[index].heroimage;
    });
    //Alt portal
    $("div.its-stream-tile-background-image").each(function (index) {
        $(this).attr('style', 'background-image: url("' + portal[index % portal.length].heroimage + '");');
    });
}

function personalities() {

    //Setting people images
    for (user of people) {
        if (user.newname === '') {
            continue;
        }
        for (oldname of user.oldname.split('|')) {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp('"[^><"]+userphoto[^><"]+accountName[^><"]+' + oldname + '[^><"]+"', "ig"), '"' + user.image + '"');
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp('(' + oldname + ')', "ig"), user.newname);
        }
    }


    // update stream (again?)
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile a{\$1background-color:' + look.StreamBackground + ';\$2}');
    }
}

function setcontent() {
    // Titles
    $('div.mpsnow-feed-Content > div.mpsnow-post-text > blockquote > a').each(function (index) {
        this.innerText = content[index].title;
    });
    $('div.news-compositeWP-teaser-textContainer > div.news-compositeWP-teaser-title > a').each(function (index) {
        this.innerText = content[index].title;
    });
    // Descriptions
    $('div.mpsnow-feed-Content > div.mpsnow-post-text > blockquote > a').parent().each(function (index) {
        var htmlString = $(this).html();
        var updatedHTML = htmlString.replace(/(.*<\/a>[^<]*<br>[^<]*<br>).+/g, "$1" + content[index].short);
        this.innerHTML = updatedHTML;
    });
    $('div.news-compositeWP-teaser-textContainer > div.news-compositeWP-teaser-abstract').each(function (index) {
        $(this).html(content[index].short.substring(0, content[index].short.substring(0, 70).lastIndexOf(" ")) + '<a>...</a>');
    });

    // Images  
    $('div.mpsnow-feed-Content div.mpsnow-post-image img').each(function (index) {
        this.src = images[index % images.length].image;
    });
    $('div a.news-compositeWP-teaser-picture-link img').each(function (index) {
        this.src = images[index % images.length].image;
    });

    // Any left over words
    for (word of words) {
        if (user.newword === '') {
            continue;
        }
        for (oldword of word.old.split('|')) {
            document.body.innerHTML = document.body.innerHTML.replace(new RegExp(oldword, "ig"), word.newword);
        }
    }

    $('.its-stream-tile-title').each(function (index) {
        $(this).html(content[index % content.length].title);
    });
    $('.its-stream-tile-abstract').each(function (index) {
        $(this).html(content[index % content.length].short.substring(0, content[index % content.length].short.substring(0, 70).lastIndexOf(" ")) + '...');
    });
}
lookAndFeel();
personalities();
setcontent();
frequencies('span.mp-crwpRangeHistogramBar');
