/// <reference path="jquery.d.ts"/>
/*
// depends on https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/627b6c158b73494c803f36fc2fe00ad75faa8fde/jquery/jquery.d.ts
// (New-Object Net.WebClient).DownloadString('https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/627b6c158b73494c803f36fc2fe00ad75faa8fde/jquery/jquery.d.ts') | Out-File .\jquery.d.ts
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
    //load the style
    //var styleSheet: HTMLElement = document.createElement('STYLE');
    //styleSheet.setAttribute("type",'text/css');
    //styleSheet.setAttribute("rel", 'stylesheet');
    //styleSheet.setAttribute("href", 'https://raw.githubusercontent.com/RolfEleveld/fuzzy-robot/master/RerenderContent/Planzer/Theme.css');
    //document.head.appendChild(styleSheet);

    //replace menu icons

    //replace page icon
    document.body.innerHTML = document.body.innerHTML.replace(/\/_layouts\/15\/images\/Colygon\.MatchPoint\.Snow\/favicon\.ico/g, "http://www.Planzer.ch/favicon.ico");

    //replace colors and font:
    for (var count = 0; count < document.styleSheets.length; count++) {
        document.styleSheets[count].href;
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/rgb\(255, 134, 31\)/g, 'rgb(167, 11, 37)');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI"/g, 'Univers');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande"/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/.ms-webpart-titleText *\{[^}]+}/g, '.ms-webpart-titleText{margin:0 0 .35em 0;padding:.09em;background-color:#fff;font-family:Univers,Arial,Helvetica,sans-serif;font-size:15px;border:0;color:#72869f;line-height:20px;text-align:right;font-weight:bold;text-transform:uppercase;}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/.ms-core-pageTitle *\{[^}]+}/g, '.ms-webpart-titleText{font-family:Univers,Arial,Helvetica,sans-serif;font-size:15px;line-height:20px;text-align:right;font-weight:bold;text-transform:uppercase;}');
    }
    document.styleSheets[0].cssText = document.styleSheets[0].cssText + '\ndiv.ms-breadcrumb-top{background: url(http://planzerwebsitestorage.blob.core.windows.net/files/Content/images/pic_dashboard.png);}div.mpsnow-TopNavigationNode{background-color:transparent;}\ndiv.mpsnow-TopNavigationNode{background: linear-gradient(to bottom,#3f4448 0%,#24272a 100%);}\n*{font-family: Univers, Arial, Helvetica, sans - serif;}';

    //
    $('H2.ms-webpart-titleText').attr('style',"")

    // replace menu background    
    
    //replace logo
    $('#mpsnow-Logo > img').attr('src', "http://planzerwebsitestorage.blob.core.windows.net/files/Content/images/logo_planzer.png");

    //replace words
    document.body.innerHTML = document.body.innerHTML.replace(/[mM]ettler.[tT]oledo/g, 'Planzer');
    document.body.innerHTML = document.body.innerHTML.replace(/[Vv][Aa][Ll]]Oo][Rr][Aa]/g, 'Planzer');
    document.body.innerHTML = document.body.innerHTML.replace(/[Gg][Mm][Zz]/g, 'Planzer');
    document.body.innerHTML = document.body.innerHTML.replace(/[Mm]igros/g, 'Planzer');
    document.body.innerHTML = document.body.innerHTML.replace(/[Kk] *[Kk]iosk/g, 'Planzer');

    // hashtags

    // Workspaces
    document.body.innerHTML = document.body.innerHTML.replace(/Community/g, 'On The Road');

    //Setting people images
    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9][0-9][0-9][0-9]\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmickey.mouse\&amp\;size\=M/g, 'media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAY0AAAAJGNkNWEyMjU4LTdlM2ItNGFhYi04YmU5LTJjZTQ4YTQ4NGFmZA.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Aleksandar.Toskovic/g, 'Jan Pfenninger');

    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9][0-9][0-9][0-9]\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5caleksandar.toskovic\&amp\;size\=M/g, 'media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAT0AAAAJGE1OWMwYTgzLTY0OTEtNGU3YS04ZTNlLWVhNjE3NzJhZGMxYQ.jpg');
    document.body.innerHTML = document.body.innerHTML.replace(/Mickey.Mouse/g, 'Severin Baer');

    document.body.innerHTML = document.body.innerHTML.replace(/vc[0-9][0-9][0-9][0-9]\.virtualcorp\.ch\/snow\/_layouts\/15\/userphoto\.aspx\?accountName\=i\%3a0\%23\.w\%7cvirtualcorp\%5cmaria.studer\&amp\;size\=M/g, 'tse1.mm.bing.net/th?&amp;id=OIP.Mb31cedf17534037f30c963120cb49131o1&amp;w=140&amp;h=169&amp;c=0&amp;pid=1.9&amp;rs=0&amp;p=0&amp;r=0');
    document.body.innerHTML = document.body.innerHTML.replace(/Maria.Studer/g, 'Nils Planzer');

    // Content TimeLine
    if ($('#pageTitle').text().trim() === "Timeline") {
        firstfrequencies();

        $('.mpsnow-feed-RowContainer')[0].remove();

        // images on content
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881808960000000/g, 'https://tse1.mm.bing.net/th?&amp;id=OIP.M3573c5ce8d293ec85dfccfe23148b5e2o0&amp;w=315&amp;h=200&amp;c=0&amp;pid=1.9&amp;rs=0&amp;p=0&amp;r=0');
        document.body.innerHTML = document.body.innerHTML.replace(/75 Jahre Planzer!/g, 'Nez Rouge campaign');
        document.body.innerHTML = document.body.innerHTML.replace(/Happy Birthday.+Laufenden\./g, 'Last year, 8700 volunteers made 14700 trips to safely return 31000 people to their homes.The prevention campaign for  increased road traffic safety is more popular than ever.Thanks to this, a fair number of traffic accidents could already be prevented.');
        
        document.body.innerHTML = document.body.innerHTML.replace(/Tochtergesellschaft.+das Fitnessunternehmen Inline\/Injoy/g, 'Payment Information');
        document.body.innerHTML = document.body.innerHTML.replace(/Die.+Tochtergesellschaft.+Freizeit.+Beratung für Fitnessanlagen/g, 'It has come to our attention that spam mails have been sent to our customers  which list changes to payment processes and specify new bank details.');
        document.body.innerHTML = document.body.innerHTML.replace(/http[^"]+635881805010000000/g, 'https://tse1.mm.bing.net/th?&amp;id=OIP.Mf86c5e842ff188b6ab9a76ddd3afe13co0&amp;w=295&amp;h=144&amp;c=0&amp;pid=1.9&amp;rs=0&amp;p=0&amp;r=0');
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
       // Nothing now
    }
    if ($('#pageTitle').text().trim() == "News") {
    
    }
    //Potal?
    $("div.slick-track img").each(function (index) {
        switch(index){
            case 1:
                this.src = "http://demo.cloudimg.io/s/crop/1024x380/http://www.burkhalter.ch/img/catalogue/0/117/O_14fbb217-33a4-4d40-9544-a275d32b7abe.jpg";
                break
        }
    });
}
customize();