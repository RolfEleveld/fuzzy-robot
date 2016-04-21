/*
//Load this script
// use https://vc0065.virtualcorp.ch/snow/SitePages/Timeline.aspx
$.getScript("./Replace.js")
*/
// names and images
var look = {
        font:'"Roboto";',
        icon:'http://www.bustpn.ch/favicon.ico',
        logo:'http://www.bustpn.ch/assets/logo-7092f8c5590acb9aacd8bf3e71673c94.png',
        accents: '#e42612', 
        menu:'', //white, gray, inverted
        selectedMenuBackground:'#164b7a',
        selectedMenuColor:'#fff', 
        passiveMenuBackground:'#fff',
        passiveMenuColor:'#2e2e2e',
        menuSeparator:'#fff',
        RightBarBackground:'#e42612', // also buttons
        RightBarColor:'#fff', // also button txt
        LeftBarBackground:'#fff',
        LeftBarColor:'#164b7a', //#ae86ba
        LeftBarChartColor:'#861822',
        StreamBackground:'rgb(241,241,241)',
        StreamColor:'#164b7a',
        Curve:'4px'
            };
//http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=1&right_x=0&bottom_y=1&img=
var people = [
    {oldname:'Maria.Studer', newname:'Philippe Magnin', image:'https://media.licdn.com/media/p/2/005/066/041/179db1c.jpg'}, // logged in user
    {oldname:'Christoph.Enderli', newname:'Richard Zaugg', image:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.45&top_y=0.35&right_x=0.62&bottom_y=0.74&img=http://web.cdnlacote.ch/media/image/41/normal_16_9/asset-version-f901d9041d-_dsc7500_web.jpg'}, // first
    {oldname:'Aleksandar.Toskovic', newname:'Elisabeth Ruey-Ray', image:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.1&top_y=0.02&right_x=0.82&bottom_y=0.65&img=http://www.nyon.ch/multimedia/images/img_traitees/2009/07/elisabeth-ruey-ray-2009______large.jpg'}, // major view
    {oldname:'Mickey.Mouse', newname:'Antonio Bilardo', image:''},
    {oldname:'Ralph.Keller', newname:'Pascal Juillerat', image:''},
    {oldname:'Christoph.Müller', newname:'Giuseppina Flück', image:''},
    {oldname:'Cyrill.Hagmann', newname:'Daniel Grossmann', image:''},
    {oldname:'Alain.Zurbriggen', newname:'Gilbert Troillet', image:''},
    {oldname:'Verena.Leitner', newname:'Jean-Michel Frossard', image:''},
    {oldname:'Radu.Tut', newname:'', image:'http://gv2.cs.tcd.ie/images/anonymous_person.png'},
            ];


var content = [
    {image:'http://nouveautes-tpn.ch/images/mini-logo-nstcm.png', title:'Proin neque dui.', short:'Leo justo. Quis accumsan per porta hac. Porttitor iaculis viverra condimentum ridiculus nascetur Velit velit est euismod orci porta libero commodo dignissim nascetur vulputate.'},
    {image:'http://nouveautes-tpn.ch/images/mini-logo-tpn.png', title:'Etiam elementum quis enim', short:'Proin hendrerit, felis vel mattis blandit, urna massa porttitor ante, id aliquet massa urna eget nibh. Fusce at eleifend justo, at rutrum metus'},
    {image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEPAAACAxiVFJDAAAEPAAACAx0ZXh0AAAAAENvcHlyaWdodCAoYykgMTk5OCBIZXdsZXR0LVBhY2thcmQgQ29tcGFueQAAZGVzYwAAAAAAAAASc1JHQiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAPNRAAEAAAABFsxYWVogAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z2Rlc2MAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAFklFQyBodHRwOi8vd3d3LmllYy5jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkZXNjAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAC5JRUMgNjE5NjYtMi4xIERlZmF1bHQgUkdCIGNvbG91ciBzcGFjZSAtIHNSR0IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZGVzYwAAAAAAAAAsUmVmZXJlbmNlIFZpZXdpbmcgQ29uZGl0aW9uIGluIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAALFJlZmVyZW5jZSBWaWV3aW5nIENvbmRpdGlvbiBpbiBJRUM2MTk2Ni0yLjEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHZpZXcAAAAAABOk/gAUXy4AEM8UAAPtzAAEEwsAA1yeAAAAAVhZWiAAAAAAAEwJVgBQAAAAVx/nbWVhcwAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAo8AAAACc2lnIAAAAABDUlQgY3VydgAAAAAAAAQAAAAABQAKAA8AFAAZAB4AIwAoAC0AMgA3ADsAQABFAEoATwBUAFkAXgBjAGgAbQByAHcAfACBAIYAiwCQAJUAmgCfAKQAqQCuALIAtwC8AMEAxgDLANAA1QDbAOAA5QDrAPAA9gD7AQEBBwENARMBGQEfASUBKwEyATgBPgFFAUwBUgFZAWABZwFuAXUBfAGDAYsBkgGaAaEBqQGxAbkBwQHJAdEB2QHhAekB8gH6AgMCDAIUAh0CJgIvAjgCQQJLAlQCXQJnAnECegKEAo4CmAKiAqwCtgLBAssC1QLgAusC9QMAAwsDFgMhAy0DOANDA08DWgNmA3IDfgOKA5YDogOuA7oDxwPTA+AD7AP5BAYEEwQgBC0EOwRIBFUEYwRxBH4EjASaBKgEtgTEBNME4QTwBP4FDQUcBSsFOgVJBVgFZwV3BYYFlgWmBbUFxQXVBeUF9gYGBhYGJwY3BkgGWQZqBnsGjAadBq8GwAbRBuMG9QcHBxkHKwc9B08HYQd0B4YHmQesB78H0gflB/gICwgfCDIIRghaCG4IggiWCKoIvgjSCOcI+wkQCSUJOglPCWQJeQmPCaQJugnPCeUJ+woRCicKPQpUCmoKgQqYCq4KxQrcCvMLCwsiCzkLUQtpC4ALmAuwC8gL4Qv5DBIMKgxDDFwMdQyODKcMwAzZDPMNDQ0mDUANWg10DY4NqQ3DDd4N+A4TDi4OSQ5kDn8Omw62DtIO7g8JDyUPQQ9eD3oPlg+zD88P7BAJECYQQxBhEH4QmxC5ENcQ9RETETERTxFtEYwRqhHJEegSBxImEkUSZBKEEqMSwxLjEwMTIxNDE2MTgxOkE8UT5RQGFCcUSRRqFIsUrRTOFPAVEhU0FVYVeBWbFb0V4BYDFiYWSRZsFo8WshbWFvoXHRdBF2UXiReuF9IX9xgbGEAYZRiKGK8Y1Rj6GSAZRRlrGZEZtxndGgQaKhpRGncanhrFGuwbFBs7G2MbihuyG9ocAhwqHFIcexyjHMwc9R0eHUcdcB2ZHcMd7B4WHkAeah6UHr4e6R8THz4faR+UH78f6iAVIEEgbCCYIMQg8CEcIUghdSGhIc4h+yInIlUigiKvIt0jCiM4I2YjlCPCI/AkHyRNJHwkqyTaJQklOCVoJZclxyX3JicmVyaHJrcm6CcYJ0kneierJ9woDSg/KHEooijUKQYpOClrKZ0p0CoCKjUqaCqbKs8rAis2K2krnSvRLAUsOSxuLKIs1y0MLUEtdi2rLeEuFi5MLoIuty7uLyQvWi+RL8cv/jA1MGwwpDDbMRIxSjGCMbox8jIqMmMymzLUMw0zRjN/M7gz8TQrNGU0njTYNRM1TTWHNcI1/TY3NnI2rjbpNyQ3YDecN9c4FDhQOIw4yDkFOUI5fzm8Ofk6Njp0OrI67zstO2s7qjvoPCc8ZTykPOM9Ij1hPaE94D4gPmA+oD7gPyE/YT+iP+JAI0BkQKZA50EpQWpBrEHuQjBCckK1QvdDOkN9Q8BEA0RHRIpEzkUSRVVFmkXeRiJGZ0arRvBHNUd7R8BIBUhLSJFI10kdSWNJqUnwSjdKfUrESwxLU0uaS+JMKkxyTLpNAk1KTZNN3E4lTm5Ot08AT0lPk0/dUCdQcVC7UQZRUFGbUeZSMVJ8UsdTE1NfU6pT9lRCVI9U21UoVXVVwlYPVlxWqVb3V0RXklfgWC9YfVjLWRpZaVm4WgdaVlqmWvVbRVuVW+VcNVyGXNZdJ114XcleGl5sXr1fD19hX7NgBWBXYKpg/GFPYaJh9WJJYpxi8GNDY5dj62RAZJRk6WU9ZZJl52Y9ZpJm6Gc9Z5Nn6Wg/aJZo7GlDaZpp8WpIap9q92tPa6dr/2xXbK9tCG1gbbluEm5rbsRvHm94b9FwK3CGcOBxOnGVcfByS3KmcwFzXXO4dBR0cHTMdSh1hXXhdj52m3b4d1Z3s3gReG54zHkqeYl553pGeqV7BHtje8J8IXyBfOF9QX2hfgF+Yn7CfyN/hH/lgEeAqIEKgWuBzYIwgpKC9INXg7qEHYSAhOOFR4Wrhg6GcobXhzuHn4gEiGmIzokziZmJ/opkisqLMIuWi/yMY4zKjTGNmI3/jmaOzo82j56QBpBukNaRP5GokhGSepLjk02TtpQglIqU9JVflcmWNJaflwqXdZfgmEyYuJkkmZCZ/JpomtWbQpuvnByciZz3nWSd0p5Anq6fHZ+Ln/qgaaDYoUehtqImopajBqN2o+akVqTHpTilqaYapoum/adup+CoUqjEqTepqaocqo+rAqt1q+msXKzQrUStuK4trqGvFq+LsACwdbDqsWCx1rJLssKzOLOutCW0nLUTtYq2AbZ5tvC3aLfguFm40blKucK6O7q1uy67p7whvJu9Fb2Pvgq+hL7/v3q/9cBwwOzBZ8Hjwl/C28NYw9TEUcTOxUvFyMZGxsPHQce/yD3IvMk6ybnKOMq3yzbLtsw1zLXNNc21zjbOts83z7jQOdC60TzRvtI/0sHTRNPG1EnUy9VO1dHWVdbY11zX4Nhk2OjZbNnx2nba+9uA3AXcit0Q3ZbeHN6i3ynfr+A24L3hROHM4lPi2+Nj4+vkc+T85YTmDeaW5x/nqegy6LzpRunQ6lvq5etw6/vshu0R7ZzuKO6070DvzPBY8OXxcvH/8ozzGfOn9DT0wvVQ9d72bfb794r4Gfio+Tj5x/pX+uf7d/wH/Jj9Kf26/kv+3P9t////4QEoRXhpZgAATU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAAkAAAAcgEyAAIAAAAUAAAAlodpAAQAAAABAAAAqgAAAAAAAAEsAAAAAQAAASwAAAABQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkAMjAxNDowOToxMiAwODo0ODoxOAAABpADAAIAAAAUAAAA+JAEAAIAAAAUAAABDJKRAAIAAAADMDAAAJKSAAIAAAADMDAAAKACAAQAAAABAAAATaADAAQAAAABAAAANwAAAAAyMDE0OjA5OjEyIDA4OjM3OjU5ADIwMTQ6MDk6MTIgMDg6Mzc6NTkA/9sAQwACAgICAgECAgICAgICAwMGBAMDAwMHBQUEBggHCAgIBwgICQoNCwkJDAoICAsPCwwNDg4ODgkLEBEPDhENDg4O/9sAQwECAgIDAwMGBAQGDgkICQ4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4O/8AAEQgANwBNAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A/eLXfEOh+GPD7at4i1fTtD0tZo4nu764WGJXkdY41LMQAWdlUZ7kVx3xY+Itv8LfgDrnjybTn1mPTzCFs0uFhMxlnjhA3sCBzID0PSuQ+N/jz4S2H7M/xEi8c3OheKNFtNPkh1TQEu45J7hyPltwm7csrMVC9CpIIxjNfI3w7/ZD+I3xB+CllD8avir8SdB8NyRsNK8DWWs+f/Z1qJBJbx3E0gYSyxkJ/AduxRuGMDjq4ianywV3+XqfOZjmuJjV9hhYe0bV9Gvd9T9LlkBthITgFc5NOVleMMrBlI4IPWvzr8deFfjD4O8VeCvgp4t+L95rfwR8cao2lyeJbpVTxFaqLeWY6e9wMKyTiMp55UuAWHGRn7l8JJ4M0Lwhovg/wleaRHpum2KQafY212JDHBGoVccliAMcnPuaulX5pNNWsdWAzR16jpzjyuNr3avfy7rzOU+KHxi8N/DKyt7CWK+8SeN9Rt5JNB8KaREZtQ1NkGTsRQdkY/ilbCqATnjFcd+zl+0LpXx8+F1zqLaU/hfxVp8gTVdEll3tGrZMU8bEKXhcA4baPmVx/Dk1Pjd4p8LeCbvWrjw74cs/Efx117wvcWuj2tuq/bHtIQzl5JSQIbWNnLsSy7mwq7nIFeOfshT/AA9+KHwQ+F2tyWM+i/FP4caTHpU/kyNbTzWckJERkXP7+0mQrKoYECRSVwQScnWl9YUeZen9dTzauZV1m0aCqK1vh/4PfrY+++f/ANVcV468d6J4B+HPiHxFqrSXX9k6RPqcmn2rK11NDCBvKISM8lRk4ALDJ5rkPi/451Lwf4LvLe20fxhHb3+l3McfibQtKGpf2LcbMRSS2y5kZRkvuCMg8vDYyM/DHiH4v/D79oL/AIJh69q+v+NND0n40+EdBvGlexu1tLieVImSRY0bDS2l2oUNGAQd4BAZVxpWxMYNrrY68zz2lh5Soxa50m1fTY/Tey1rStQ1O7sbTUbKfUbVI3vLRJ1aa2EgJTzEBym4AkZAzg4rUwPrX53eI/id4O+B3gPwN4B8EeM7G/8Ail4v1eK78W6/b2i6pqknyia4me3jV2eebiCCIrtUOAMLHX2l8PvGGr+NPCU+s6p4G8S+BYWm22NrrphW7ni2giR4o3fyuSRsc7hjJAzTo4mM9Opplmc0sVL2Ta50k3bVa67ngfxv/Z9/ZqPw0+IHjnxt4a8K+FL+6tri6vPFJUxzwXLq2LgYYb5d5DBcEu2Bgk89T8IfjnZa58I/BEHxF0zWPhx4s1HS43ii8Qw/Z4dSZY1LSW8xOxtwO/y2KyqDymBmvT/Hnws8D/Ey58MN430SLX4tA1Malp1vPI/kidVKq0kYIWQDOdrgrntXmnx9+FOt/FvVfhP4fjttIuvAen+LotU8W2t7IR9pt4I3McQTB8wM5AKkgdM8ZxE4Tg3KCX+ZjiMJXw9adehFbJWS+LXd+h8+ftL/ABB+B/xk+J3wk+Ct5450S40+fxfHe63qdpch7aCOKCYLafaF+RZp3kWPhsqMk4O3P1f8OvgF8HfhVrMmq+APAeheH9UkgMLX8aNJcGMkEp5rlm2kqMjPOBWn47+Dvw8+InwOvPh34h8OWI8MzRBYYLOJYGs2A+SWAqP3br2IHqCCCQe80fS4NF8IaXottLdT29hZx20UtzKZJXVFCgux5ZiBkk9TVU6L9o5SSLweW1I4upXrxi3K1mulun/BPjz44eI/hF8ENA+JesJc32s/GXxxpd1BZQRyyahqjL5LmOONck29lESXIG1AAT8zV59+ylJ8KPiN4T+EOq3EuteGfjX4J8OQ2bI8xsrjWtOERiRivS8sT1U87HTGV/i+gr/9nrwj4T+EnxYu/h34dhv/AIkeKNJv0/tjWr557y4mnjfbG1zLuZIwzABQQMAZ6ZrlPh/+zVpGpfsgfBjRfiFp2o+G/iL4MsYha6voupCK/wBPlVjvRLiMkNG44K8qQegPI5vY1fbXsrf8Hv3PIngMc8xU+SPKltbT4v5v5up7v8VdB8H638IL2bxx4b1PxdoWlsNQfSbGCe4kumjBwn2eI5n6/wCrYMp7jivgLWz8Pv2n/wBp3T/gfZfCuy+GGjaTpz6nrGp3emWcGtlYvK22Nt5W8WzBpomkDEuF+Uouef011KznvfDF/YWuoXOmXM9q8MN7CFaW3ZlIEihgVLKeRuBGRyDXkngv4CeBvAmu+FtU0X+2H1PRLS/iF1dXfmy6hNfPBJdXdy5G6Wd2gQ7iQBkgADaBviaEqkl26no5zlVbGVYJJcj+K6V2uye58F/DTxp+z9ongLWPgr8YPhTZT33hW9utJPivSfB8lxBqkVvcG3N95tvGZoZd6gO4PD4IfJwP088H6RZ6B8MND0jT7/WNUsLWzRLa61S6e4upI8ZUySP8zNggZbnjnmvC7T9mvRtA07w/c+EvFGuaT4q0jxbd69Drd0BcSSx3tx5t7YyINitbyrhccFWRJB8y8/TA6DoBRhKU4J8w8gy+vhouNZLTaytp2fex8Ufts+KfEnhn4e/B6HQNf+IWgw6v8RLXT9V/4QhyNWu7V7e4LwwKAd8hKqVXByQOK523+KzfAf8AZt8NeJFf4x+KZPGfiRrCFvjbra6SNDMccvNxOYCLaKTysJuQh2dTlQc17j+0V8OtA+IPg7wTJrXj/WPhvd+HfE8OsaRq+mwxSyrdRxSqg2yo64w7NyP4a8mufDUV98NbvQtV/aw8Za3dyXwnS61LQ9MnhaExNE9tNbG18qaJt2/DDIdVIPGK9Wtxfw9g6NPC4zEwhNO8ot2dnsd8slzOrXqV6NNyTSs0tPM0vFP7UfjfSPFms6ToHwYj8TTaD4DsvF/iEx+MLdBb204mMkMBWJluJEELFSrBH/vLxuXxb+15Y+GfGnw/lj8NaHeeCPFa6O+n3svi22i1ieLUigSeHTArSNFEZF8xnZO+3djNeA2vwQ0Gy+KuseHdA+M+teC/hW3w00zwmL6wmt57/Voopro3UMqywsYSVmG2WPbt3sFGBgdpqXwC+C03i3VZtD+MeueGfDF9f6NfyaBaWVtInm6Utulsn2iSFpjAFt0/dBwoYlvas3xlwPFx5sbT26S/4Oj7C/sniJ3tRl93/A2PbPDn7R2veItc1/xFH8LNQj+Cmm3mq2r+No9aheVP7N84TTyWRUOsDvBJGjK7OSASihsj5u8YftnXnxB/ZC+LkHhq1t/BXimP4dTeJ/DmoaF4oi1C4toUlijMd0I0U2l4vmxsYsuMM2Gypr17QvAXwy0LxzrKW/xs8VSfDDUL3Ub1/h9mKPTjLqAkF0ryLEJpIC00rrCzbUdgR0Fc/bfCnwD/AMM8+KfhbrH7RXjTX/BOoeGv+Ee0jTrm2tEXSbMMpQgpArTzKqLGJJCflyMZOaxpcd8FwnzfW6e6t73T79X36F1Mkz+Vl7KVtb6HPTeLfFv7NvxP+Dus6/8AF3x74/8Ahz448PajP4hsfFUsV9c6ZNaacb4XFrIsaNtIVkMbZHIOc4x5drfxg+I/hj9kb4u2moat8VPDPjDXfAVv428J32reKYNSdbZruKKaSN4oYjZzYnh3Wq7okU/IQd+fedA+EXwdXX/7U+JXxk8WfGG7g8O3WgaVFr8kUNtpdncxeTcCGK3iQCR4/kMjZbb+dYD/AAI+EupfDnxJoHif47+LfFU974Ri8JaLqF7BbpLoukxzxziFBHCqyyM0UYaWQFmCKOO/XLxF4Pd3LG0276u6V9bqy8tn3OV8NZ4muWjJLtrp3+87rU/2zPD+iftNyeAJdH0y60jT/Etn4Z1PUH8RRJqZvbgRgzQ6eU3zWsbyokku8EHeQrBTn7e7V8Y6b4J8EWv7S974n8G/HHxR4Z0rxDr1vquteFdOt7Y2+p36LHFu82SFpYklEcYkjRgGweVzX2cOlczzrJsxtLLaqmlvZ318+x6WEweYYdNYyLTe1+x5z8SPBNx468I2em2+oRae8F4Jy8kRcHCMuMAj+9XjP/DO2qf9DPZf+ATf/F0UV+acTeEvDWf4543HUXKo0le7Wi2Pqsu4nzHA0fY0J2jvsg/4Z21T/oZ7L/wCb/4uj/hnbVP+hnsv/AJv/i6KK+f/AOJfuCv+gZ/+BM7/APXjOP8An7+CD/hnbVP+hnsv/AJv/i6P+GdtU/6Gey/8Am/+Looo/wCJfuCv+gZ/+BMP9eM4/wCfv4IP+GdtU/6Gey/8Am/+Lo/4Z21TOP8AhJ7L/wAAm/8Ai6KKP+JfuC/+gZ/+BMX+vGcf8/fwRoaR8BNR03xZpmot4jtJVtLuOcoLMgsEcNjO/jOK+nB0oor7rhHgXJ+GadSnl1PkU2m9b6rQ8bNM5xeYTjLESu1sf//Z', title:'Nunc et nisl nec leo commodo', short:'Aliquam bibendum rhoncus urna, vitae congue leo sodales sit amet. Integer rhoncus arcu eu lacus aliquam, sed tempor velit ornare'},
    {image:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.2&top_y=0.3&right_x=0.8&bottom_y=0.9&img=http://www.bustpn.ch/assets/historic-13f69ddb8f6822779b3d9d9f70ab80da.jpg', title:'Nam ut ipsum ac', short:'Integer pellentesque mattis tincidunt. Etiam venenatis lobortis lacus, accumsan auctor nisl pretium in. Aliquam porta nisl a vehicula ultrices.'},
    {image:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0.3&top_y=0.1&right_x=0.7&bottom_y=1&img=http://www.bustpn.ch/assets/background-historic-d75e14845f61d631ac68869c708c1e5a.jpg', title:'Praesent sed volutpat lacus', short:'Etiam a lacus vitae erat pretium consectetur. Donec ultricies sed ex in sagittis. Ut mattis sapien nec arcu lacinia, eu tristique elit placerat.'},
    {image:'', title:'Etiam convallis nibh', short:'Curabitur non ornare metus. Integer pharetra eget nulla quis fringilla. Nunc sagittis hendrerit ipsum'},
    {image:'', title:'Nam ut pulvinar dui', short:'Curabitur dignissim tortor nisl, sed aliquet leo feugiat volutpat. Integer non enim a purus sagittis accumsan sed sed magna.'},
    {image:'', title:'Cum sociis natoque penatibus', short:'Morbi a hendrerit ipsum, id luctus lorem. Curabitur sem massa, accumsan id consequat in, varius id metus. Aenean consectetur imperdiet rhoncus'},
    {image:'', title:'Nulla id erat semper', short:'Pellentesque mattis est eget elementum pharetra. Integer ipsum mauris, placerat at sodales sit amet, dapibus eget enim. Sed cursus ac neque at facilisis'},
    {image:'', title:'Etiam dictum arcu', short:'Sed id nulla ut nulla hendrerit aliquam. In at tellus odio. In vehicula tempus nisi, ac porttitor nisi euismod eget.'},
              ];

var portal = [
    {heroimage:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=0.35&right_x=1&bottom_y=0.85&img=http://www.bahnbilder.de/1024/nstcm-steuerwagen-bt-305-417615.jpg'},
    {heroimage:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=0.2&right_x=1&bottom_y=0.85&img=http://www.snotpg.ch/site/wp-content/uploads/2015/12/P1000798_small.jpg'},    
    {heroimage:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=0.35&right_x=1&bottom_y=0.75&img=http://automotrice.ch/galeries/CH/NStCM/NStCM_vhc_mot/BDe44-211/slides/2010-07-20_BDe211-B342-B341-Be205_Bourgogne.jpg'},
    {heroimage:'http://cropserviceusingbasicweb.azurewebsites.net/Get.aspx?left_x=0&top_y=0.23&right_x=1&bottom_y=0.82&img=http://www.nyon.ch/multimedia/images/img_traitees/2014/12/tpn_26_11_2014_8725__large.jpg'},
            ];

//Use with care applied at end!
var words = [
    {old:'gmz',newword:'NStCM'},
    {old:'migros',newword:'TPN'},
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
    if (look.menu ==='white' || look.menu === 'gray'){
        $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
        $('.mpsnow-TopNavigationNode.selectedmenu').removeClass("selected")
    }
    if (look.menu === 'white' || look.menu === 'inverted'){
        $('.mpsnow-TopNavigationNode.selected').addClass("selectedmenu")
        $('.mpsnow-TopNavigationNode').toggleClass('selected')
    }
    
    for (var count = 0; count < document.styleSheets.length; count++) {
        // links
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:visited[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:visited{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:last-child.mpsnow-BreadcrumbSegment[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:last-child.mpsnow-BreadcrumbSegment{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/li:hover \> \.mp-tvwpLink[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'li:hover > .mp-tvwpLink{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/a:hover[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'a:hover{\$1;\$2;color:' + look.accents + ';}');

        // Fonts
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI Light",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Segoe UI",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/"Lucida Grande",/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Tahoma,/g, '');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/Helvetica,Arial,sans-serif/g, look.font);        
        
        // Right Sidebar
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-webPartZoneRightSection[ \t\n\r]*{[ \t\n\r]*background-color[^}]+}/g, 'mpsnow-webPartZoneRightSection{background-color:' + look.RightBarBackground + '; color:' + look.RightBarColor + '}');
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
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-breadcrumb-top[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'ms-breadcrumb-top{\$1\$2;background-color:' + look.passiveMenuBackground + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a{\$1;color:' + look.passiveMenuColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-currentUser[ \t\n\r]+a:hover[ \t\n\r]*{[ \t\n\r]*color[^;}]+([^}]*)}/g, 'mpsnow-currentUser a:hover{\$1;color:' + look.selectedMenuColor + ';}');
        // Selected menu
        if (look.menu ==='white' || look.menu === 'gray' || look.menu === 'inverted'){
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selectedmenu{\$1;\$2;background-color:' + look.selectedMenuBackground + ';}\ndiv.selectedmenu{color:' + look.selectedMenuColor + ';}');
        } else {
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selected{\$1;\$2;background-color:' + look.selectedMenuBackground + ';}\ndiv.selected{color:' + look.selectedMenuColor + ';}');
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mpsnow-TopNavigationNode.selected[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mpsnow-TopNavigationNode.selected{\$1color:' + look.selectedMenuColor + ';\$2}');
        }
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
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwpLink[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-tvwpLink{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-core-pageTitle[ \t\n\r]+a[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'ms-core-pageTitle a{\$1;\$2;color:' + look.accents + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-selectedRow[ \t\n\r]*{([^}]*)[ \t\n\r]color[^;}]+([^}]*)}/g, 'mp-selectedRow{\$1;\$2;color:' + look.accents + ';}');

        // Selected link 
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tvwpLink[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile a{\$1background-color:' + look.StreamBackground + ';\$2}');

        // portal stream
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile a{\$1background-color:' + look.StreamBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-title[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'its-stream-tile-title{\$1;\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\$1;\$2;color:' + look.StreamColor + ';}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile-type[ \t\n\r]*{([^}]*)[ \t\n\r]*border-bottom-color[^;}]+([^}]*)}/g, 'its-stream-tile-type{\$1\$2;border-bottom-color:' + look.StreamColor + ';}');
        
        // stack bars
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-crwpRangeControl.ui-slider-horizontal[ \t\n\r]+\.ui-slider-range[ \t\n\r]*{([^}]*)[ \t\n\r]background-color[^;}]+([^}]*)}/g, 'mp-crwpRangeControl.ui-slider-horizontal .ui-slider-range{\$1;\$2;background-color:' + look.accents + ';}');

        // portal images
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/news-compositeWP-teaser-imageContainer[ \t\n\r]*{([^}]*)background-color[^;}]+([^}]*)}/g, 'news-compositeWP-teaser-imageContainer{\$1\$2}');

        // inside Newsroom:
        // buttons
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'button:hover{\$1background-color:' + look.RightBarBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*)border-color[^;}]+;?([^}]*)}/g, 'button:hover{\$1border-color:' + look.RightBarBackground + ';\$2}');
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/button\:hover[ \t\n\r]*{([^}]*[^-])color[^;}]+;?([^}]*)}/g, 'button:hover{\$1color:' + look.RightBarColor + ';\$2}');
        // link
        document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-tagAction[ \t\n\r]*{([^}]*[^-])color[^;}]+([^}]*)}/g, 'mp-tagAction{\$1color:' + look.accents + ';\$2}');
        // curvy text boxes
        if (look.Curve === 0){
            //document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-inputBox[ \t\n\r]*{([^}]*)}/g, 'ms-inputBox{\$1;border-radius:' + look.Curve + ';}');
        } else {
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/ms-inputBox[ \t\n\r]*{([^}]*)}/g, 'ms-inputBox{\$1;border-radius:' + look.Curve + ';}');
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-landing-toggleView-Button[ \t\n\r]*{([^}]*)}/g, 'its-landing-toggleView-Button{\$1;border-radius:' + look.Curve + ';}');
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/mp-searchDefinition[ \t\n\r]*{([^}]*)}/g, 'mp-searchDefinition{\$1;border-radius:' + look.Curve + ';}');
        }
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
    
    // update stream (again?)
    for (var count = 0; count < document.styleSheets.length; count++) {
            document.styleSheets[count].cssText = document.styleSheets[count].cssText.replace(/its-stream-tile[ \t\n\r]+a[ \t\n\r]*{([^}]*)background-color[^;}]+;?([^}]*)}/g, 'its-stream-tile a{\$1background-color:' + look.StreamBackground + ';\$2}');
    }    
}

customize();
