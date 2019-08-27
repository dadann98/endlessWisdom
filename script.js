addEventListener('load', function(e) {
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

    getQuote: function() {
        let oa = new Array();
        this.a.forEach (function(cur) {
                    oa.push(cur[array_rand(cur)]);
         });
         return oa.join(' ');
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