RaddEventListener('load', function(e) {
  let quote = Chopra.getQuote();
console.log(quote);

//document.write(quote);

document.querySelector('#test').innerHTML = quote;
});

var Chopra = {
    a: [[
            "Universum",
            "Ditt medvetande",
            "Det arcana",
            "Det oförutsägbara",
            "Det oförklarliga",
            "Vårt medvetande",
            "Själen",
            "Evig stillhet",
            "Kosmos",
            "Din önskan",
            "Intuition",
            "Fantasi",
            "Ordning och reda",
            "Helhet",
            "Den osynlige",
            "Din kropp",
            "Medvetenhet",
            "Uppfattning",
            "Gud",
            "Kunskap",
            "Storhet",
            "Natur",
            "Din rörelse",
            "Allt",
            "Frihet",
            "Oändlighet",
            "Kultur",
            "Perceptuell verklighet",
            "Evolution",
            "Existens",
            "Egot",
            "Ömsesidigt beroende",
            "Världen",
            "Sinnet",
            "Dold betydelse",
            "Kärlek",
            "God hälsa",
            "Framtiden",
            "Själens kraft",
            "Livets nät",
            "Ditt hjärta",
            "Universums hemlighet",
            "Information",
            "Döden",
            "Var och en av oss",
            "Emotionell intelligens",
            "Upplevd sanning",
            "Energipartiklar",
            "Framtiden",
            "Astralplanet",
            "Det mänskliga nervsystemet",
            "Den fysiska världen",
            "Att koka te",
            "Att brygga öl",
            "Att röka pipa",
            "Nyckeln till glädje",
            "Oskuld"
        ],["förlitar sig på",
            "beror på",
            "omfattar",
            "kräver",
            "tänder",
            "är grunden till",
            "Skapar",
            "inspirerar till",
            "Vårdar",
            "läker",
            "ger upphov till",
            "är rotad i",
            "uppstår och avtar i",
            "projicerar på",
            "utforskar",
            "är visdomen i",
            "är inneboende i",
            "är vägen till",
            "upplever",
            "innefattar",
            "förklarar",
            "existerar bortom",
            "överskrider",
            "är kontinuiteten i",
            "reglerar",
            "mediterar på",
            "serverar",
            "existerar inuti",
            "existerar mitt i",
            "formar",
            "förvandlas till",
            "åtar sig",
            "fascinerar",
            "influerar till",
            "uttrycker",
            "Öppnar",
            "återföds i",
            "är en ingrediens i",
            "utvecklas i",
            "konstruerar",
            "differentierar till",
            "är bara möjligt i",
            "växer igenom",
            "finns som",
            "Speglar",
            "tillhör",
            "tystar",
            "förmedlar verkligheten till",
            "är grunden till",
            "lindrar",
            "är kärnan i",
            "relaterar till",
            "motsvarar",
            "härstammar från"
        ], [
            "din egen",
            "oändlig",
            "Självgoda",
            "ohämmad",
            "kosmisk",
            "unik",
            "synlig",
            "bra",
            "gränslös",
            "magisk",
            "ett överflöd av",
            "subtil",
            "ödmjuka",
            "universell",
            "ett uttryck för",
            "inneboende",
            "kortlivad",
            "total",
            "hänsynslös",
            "ren",
            "positiv",
            "utvidgningen av",
            "mekaniken i",
            "dörren till",
            "en symfoni av",
            "irrationell",
            "grundläggande",
            "spontan",
            "Karmiska",
            "djup",
            "enastående",
            "otrolig",
            "flödet av",
            "dödlig",
            "möjlig",
            "barriären för",
            "exponentiell",
            "beskrivningar av",
            "invecklad",
            "ny",
            "existentiell",
            "ljuset från",
            "dyrbar",
            "subjektiv",
            "odödlig",
            "artspecifik",
            "ett virvar av",
            "Dimensionslös",
            "den gradvisa utvidgningen av",
            "formlös",
            "total acceptans av",
            "oräknelig"
        ], [
            "glädje",
            "kreativitet",
            "liv",
            "möjligheterna",
            "förnimmelser",
            "upplevelser",
            "energi",
            "lycka",
            "verklighet",
            "kunskap",
            "astralplanet",
            "fakta",
            "rymdtiden",
            "möjligheter",
            "sexuell energi",
            "kaos",
            "sanning",
            "Öde",
            "Framgång",
            "val",
            "godkännande",
            "tystnad",
            "positivitet",
            "förträfflighet",
            "tillhörighet",
            "abstrakt skönhet",
            "balans",
            "uppfyllelse",
             "salighet",
             "åtgärder",
             "Potential",
             "mysterier",
             "förundran",
             "extern verklighet",
             "Självkännedom ",
             "fotoner",
             "dödlighet",
             "odödlighet",
             "Tidlöshet",
             "kraftfält",
             "Ljusstyrka",
             "magi",
             "trollformler",
             "mänsklig observation",
             "kärlek",
             "gränser",
             "hjärnor",
             "fenomen",
             "mirakel",
             "observationer"
         ]],
  
       rq: ["Men hur vacker strategin än är, bör du ibland titta på resultaten - Sir Winston Churchill",
            "Du får inte kämpa för ofta med samma fiende, annars kommer du att lära honom all din krigskonst- Napoleon Bonaparte",
            "En bra stridsplan som du agerar på i dag kan vara bättre än en perfekt plan i morgon.- General George S. Patton",
            "Ju mer du svettas i träning, desto mindre blöder du i striden- Richard Marcinko",
            "På segerdagen känns ingen trötthet",
            "Uthållighet är en av de svåraste disciplinerna, men det är till den som uthärdar som den slutliga segern kommer- Gautama B.",
            "Det spelar ingen roll hur långsamt du går så länge du inte stannar - Konfucius",
            "Hur kan en man dö bättre Än att inför omöjliga odds Försvara sin faders aska Och gudarnas tempel? - TB MacCauley",
            "Framgång är inte slutgiltig, misslyckande är inte dödligt: det är modet att fortsätta som räknas. - Winston Churchill",
            "I kampen mellan stenen och vattnet vinner vattnet alltid över tid - Japanskt ordspråk",
            "Det finns ingen komfort i tillväxtzonen och ingen tillväxt i komfortzonen - Okänd",
            "Ibland får du björnen, ibland får björnen dig - Zigenare ordstäv",
            "Avbryt aldrig din fiende när han gör ett misstag - Napoleon Bonaparte.",
            "Räds inte mannen som har tränat 10.000 olika sparkar en gång, räds mannen som har tränat en spark 10.000 gånger. - Bruce Lee",
            "Vid stora och farliga situationer får man inte tänka bara handla - Julius Caesar",
            "Ta saker som de är. Slå när du måste slå. Sparka när du måste sparka - Bruce Lee",
            "Var snäll, för alla du möter kämpar en hård kamp som du inte vet något om. Alltid.- Olika författare tillskrivs",
            "Har du fiender? Bra. Det betyder att du har stått upp för något, någon gång i ditt liv. - Winston Churchill",
            "Svårigheter stärker sinnet, som arbetet gör kroppen - Seneca",
            "... den svåraste aspekten av striden mellan gott och ont är att avgöra vilket som är vilket. - G.R.R. Martin",
            "Inte mindre än två timmar om dagen bör ägnas åt träning. - Thomas Jefferson",
            "Om du går igenom helvetet, fortsätt gå! - Winston Churchill",
            "Visa dig svag när du är stark och stark när du är svag. - Sun Tzu",
            "Om du känner fienden och känner dig själv behöver du inte frukta resultatet av hundra fighter. - Sun Tzu",
            "Den högsta konsten att kriga är att besegra fienden utan att slåss. - Sun Tzu",
            "Om du är långt ifrån fienden, låt honom tro att du är nära. - Sun Tzu",
            "Segern nås genom att se möjligheter i problemen. - Sun Tzu",
            "Till och med det finaste svärdet som kastats i saltvatten rostar så småningom. - Sun Tzu",
            "Den största segern är den som inte kräver någon strid. - Sun Tzu",
            "Det finns ingen som gynnas av långvarig krigföring. - Sun Tzu",
            "Svettas mer under fred för att blöda mindre under strid. - Sun Tzu",
            "Möjligheten att besegra fienden tillhandahålls av fienden själv. - Sun Tzu"],
  
    getQuote: function() {
      // Liten chans att visa riktiga citat
        var j = Math.floor(Math.random() * 10) // 0 ≤ j ≤ 10
        if (j < 2) {
          return this.rq[array_rand(this.rq)];
        } else {
          let oa = new Array();
          this.a.forEach (function(cur) {
                    oa.push(cur[array_rand(cur)]);
          });
          return oa.join(' ');
        }
    }
}


function array_rand (array, num) { // eslint-disable-line camelcase
  //       discuss at: http://locutus.io/php/array_rand/
  //      original by: Waldo Malqui Silva (http://waldo.malqui.info)
  // reimplemented by: Rafał Kukawski
  //        example 1: array_rand( ['Kevin'], 1 )
  //        returns 1: '0'

  // By using Object.keys we support both, arrays and objects
  // which phpjs wants to support
  var keys = Object.keys(array)

  if (typeof num === 'undefined' || num === null) {
    num = 1
  } else {
    num = +num
  }

  if (isNaN(num) || num < 1 || num > keys.length) {
    return null
  }

  // shuffle the array of keys
  for (var i = keys.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)) // 0 ≤ j ≤ i

    var tmp = keys[j]
    keys[j] = keys[i]
    keys[i] = tmp
  }

  return num === 1 ? keys[0] : keys.slice(0, num)
}
