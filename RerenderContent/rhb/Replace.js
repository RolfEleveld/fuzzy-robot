/*
//Load this script
// use https://vc0065.virtualcorp.ch/snow/SitePages/Timeline.aspx
$.getScript("./Replace.js")
*/
// names and images
var look = {
        font:'"ff-fago",Helvetica,Arial,sans-serif;',
        icon:'http://www.fromm-pack.com/favicon.ico',
        logo:'https://www.rhb.ch/fileadmin/frontend/assets/media/logo_rhb_en.svg',
        accents: '#74000a',
        menu:'white', //white, gray, inverted
        selectedMenuBackground:'#74000a',
        selectedMenuColor:'#fff',
        passiveMenuBackground:'#e13c3e',
        passiveMenuColor:'#fff',
        menuSeparator:'#b4b4b4',
        RightBarBackground:'#000',
        RightBarColor:'#fff',
        LeftBarBackground:'#edece6',
        LeftBarColor:'#000',
        StreamBackground:'#f1f1f1',
        StreamColor:'#8b8a79'
            };

var people = [
    {oldname:'Maria.Studer', newname:'Martin Gredig', image:'http://www.accountingundcontrolling.ch/MeineMediathek/2012/08/Martin-Gredig.jpg'}, // logged in user
    {oldname:'Christoph.Enderli', newname:'Christian Florin', image:'http://www.srf.ch/var/storage/images/auftritte/sendungsauftritte/arena/bilder/node_1668170/14311978-2-ger-DE/bild_span12.jpg'}, // first
    {oldname:'Aleksandar.Toskovic', newname:'Stefan Engler', image:'https://www.rhb.ch/fileadmin/_processed_/csm_Stefan_Engler_78ce869e79.jpg'}, // major view
    {oldname:'Mickey.Mouse', newname:'Andreas Bass', image:''},
    {oldname:'Ralph.Keller', newname:'', image:''},
    {oldname:'Christoph.Müller', newname:'', image:''},
    {oldname:'Cyrill.Hagmann', newname:'', image:''},
    {oldname:'Alain.Zurbriggen', newname:'', image:''},
    {oldname:'Verena.Leitner', newname:'', image:''},
    {oldname:'Radu.Tut', newname:'', image:'http://gv2.cs.tcd.ie/images/anonymous_person.png'},
            ];
 
var content = [
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_landquart_201306062149101_k_55fc71770f.jpg', title:'Proin neque dui.', short:'Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur vulputate.'},
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_reisegepaeck_k_aefd0a491d.jpg', title:'Etiam elementum quis enim', short:'Proin hendrerit, felis vel mattis blandit, urna massa porttitor ante, id aliquet massa urna eget nibh. Fusce at eleifend justo, at rutrum metus'},
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_albulalinie_landwasserviadukt_20130810150822_k_d932d22f1c.jpg', title:'Nunc et nisl nec leo commodo', short:'Aliquam bibendum rhoncus urna, vitae congue leo sodales sit amet. Integer rhoncus arcu eu lacus aliquam, sed tempor velit ornare'},
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_glacierexpress_landwasserviadukt_20110410165953_k_4654521c57.jpg', title:'Nam ut ipsum ac', short:'Integer pellentesque mattis tincidunt. Etiam venenatis lobortis lacus, accumsan auctor nisl pretium in. Aliquam porta nisl a vehicula ultrices.'},
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_pfad_wertkarte_vereina_k_636b09fc8a.jpg', title:'Praesent sed volutpat lacus', short:'Etiam a lacus vitae erat pretium consectetur. Donec ultricies sed ex in sagittis. Ut mattis sapien nec arcu lacinia, eu tristique elit placerat.'},
    {image:'https://www.rhb.ch/fileadmin/_processed_/csm_berninaexpress_kreisviadukt_brusio_20080628110517_k_aeae087fc0.jpg', title:'Etiam convallis nibh', short:'Curabitur non ornare metus. Integer pharetra eget nulla quis fringilla. Nunc sagittis hendrerit ipsum'},
    {image:'', title:'Nam ut pulvinar dui', short:'Curabitur dignissim tortor nisl, sed aliquet leo feugiat volutpat. Integer non enim a purus sagittis accumsan sed sed magna.'},
    {image:'', title:'Cum sociis natoque penatibus', short:'Morbi a hendrerit ipsum, id luctus lorem. Curabitur sem massa, accumsan id consequat in, varius id metus. Aenean consectetur imperdiet rhoncus'},
    {image:'', title:'Nulla id erat semper', short:'Pellentesque mattis est eget elementum pharetra. Integer ipsum mauris, placerat at sodales sit amet, dapibus eget enim. Sed cursus ac neque at facilisis'},
    {image:'', title:'Etiam dictum arcu', short:'Sed id nulla ut nulla hendrerit aliquam. In at tellus odio. In vehicula tempus nisi, ac porttitor nisi euismod eget.'},
              ];

var portal = [
    {heroimage:'https://promo.rhb.ch/assets/images/Lok_0.png'},
    {heroimage:'https://promo.rhb.ch/assets/images/Lok_0.png'},
    {heroimage:'https://promo.rhb.ch/assets/images/Lok_0.png'},
    {heroimage:'https://promo.rhb.ch/assets/images/Lok_0.png'},
            ];

//Use with care applied at end!
var words = [
    {old:'gmz',newword:''},
    {old:'migros',newword:''},
            ];

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
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, look.icon);
    // menu image colors
    $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
    if (look.menu ==='white' || look.menu === 'gray'){
        $('.mpsnow-TopNavigationNode.selectedmenu').removeClass("selected")
    }
    if (look.menu === 'white' || look.menu === 'inverted'){
        $('.mpsnow-TopNavigationNode').toggleClass('selected')
    }
    
    for (var count = 0; count < document.styleSheets.length; count++) {
        // links
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:visited[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:visited{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:last-child.mpsnow-BreadcrumbSegment[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:last-child.mpsnow-BreadcrumbSegment{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/li:hover \> \.mp-tvwpLink[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'li:hover > .mp-tvwpLink{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:hover[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:hover{\\$1;\\$2;color:' + look.accents + ';}');

        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, look.font);        
        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:' + look.RightBarBackground + '; color:' + look.RightBarColor + '}');
        // Left Menu color
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2;background-color:' + look.LeftBarBackground + ';color:' + look.LeftBarColor + '}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-left[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)border-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#sideNavBox[ \t\n\r]*{([^}]*)margin-right[^;}]+([^}]*)}/g, '#sideNavBox{\\$1\\$2}');

        // Menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;background-color:' + look.passiveMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode{\\$1\\$2;color:' + look.passiveMenuColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/#s4-titlerow[ \t\n\r]*{([^}]*)border-bottom-color[^;}]+([^}]*)}/g, '#s4-titlerow{\\$1\\$2;border-bottom-color:#FFF;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\\$1\\$2;background-color:' + look.passiveMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\\$1;color:' + look.passiveMenuColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a:hover[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a:hover{\\$1;color:' + look.passiveMenuColor + ';}');
        // Selected menu
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\\$1;\\$2;background-color:' + look.selectedMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\\$1;\\$2;color:' + look.selectedMenuColor + ';}');
        
        // Search Box
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)[ \t\n\r]*border[^;}]+([^}]*)}/g, 'its-landing-toggleView-Button{\\$1;\\$2;border: 1px solid' + look.selectedMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)[ \t\n\r]*background-color[^;}]+([^}]*)}/g, 'its-landing-toggleView-Button{\\$1;\\$2;background-color:' + look.passiveMenuBackground + ';}');

        // Menu-separator
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-group-separator[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*border-top-color[^;}]+([^}]*)}/g, 'mpsnow-group-separator a{\\$1;border-top-color:' + look.menuSeparator + ';}');
        // Lines in Text
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneMiddleSection[ \t\n\r]+\.s4-wpActive[ \t\n\r]*{([^}]*)[ \t\n\r]border-top-color[^;}]+([^}]*)}/g, 'mpsnow-webPartZoneMiddleSection .s4-wpActive{\\$1;\\$2;border-top-color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwp.mpsnow-tab[ \t\n\r]*{([^}]*)[ \t\n\r]border-bottom-color[^;}]+([^}]*)}/g, 'mp-tvwp.mpsnow-tab{\\$1;\\$2;border-bottom-color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/h1[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'h1{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwpLink[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-tvwpLink{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-core-pageTitle[ \t\n\r]+a[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'ms-core-pageTitle a{\\$1;\\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-selectedRow[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-selectedRow{\\$1;\\$2;color:' + look.accents + ';}');

        // portal stream
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]*{([^}]*)[ \t\n\r]*background-color[^;}]+([^}]*)}/g, 'its-stream-tile{\\$1\\$2;background-color:' + look.StreamBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)[ \t\n\r]*background-color[^;}]+([^}]*)}/g, 'its-stream-tile a{\\$1\\$2;background-color:' + look.StreamBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-title[ \t\n\r]*{([^}]*)[ \t\n\r]*color[^;}]+([^}]*)}/g, 'its-stream-tile-title{\\$1;\\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*)[ \t\n\r]*color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\\$1;\\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*)[ \t\n\r]*border-bottom-color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\\$1\\$2;border-bottom-color:' + look.StreamColor + ';}');

        // stack bars
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-crwpRangeControl.ui-slider-horizontal[ \t\n\r]+\.ui-slider-range[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mp-crwpRangeControl.ui-slider-horizontal .ui-slider-range{\\$1;\\$2;background-color:' + look.accents + ';}');
    }
    
    //replace logo
    $('#mpsnow-Logo > img').attr('src', look.logo);

    //Setting people images
    for (user of people) {
        if (user.newname === ''){
            continue;
        }
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp('"[^"]+userphoto[^"]+accountName[^"]+'+user.oldname+'[^"]+"', "ig"), '"'+user.image+'"');
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(user.oldname, "ig"), user.newname);
    }
    
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
        $(this).html(content[index].short.substring(0,content[index].short.substring(0,70).lastIndexOf(" ")) + '<a>...</a>');
    });
    
    // Images  
    $('div.mpsnow-feed-Content > div.mpsnow-post-image > img').each(function (index) {
        this.src = content[index].image;
    });
    $('div > a.news-compositeWP-teaser-picture-link > img').each(function (index) {
        this.src = content[index].image;
    });

    //Frequencies
    frequencies('span.mp-crwpRangeHistogramBar');

    // Any left over words
    for (word of words) {
        if (user.newword === ''){
            continue;
        }
        document.body.innerHTML = document.body.innerHTML.replace(new RegExp(word.old, "ig"), word.newword);
    }

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
        this.src = portal[index].heroimage;
    });
    
    
}

customize();
