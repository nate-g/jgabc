﻿var regexGabc = /(((?:([`,;:]\d*)|([cf]b?[1-4]))+)|(\S+))(?:\s+|$)/ig;var regexVowel = /(?:[cgq]u|[iy])?([aeiouyáéëíóúýǽæœ]+)/i;
//var regexLatin = /((?:\(|<(?:b|i|sc)>)*)(((?:(?:(\s+))(?:s[uú](?:bs?|s(?=[cpqt]))|tr[aá]ns|p[oó]st|[aá]bs|[oó]bs|[eé]x|p[eéoó]r|[ií]n|r[eé](?:d(?=[daeiouyáéëíóúýǽæœ])|)|d[ií](?:r(?=[raeiouyáéëíóúýǽæœ]))))|(?:(?:(\s+)|)(?:(?:i|[cgq]u)(?=[aeiouyáéëíóúýǽæœ])|[bcdfghjklmnprstvwxz]*)([aá]u|[ao][eé]?|[eiuyáéëíóúýæœ])(?:[\wáéíóúýæœ]*(?=-)|(?=[bcdgptf][lrh][\wáéíóúýæœ]|sc[eéií]|(?:[sc][tp]r?|gn|ps)[aeiouyáéíóúýæœ])|(?:[bcdfghjklmnpqrstvwxz]+(?=$|[^\wáëéíóúýæœ])|[bcdfghjklmnpqrstvwxz](?=[bcdfghjklmnpqrstvwxz]+))?)))(?:([\*-])|([^\w\sáëéíóúýæœ]*(?:\s[:;†\*\"«»‘’“”„‟‹›‛])*(?=\s|$))?)(?=(\s*|$)))((?:\)|<\/(?:b|i|sc)>)*)/gi;
var regexLatin = /((?:<(?:b|i|sc)>)*)(((?:(?:(\s+)|^)(?:s[uú](?:bs?|s(?=[cpqt]))|tr[aá]ns|p[oó]st|[aá]bs|[oó]bs|[eé]x|p[eéoó]r|[ií]n|r[eé](?:d(?=d|[aeiouyáéëíóúýǽæœ]))|d[ií](?:r(?=r|[aeiouyáéëíóúýǽæœ]))))|(?:(?:(\s+)|)(?:(?:i(?!i)|[cgq]u)(?=[aeiouyáéëíóúýǽæœ])|[bcdfghjklmnprstvwxz]*)([aá]u|[ao][eé]?|[eiuyáéëíóúýǽæœ])(?:[\wáéíóúýǽæœ]*(?=-)|(?=[bcdgptf][lrh][\wáéíóúýǽæœ]|sc[eéií]|(?:[sc][tp]r?|gn|ps)[aeiouyáéíóúýǽæœ])|(?:[bcdfghjklmnpqrstvwxz]+(?=$|[^\wáëéíóúýǽæœ])|[bcdfghjklmnpqrstvwxz](?=[bcdfghjklmnpqrstvwxz]+))?)))(?:([\*-])|([^\w\sáëéíóúýǽæœ]*(?:\s[:;†\*\"«»‘’“”„‟‹›‛])*\.?(?=\s|$))?)(?=(\s*|$)))((?:<\/(?:b|i|sc)>)*)/gi;
var regexWords = /((?:<(?:b|i|sc)>)*)([^a-z\(\)]*\s*"*(?=\b|\())(([a-z'*]*)(?:\(([a-z'*]+)\)([a-z'*]*))?)(=?)([-":;,.\)\?]*)(\s+\*)?((?:<\/(?:b|i|sc)>)*)/gi
var regexQuoteTernary = /([?:])([^?:]*)(?=$|:)/g;
var regexAccent = /[áéíóúýǽ]/i;
var regexToneGabc = /(')?(([^\sr]+)(r)?)(?=$|\s)/gi;
var regexVerseNumber = /^(\d+)\.?\s*/;
var sym_flex = '†';
var sym_med = '*';
var gloria_patri = "Glória Pátri, et Fílio, * et Spirítui Sáncto.\nSicut érat in princípio, et núnc, et sémper, * et in sǽcula sæculórum. Amen.";
var gloria_patri_end_vowels = "E u o* u a* e.";
var algorithmTwoBefore = true; //count as an accent the syllable two prior to the next accent
var algorithmTwoAfter = false; //count as an accent the syllable two after the last accent
var bi_formats;
String.prototype.format = function(keys){
  return this.replace(/\$([a-z]+)/gi,function(e){return keys[e.slice(1)]||e;});
}
var o_bi_formats = 
    bi_formats = (function(){
                  var _syl_subRegex= /ǽ/g;
                  var _syl_substitutions= {'ǽ':"<sp>'ae</sp>"};
                  return {
                      html: {bold: ["<b>", "</b>"], italic: ["<i>", "</i>"],nbsp:"&nbsp;",verse: ["<span style='float:left;width:25pt;text-align:right;'>($c.)&nbsp;</span>","<br/>"],versesName:"$psalm-$tone.html"},
                      tex: {bold:  ["{\\textbf{", "}"], italic:  ["{\\it ", "}"],nbsp:"~",verse:["\\item ",""],versesName:"$psalm-$tone.tex"},
                      gabc: {bold: ["<b>", "</b>"], italic: ["<i>", "</i>"],nbsp:" ",verse:["($c. )",""],versesName:"$psalm-$tone.gabc",
                        makeSylSubstitutions: function(o){
                          return o? o.replace(_syl_subRegex,function(e){return _syl_substitutions[e]||e}) : o;
                        }
                      },
                      "html-underline": {bold:["<u>","</u>"], italic:["<span style='border-bottom:3px double;'>","</span>"],nbsp:"&nbsp;",verse:["($c. )",""],versesName:"$psalm-$tone.html"},
                      "tex-underline": {bold:["\\uline{","}"], italic:["\\uuline{","}"],nbsp:"~",verse:["($c. )",""],versesName:"$psalm-$tone.tex"},
                      "gabc-plain": {bold:["",""],italic:["",""],nbsp:" ",verse:["($c. )",""],versesName:"$psalm-$tone.gabc"},
                      "gabc-versicle": {bold:["",""],italic:["",""],nbsp:" ",verse:["<v>\\Vbar</v> ,<v>\\Rbar</v> ",""],versesName:"versicle.gabc"}
                    };
                })();
var o_g_tones = 
    g_tones = {'1.':{clef:"c4",
                  mediant:"f gh hr 'ixi hr 'g hr h.",
                  solemn:"f gh hr hg ixgi h hr 'hg gh..",
                  terminations:{'D':"hr g f 'gh gr gvFED.",
                                'D-':"hr g f 'g gr gvFED.",
                                'D2':"hr g f gr 'gf d.",
                                'f':"hr g f 'gh gr gf..",
                                'g':"hr g f 'gh gr g.",
                                'g2':"hr g f 'g gr ghg.",
                                'g3':"hr g f 'g gr g.",
                                'a':"hr g f 'g hr h.",
                                'a2':"hr g f 'g gr gh..",
                                'a3':"hr g f 'gh gr gh.."
                               }
                 },
             '2.':{clef:"f3",
                  mediant:"e f hr 'i hr h.",
                  solemn:"e fe eh hr hg hi i 'hi hr h.",
                  termination:"hr g 'e fr f."
                 },
             '3.':{clef:"c4",
                  mediant:"g hj jr 'k jr jr 'ih j.",
                  solemn:"g hj jr 'jk jr jr 'ih hj..",
                  terminations:{'b':"jr h 'j jr i.",
                                'a':"jr h 'j jr ih..",
                                'a2':"jr ji hi 'h gr gh..",
                                'g':"jr ji hi 'h gr g.",
                                'g2':"jr h j i 'h gr g."
                               }
                 },
             '4.':{clef:"c4",
                  mediant:"h gh hr g h 'i hr h.",
                  solemn:"h gh hr hg gi i 'hi hr h.",
                  terminations:{'g':"hr 'h gr g.",
                                'E':"hr g h ih gr 'gf e."
                               }
                 },
             '4 alt':{clef:"c3",
                      mediant:"i hi ir h i 'j ir i.",
                      solemn:"i hi ir ih hj j 'ij ir i.",
                      terminations:{'c':"ir 'i hr h.",
                                    'A':"ir h i j 'h fr f.",
                                    'A*':"ir h i j 'h fr fg..",
                                    'd':"ir h i j 'h ir i."
                                   }
                     },
             '5.':{clef:"c3",
                  mediant:"d f hr 'i hr h.",
                  solemn:"d f hr i 'i hr h.",
                  termination:"hr 'i gr 'h fr f."
                 },
             '6.':{clef:"c4",
                  mediant:"f gh hr 'ixi hr 'g hr h.",
                  solemn:"f gh hr hg ixgi h hr 'hg gh..",
                  termination:"hr f gh 'g fr f."
                 },
             '6 alt':{clef:"c4",
                      mediant:"f gh hr g 'h fr f.",
                      termination:"hr f gh 'g fr f."
                     },
             '7.':{clef:"c3",
                  mediant:"hg hi ir 'k jr 'i jr j.",
                  shortMediant:"hg hi ir i.",
                  solemn:"ehg hi ir 'ik jr jr 'ji ij..",
                  shortSolemn:"ehg hi ir i.",
                  terminations:{'a':"ir 'j ir 'h hr gf..",
                                'b':"ir 'j ir 'h hr g.",
                                'c':"ir 'j ir 'h hr gh..",
                                'c2':"ir 'j ir 'h hr ih..",
                                'd':"ir 'j ir 'h hr gi.."
                               }
                 },
             '8.':{clef:"c4",
                  mediant:"g h jr 'k jr j.",
                  solemn:"g hg gj jr ji jk k 'jk jr j.",
                  terminations:{'G':"jr i j 'h gr g.",
                                'G*':"jr i j 'h gr gh..",
                                'c':"jr h j 'k jr j."
                               }
                 },
             'per.':{clef:"c4",
                     mediant:"ixhi hr g ixi h 'g fr f.",
                     termination:"gr d 'f fr ed.."
                    },
             "Introit 1":{"clef":"c4",
                          "mediant":"f gh hr 'hj hr hr 'hg gh..",
                          "termination":"gf gh hr hjh g f fr 'fff d."},
             "Introit 2":{"clef":"f3",
                          "mediant":"e fe eh hr hg hi i 'hi hr h.",
                          "termination":"hf fh hr i hf h ge fgf."},
             "Introit 3":{"clef":"c4",
                          "mediant":"g hj jr 'k jr jr 'ih~ jjj",
                          "termination":"ig hj jr j/ji hg h i gh.."},
             "Introit 4":{"clef":"c4",
                          "mediant":"hg gh hr hg gi i 'hi hr h.",
                          "termination":"hg gh hr gf gh 'g gr e."},
             "Introit 5":{"clef":"c3",
                          "mediant":"d f hr i 'i hr h.",
                          "termination":"f hr 'i gr 'h fr f."},
             "Introit 6":{"clef":"c4",
                          "mediant":"fg gf gh hr g 'ixi hr 'g fr f.",
                          "termination":"f gh hj g fr g fd f g f."},
             "Introit 7":{"clef":"c3",
                          "mediant":"ehg hi ir 'ik jr jr 'ji ij..",
                          "termination":"ig hi ir i!jwk i h hr 'hhh fe.."},
             "Introit 8":{"clef":"c4",
                          "mediant":"g hg gj jr ji jk k 'jk jr j.",
                          "termination":"jh hj jr j/ji gh ji 'h hr g."},
             'V.1':{clef:"c3",
                    mediant:"hr h g_hvGFEfgf."
                   },
             'V.2':{clef:"c4",
                    mediant:"hr h h/hf,fgwhvGFEfg/gf"
                   }
            };
var d_tones = {'1.':{clef:"c4",
                  mediant:"f gh hr 'ixi hr 'g hr h",
                  solemn:"f gh hr hg ixgi h hr 'hg gh",
                  terminations:{'D':"hr g f 'gh gr gvFED",
                                'g':"hr g f 'gh gr g",
                                'a':"hr g f 'g hr h"
                               }
                 },
             '2.':{clef:"f3",
                  mediant:"e f hr 'i hr h",
                  solemn:"e fe eh hr hg hi i 'hi hr h",
                  termination:"hr g 'e fr f"
                 },
             '3.':{clef:"c4",
                  mediant:"g hj jr 'k jr jr 'ih j",
                  solemn:"g hj jr 'jk jr jr 'ih hj",
                  terminations:{'a':"jr h 'j jr ih",
                                'a2':"jr ji hi 'h gr gh"
                               }
                 },
             '4.':{clef:"c4",
                  mediant:"h gh hr g h 'i hr h",
                  solemn:"h gh hr hg gi i 'hi hr h",
                  terminations:{'E':"hr g h ih gr 'gf e"
                               }
                 },
             '4 alt':{clef:"c3",
                      mediant:"i hi ir h i 'j ir i",
                      solemn:"i hi ir ih hj j 'ij ir i",
                      terminations:{'A':"ir h i j 'h fr f"
                                   }
                     },
             '5.':{clef:"c3",
                  mediant:"d f hr 'i hr h",
                  solemn:"d f hr i 'i hr h",
                  termination:"hr 'i gr 'h fr f"
                 },
             '6.':{clef:"c4",
                  mediant:"f gh hr 'ixi hr 'g hr h",
                  solemn:"f gh hr hg ixgi h hr 'hg gh",
                  termination:"hr f gh 'g fr f"
                 },
             '7.':{clef:"c3",
                  mediant:"hg hi ir 'k jr 'i jr j",
                  shortMediant:"hg hi ir",
                  solemn:"ehg hi ir 'ik jr jr 'ji ij",
                  shortSolemn:"ehg hi ir i",
                  terminations:{'a':"ir 'j ir 'h hr gf",
                                'd':"ir 'j ir 'h hr gi"
                               }
                 },
             '8.':{clef:"c4",
                  mediant:"g h jr 'k jr j",
                  solemn:"g hg gj jr ji jk k 'jk jr j",
                  terminations:{'G':"jr i j 'h gr g",
                                'c':"jr h j 'k jr j"
                               }
                 },
             'per.':{clef:"c4",
                     mediant:"ixhi hr ixi h 'g fr f",
                     termination:"gr d 'f fr ed"
                    }
            };
var Syl = (function(){
  var intUpdate=setTimeout(function(){Syl.updateWords();},8000);
  return {
    words:(window.localStorage&&window.localStorage.words&&JSON.parse(window.localStorage.words))||{},
    queue:[],
    syllabify:function(text,lang){
      var result=[],
          m,
          d,
          forceSyl=false,
          words=this.words;
      regexWords.exec("");
      while((m=regexWords.exec(text)) && m[0]){
        var w=(m[5]?(m[4]+m[5]+m[6]):m[3]).toLowerCase(),
            opi=m[4]?m[4].length:0,         // opening parenthesis index
            cpi=m[5]?1+opi+m[5].length:0,   // closing parenthesis index
            ai=w.split('*');                // accent indices
        w = ai.join('');
        m[3] = m[3] && m[3].replace(/\*/g,'');
        m[5] = m[5] && m[5].replace(/\*/g,'');
        ai.pop();
        var c = 0;
        ai.forEach(function(i,j){
          ai[j] = (c += i.length);
        });
        if(forceSyl && m[9])forceSyl=false;
        if(m[7])forceSyl=true;
        if(forceSyl) {
          d=[];
        } else if(w in words){
          d=words[w];
        } else {
          d=[];
          if(this.queue.indexOf(w)<0)this.queue.push(w);
        }
        var tmp=["",m[1],"",m[2]||"",m[2]||""],
            index=m.index+tmp.join('').length,
            i=0,
            wi=0,
            di;
        while(i<d.length){
          tmp[10]="";
          di=wi+d[i];
          if(m[5]){
            if(di>opi){
              ++di;opi=m[3].length;
            }
            if(di>cpi){
              ++di;cpi=m[3].length;
            }
          }
          var ts = m[3].slice(wi,di);
          tmp[2] = tmp[3] = tmp[3] + ts;
          //tmp[3] = ts;
          
          tmp.index=index+wi;
          if(wi + tmp[2].length >= ai[0]){
            ai.shift();
            tmp[7] = '*';
          }
          result.push(syllable(tmp,null,{nbsp:""}));
          m[2] = "";
          wi=di;
          ++i;
          tmp=["","","",""];
        }
        var ts = m[3].slice(wi);;
        tmp[2] = tmp[3] = tmp[3] + ts;
        //tmp[3] = ts;
        tmp[8] = m[8];
        tmp[9]=" ";
        tmp[10]=m[10];
        if(ai.length) tmp[7]='*';
        tmp.index=index+wi;
        result.push(syllable(tmp,null,{nbsp:""}));
      }
      return result;
    },
    updateWords:function(){
      if(this.queue.length>0){
        $.getScript("http://bb.christian.net/syl.php?txt="+this.queue.join('+'));
        this.queue=[];
      } else {
        intUpdate=setTimeout(function(){Syl.updateWords();},5000);
      }
    },
    addResult:function(list){
      intUpdate=setTimeout(function(){Syl.updateWords();},5000);
      var array=list.split(" ");
      for(i in array){
        var w=array[i],
            data=[],
            idx=w.indexOf('-'),
            lastIdx=0;
        while(idx>=0){
          data.push(idx-lastIdx);
          lastIdx=++idx;
          idx=w.indexOf('-',idx);
        }
        this.words[w.replace(/-/g,'')]=data;
      }
      if(typeof(updateText)=="function")updateText();
      if(window.localStorage)window.localStorage.words=JSON.stringify(this.words);
    }
  }
})();
function syllable(match,index,bi) {
  var nbsp=bi?bi.nbsp:" ";
  var prespace=match[4]||match[5]||"";
  var isAccent = (match[7] == '*' || regexAccent.test(match[3]));
  if(typeof(match)=="string"){
    if(bi && bi.makeSylSubstitutions)match = bi.makeSylSubstitutions(match);
    return {index:index,
            all:match,
            punctuation:match,
            space: "",
            syl:"",
            prepunctuation: "",
            word: undefined
    };
  } else {
    if(bi && bi.makeSylSubstitutions){
      var newmatch=[];
      for(var i=0;i<match.length;++i){
        newmatch.push(bi.makeSylSubstitutions(match[i]));
      };
      match=newmatch;
    }if(bi && bi.makeSylSubstitutions)
    var elision=false;
    var lpi,rpi;
    lpi=match[2].lastIndexOf('(');
    rpi=match[2].indexOf(')');
    if(lpi>=0 && rpi>=0){
      elision=true;
      lpi=match[2].lastIndexOf('(');
      match[2]=match[2].slice(0,lpi)+'<i>'+match[2].slice(lpi+1);
      lpi=match[3].lastIndexOf('(');
      match[3]=match[3].slice(0,lpi)+'<i>'+match[3].slice(lpi+1);
      match[2]=match[2].replace(')','</i>');
      match[3]=match[3].replace(')','</i>');
    }
    var oTags=getTagsFrom(match[1]);
    var cTags=getTagsFrom(match[10]);
    var tmp;
    var prepunc=typeof(index) == "string"? index.replace(/(["'«»‘’“”„‟‹›‛])\s*/g,"$1"+nbsp).replace(/(\d+)\.?\s*/g,"$1."+nbsp) : "";
    var sylnospace=match[3].slice(prespace.length);
    return {index: match.index,
            all: match[2],
            syl: match[1] + (prepunc?sylnospace:match[3]) + match[10],
            vowel: match[6]||(tmp=regexVowel.exec(match[3]),(tmp&&tmp[0]||"")),
            separator: match[7], // - or *
            punctuation: match[8]? (match[8].replace(/\s|[\*†]$/g,"").replace(/[:;"«»‘’“”„‟‹›‛]/g,nbsp+"$&")) : "",
            prespace: prepunc?"":prespace,
            sylnospace: sylnospace,
            space: match[9],
            accent: isAccent,
            prepunctuation: prepunc,
            word: undefined,
            oTags: oTags,
            cTags: cTags,
            elision: elision,
            flex: match[8] && match[8].match(/†$/),
            mediant: match[8] && match[8].match(/\*$/)
    };
  }
}
function toneGabc(match) {
  return {index: match.index,
          all: match[0],
          accent: match[1] == "'",
          gabc: "(" + match[(match[1] == "'"? 3 : 2)] + ")",  // use group 3 if accented, otherwise group 2  (this is because accents can possibly be open, but should never be drawn that way)
          gabcClosed: "(" + match[3] + ")",
          open: match[4] == "r"
         };
}
function getKeys(aa) {
  var result = [];
  var i;
  for(i in aa) {
    result.push(i);
  }
  return result;
}
function getPsalmTones(tones) {
  return getKeys(tones||g_tones);
}
function getEndings(tone) {
  var endings = [];
  var t = g_tones[tone];
  if(t && t.terminations) {
    var i;
    for(i in t.terminations) {
      endings.push(i);
    }
  }
  return endings;
}

function getFlexGabc(mediant) {
  if(typeof(mediant)=="string") mediant = getGabcTones(mediant);
  var toneTenor = mediant.toneTenor;
  var toneFlex = mediant.toneFlex;
  return toneTenor + " " + toneTenor + "r '" + toneTenor + " " + toneFlex + "r " + toneFlex + ".";
}

function applyPsalmTone(text,gabc,useOpenNotes,useBoldItalic,onlyVowel,format,verseNumber,prefix,suffix,italicizeIntonation,result,gabcShort) {
  if(typeof(result)!="object") {
    result={shortened:false};
  }
  var bi = format || bi_formats.gabc;
  if(useOpenNotes == undefined) {
    useOpenNotes = true;
  }
  if(useBoldItalic == undefined) {
    useBoldItalic = true;
  }
  var openCount = 0;
  var verseNum = regexVerseNumber.exec(text);
  if(verseNum) {
    if(prefix)text = text.slice(verseNum[0].length);
    verseNum = parseInt(verseNum[1]);
  } else {
    verseNum = verseNumber||"";
  }
  prefix = (prefix && bi.verse[0])||"";
  suffix = (suffix && bi.verse[1])||"";
  var tmp = prefix.split(',');
  if(tmp.length>1 && tmp.slice(-1)[0].length>0) {
    prefix = tmp[typeof(verseNum)=='number'? (verseNum-1)%tmp.length : 0];
  }
  tmp = suffix.split(',');
  if(tmp.length>1 && tmp.slice(-1)[0].length>0) {
    suffix = tmp[typeof(verseNum)=='number'? (verseNum-1)%tmp.length : 0];
  }
  var syl = getSyllables(text,bi);
  var toneList = typeof(gabc)=="string"? getGabcTones(gabc) : gabc;
  if(typeof(toneList.eval)=="function"){
    t = syl.slice(-3).reverse();
    toneList = toneList.eval();
  }
  var toneListShort = (typeof(gabcShort)=="string"? getGabcTones(gabcShort) : gabcShort)||toneList;
  var tones = toneList.tones;
  var tonesShort = (gabcShort&&toneListShort.tones) || tones.slice(0);
  var r;
  while(!finished){
    r = '';
    var si = syl.length - 1;
    var lastOpen;
    var vow;
    var italic=false;
    var lastAccentI = si + 1;
    var lastTone;
    var finished=false;
    for(var ti = tones.length - 1; (ti >= 0 || lastOpen) && si >= 0; --ti,--si) {
      var tone = tones[ti];
      var s = syl[si];
      if(ti == tones.length - 1 && si == syl.length - 1 && toneList.accents > 0 && s.accent){
        ti = toneList.lastAccentI();
        if(!toneList.lastAccent().open){
          var addDots = /\./g.test(tone.all);
          tone = tones[ti];
          if(addDots && !/\./.test(tone.all)){
            var dots = '.'.repeat( tone.gabc.match(/[a-m]/gi).length );
            tone = $.extend({},tone);
            tone.gabc = tone.gabcClosed = tone.gabc.slice(0,-1) + dots + ')';
            lastOpen = true;
          }
        }
      }
      if(tone && tone.open && !tone.accent) {
        if(italic) {
          italic = false;
        }
        if(lastOpen && lastOpen.accent) {
          var count = 0;
          while(!s.accent && count < 2) {
            r=s.punctuation + tone.gabcClosed+r;
            if(!onlyVowel && useBoldItalic) {
              if(onlyVowel && (vow = regexVowel.exec(s.syl))) {
                r=s.syl.slice(0,vow.index) + bi.bold[0] + vow[0] + bi.bold[1] + s.syl.slice(vow.index + vow[0].length)+r;
              } else {
                r=s.prespace + bi.bold[0] + s.sylnospace + bi.bold[1]+r;
              }
            } else {
              r=s.syl+r;
            }
            r=s.prepunctuation+r;
            --si;
            ++count;
            s = syl[si];
          }
          lastOpen = undefined;
          if(useOpenNotes) {
            r=tone.gabc.slice(0,-1) + "[ocba:1;6mm])"+r;
          } else {
            r=tone.gabcClosed+r;
          }
          r=s.punctuation+r;
          if(s.accent) {
            if(!onlyVowel && useBoldItalic) {
              if(onlyVowel && (vow = regexVowel.exec(s.syl))) {
                r=s.syl.slice(0,vow.index) + bi.bold[0] + vow[0] + bi.bold[1] + s.syl.slice(vow.index + vow[0].length)+r;
              } else {
                r=s.prespace + bi.bold[0] + s.sylnospace + bi.bold[1]+r;
              }
            } else {
              r=s.syl+r;
            }
            lastAccentI = si;
          } else {
            r=s.syl+r;
          }
          r=s.prepunctuation+r;
        } else {
          lastOpen = tone;
          openCount = (lastTone && !lastTone.accent && !lastTone.open)? 1 : 0;
          ++si;
        }
      } else if(tone && tone.accent) {
        var openNoteBeforeAccent = !lastOpen && s.accent;
        italic = false;
        if(lastOpen) {
          var originalSi = si;
          while(s && !s.accent) {
            --si;
            s = syl[si];
          }
          var countToNext = lastAccentI - si;
          if(countToNext > 3 || si < 0) {
            if(algorithmTwoAfter) {
              while(countToNext > 3) {
                si += 2;
                countToNext = lastAccentI - si;
              }
            } else if(algorithmTwoBefore && countToNext > 3) {
              si = lastAccentI - 2;
            }
            s = syl[si];
            if(s)s.accent = true;
          }
          si = originalSi;
          s = syl[si];
          while(s && !s.accent) {
            if(useOpenNotes) {
              ++openCount;
              if(syl[si-1] && syl[si-1].accent && openCount > 1) {
                r=lastOpen.gabc+r;
              } else {
                r=lastOpen.gabcClosed+r;
              }
            } else {
              r=lastOpen.gabcClosed+r;
            }
            r=s.prepunctuation + s.syl + s.punctuation+r;
            --si;
            s = syl[si];
          }
          if(s && useOpenNotes && openCount <= 1) {
            r=syl[si+1].prespace+lastOpen.gabc+r;
          }
          lastOpen = undefined;
        } else if(!s.accent) {
          lastOpen = tone;
          openCount = 0;
        }
        if(s){
          r=s.punctuation + tone.gabc+r;
          if(useBoldItalic) {
            if(onlyVowel && (vow = regexVowel.exec(s.syl))) {
              r=s.syl.slice(0,vow.index) + bi.bold[0] + vow[0] + bi.bold[1] + s.syl.slice(vow.index + vow[0].length)+r;
            } else {
              r=s.prespace + bi.bold[0] + s.sylnospace + bi.bold[1]+r;
            }
          } else {
            r=s.syl+r;
          }
          r=s.prepunctuation+r;
          if(!lastOpen) {
            lastAccentI = si;
          }
          if(openNoteBeforeAccent) {
            tone = tones[--ti];
            if(useOpenNotes && tone && tone.open) {
              r=s.prespace + tone.gabc.slice(0,-1) + "[ocba:1;6mm])"+r;
            }
          }
        }
      } else {
        if(lastOpen) {
          var tenorUntilAccent = false;
          var oldSi = si;
          while(si > ti && s) {
            if(s.flex) {
              r=s.prepunctuation + s.syl + s.punctuation + " †(" + toneList.toneFlex + ".)"+r;
              tenorUntilAccent = "(" + toneList.toneFlex + ")";
            } else {
              tenorUntilAccent = !s.accent && tenorUntilAccent;
              r=s.prepunctuation + s.syl + s.punctuation + (tenorUntilAccent || lastOpen.gabcClosed)+r;
            }
            --si;
            s = syl[si];
          }
          if(oldSi==si && useOpenNotes){
            r = lastOpen.gabc + r;
          }
          lastOpen = undefined;
        }
        if(!(s&&tone))break;
        r=s.punctuation + tone.gabc+r;
        if(useBoldItalic && !italic && tones[ti+1] && (tones[ti+1].accent || (tones[ti+1].open && (italicizeIntonation || si > ti || (tones[ti+2] && tones[ti+2].accent && tones[ti+3] && !tones[ti+3].open))))) {
          italic = true;
        }
        if(italic) {
          if(onlyVowel) {
            if(ti>0 && tones[ti-1].open && (vow = regexVowel.exec(s.syl))) {
              r=s.syl.slice(0,vow.index) + bi.italic[0] + vow[0] + bi.italic[1] + s.syl.slice(vow.index + vow[0].length)+r;
            } else {
              r=s.syl+r;
            }
          } else {
            r=s.prespace + bi.italic[0] + s.sylnospace + bi.italic[1]+r;
          }
        } else {
          r=s.syl+r;
        }
        r=s.prepunctuation+r;
      }
      lastTone = tone;
    }
    if(!result.shortened && ti>=0 && toneList.intonation > 0){
      var punctumMorum=(tones[tones.length-1].all.slice(-1)=='.');
      tones = tonesShort;
      tones.splice(toneListShort.intonation + 1, tones.length - toneListShort.intonation - 1);
      if(punctumMorum) {
        regexToneGabc.exec('');
        tones.push(toneGabc(regexToneGabc.exec(tones[tones.length-1].gabcClosed.slice(1,-1)+'.')));
      }
      result.shortened=true;
      r='';
    } else {
      finished = true;
    }
  }
  return (((prefix && prefix.replace(/\(([^$]*)\$c([^)]*)\)/gi,String(verseNum?("$1" + verseNum + "$2"):"")).replace(/\$c/gi,String(verseNum))) || "")
    + r + ((suffix && suffix.replace(/\(([^$]*)\$c([^)]*)\)/gi,String(verseNum?("$1" + verseNum + "$2"):"")).replace(/\$c/gi,String(verseNum))) || "")).replace(/\) ?\(([a-m]r)/g," $1");
}

function removeIntonation(t) {
  t.tones.splice(0,t.intonation);
  t.intonation = 0;
  return t;
}

function GABCTones(tones,
  intonation,
  accents,
  preparatory,
  afterLastAccent,
  toneTenor,
  toneFlex) {
  this.tones = tones;
  this.intonation = intonation;
  this.accents = accents;
  this.preparatory = preparatory;
  this.afterLastAccent = afterLastAccent;
  this.toneTenor = toneTenor;
  this.toneFlex = toneFlex;
}
GABCTones.prototype.lastAccent = function(){
  if(this.accents == 0) return undefined;
  for(var i=this.tones.length - 1; i>=0; --i){
    var result = this.tones[i];
    if(result.accent) return result;
  }
};
GABCTones.prototype.lastAccentI = function(){
  if(this.accents == 0) return undefined;
  for(var i=this.tones.length - 1; i>=0; --i){
    var result = this.tones[i];
    if(result.accent) return i;
  }
}
function getGabcTones(gabc,prefix) {
  var evaluatable = new Evaluatable(gabc,getGabcTones,prefix);
  if(!evaluatable.isString()) return evaluatable;
  if(prefix) gabc = prefix + gabc;
  var tones = [];
  var match;
  regexToneGabc.exec('');
  while(match=regexToneGabc.exec(gabc)) {
    tones.push(toneGabc(match));
  }
  var intonation = 0;
  var accents = 0;
  var preparatory = 0;
  var afterLastAccent = 0;
  var state=3;
  var lastOpen = undefined;
  var toneTenor;
  var toneFlex;
  for(var i=tones.length - 1; i>=0; --i) {
    var ton = tones[i];
    if(ton.accent) {
      ++accents;
      state = 1;
      if(lastOpen) {
        lastOpen = undefined;
      } else if(tones[i-1].open) {
        --i;
      }
    }
    else if(ton.open) {
      toneTenor = ton.all[0];
      if(state==3) {
        afterLastAccent = 0;
        state = 1;
      }
      lastOpen = ton;
    } else if(state==3) {
      afterLastAccent++;
    } else if(state==1) {
      if(!lastOpen) {
        ++preparatory;
      } else {
        if(intonation > 0 || ton.gabcClosed != lastOpen.gabcClosed)
          ++intonation;
        continue;
      }
      lastOpen = undefined;
    }
  }
  if(toneTenor) {
    var clef = (_clef[0] == "f")? 6 : 1;
    clef += (parseInt(_clef.slice(-1)) * 2);
    var toneNumber = ((parseInt(toneTenor,36) - 10) + 16 - clef) % 8;
    var code = toneTenor.charCodeAt(0);
    code -= (toneNumber == 0 || toneNumber == 3)? 2 : 1;
    var toneFlex = String.fromCharCode(code);
  }
  return new GABCTones(tones,
                       intonation,
                       accents,
                       preparatory,
                       afterLastAccent,
                       toneTenor,
                       toneFlex);
}

var _getSyllables = function(text,bi) {
  if(typeof(text)!="string") {
    return text;
  }
  var syl = [];
  var match;
  var lastI = 0;
  while(match=regexLatin.exec(text)) {
    syl.push(syllable(match,text.slice(lastI,match.index),bi));
    lastI = match.index + match[0].length;
  }
  getWords(syl);
  return syl;
}
var getSyllables = _getSyllables;
var _getEnSyllables = function(text){return Syl.syllabify(text);};

function getWords(syls) {
  var len = syls.length;
  var curWord = [];
  var r = [];
  var curWordAccents = 0;
  for(var i = 0; i < len; ++i) {
    var syl = syls[i];
    curWord.push(syl);
    syl.word = curWord;
    if(syl.accent) ++curWordAccents;
    if(i == (len - 1) || syl.space) {
      if(curWordAccents == 0) {
        if(curWord.length == 2) {
          curWord[0].accent = true;
        } else if(curWord.length > 2) {
          if(curWord[0].vowel == curWord[0].sylnospace.slice(0,1)) {
            curWord[0].accent = true;
          } else {
            for(var j = 0; j < curWord.length; ++j) {
              syl = curWord[j];
              if(syl.vowel == 'æ' || syl.vowel == 'œ') {
                syl.accent = true;
                break;
              }
            }
          }
        }
      }
      r.push(curWord);
      curWord = [];
      curWordAccents = 0;
    }
  }
  return r;
}

function addBoldItalic(text,accents,preparatory,sylsAfterBold,format,onlyVowel,verseNumber,prefix,suffix) {
  if(!sylsAfterBold) sylsAfterBold = 0;
  var f = bi_formats[format];
  if(!f) f = bi_formats.html;
  var verseNum = regexVerseNumber.exec(text);
  if(verseNum) {
    if(prefix)text = text.slice(verseNum[0].length);
    verseNum = parseInt(verseNum[1]);
  } else {
    verseNum = verseNumber||"";
  }
  prefix = (prefix && f.verse[0])||"";
  suffix = (suffix && f.verse[1])||"";
  var syl = getSyllables(text,f);
  var doneAccents = 0;
  var donePrep = 0;
  var sylCount = 0;
  var i=syl.length - 1;
  var lastAccentI = i + 1;
  var result = [];
  var bold = false;
  var vow;
  for(; i >= 0; --i) {
    var s = syl[i];
    if(sylCount < sylsAfterBold) {
      ++sylCount;
      if(sylCount == sylsAfterBold) {
        bold = true;
      }
      result.push(s.prepunctuation + s.syl + s.punctuation);
      continue;
    }
    if(doneAccents < accents && s.accent) {
      var countToNext = lastAccentI - i;
      if(countToNext > 3) {
        if(algorithmTwoAfter) {
          while(countToNext > 3) {
            i += 2;
            result.pop();
            result.pop();
            countToNext = lastAccentI - i;
          }
        } else if(algorithmTwoBefore) {
          while (i < lastAccentI - 2) {
            result.pop();
            ++i;
          }
        }
        s = syl[i];
        s.accent = true;
      }
      lastAccentI = i;
      result.push(s.punctuation);
      if(onlyVowel && (vow = regexVowel.exec(s.syl))) {
        if(!bold && doneAccents>=accents) {
          result.push(s.syl);
        } else {
          result.push(s.syl.slice(0,vow.index) + f.bold[0] + vow[0] + f.bold[1] + s.syl.slice(vow.index + vow[0].length));
        }
      } else {
        result.push(s.prespace + f.bold[0] + s.sylnospace + f.bold[1]);
      }
      result.push(s.prepunctuation);
      ++doneAccents;
      bold = false;
    } else if(bold) {
      result.push(s.punctuation);
      if(onlyVowel && (vow = regexVowel.exec(s.syl))) {
        result.push(s.syl.slice(0,vow.index) + f.bold[0] + vow[0] + f.bold[1] + s.syl.slice(vow.index + vow[0].length));
        ++doneAccents;
        bold=false;
      } else {
        result.push(s.prespace + f.bold[0] + s.sylnospace + f.bold[1]);
      }
      result.push(s.prepunctuation);
    } else if(doneAccents == accents && donePrep < preparatory) {
      result.push(s.punctuation);
      if(onlyVowel) {
        if((donePrep == preparatory - 1) && (vow = regexVowel.exec(s.syl))) {
          result.push(s.syl.slice(0,vow.index) + f.italic[0] + vow[0] + f.italic[1] + s.syl.slice(vow.index + vow[0].length));
        } else {
          result.push(s.syl);
        }
      } else {
        result.push(s.prespace + f.italic[0] + s.sylnospace + f.italic[1]);
      }
      result.push(s.prepunctuation);
      ++donePrep;
    } else {
      result.push(s.prepunctuation + s.syl + s.punctuation + (s.flex?f.nbsp+sym_flex:""));
    }
  }
  return ((prefix && prefix.replace(/\(([^$]*)\$c([^)]*)\)/gi,String(verseNum?("$1" + verseNum + "$2"):"")).replace(/\$c/gi,String(verseNum))) || "")
    + result.reverse().join('') +
         ((suffix && suffix.replace(/\(([^$]*)\$c([^)]*)\)/gi,String(verseNum?("$1" + verseNum + "$2"):"")).replace(/\$c/gi,String(verseNum))) || "");
}
function normalizePsalm(text,includeGloriaPatri) {
  text = text.replace(/\s+$/,'');
  return includeGloriaPatri?
      (text + "\n" + gloria_patri)
    : text;
}
var _novaVulgata=null;
var regexBaseNovaVulgata=["PSALMUS ","[^\\n]*\\n((?:\\S|(\\s+(?!PSALMUS \\d)))+)(?:\\s+PSALMUS|\\s*$)"];
function getPsalm(psalmNum, includeGloriaPatri, useNovaVulgata, success) {
  if(useNovaVulgata){
    if(_novaVulgata==null){
      $.get("psalms/NovaVulgata.txt", function(data){
        _novaVulgata=data;
        getPsalm(psalmNum, includeGloriaPatri, useNovaVulgata, success);
      });
    } else {
      var regex=new RegExp(regexBaseNovaVulgata.join(psalmNum));
      var psalm = regex.exec(_novaVulgata);
      if(psalm) {
        success(normalizePsalm(psalm[1],includeGloriaPatri));
      } else {
        success("ERROR retrieving PSALMUS " + psalmNum);
      }
    }
  } else {
    var calledSuccess=false;
    psalmNum = String(psalmNum);
    if(psalmNum.length < 3) psalmNum = ("00" + psalmNum).slice(-3);
    var t = $.ajax({url:"psalms/" + psalmNum,
      type: "GET",
      crossDomain: false,
      success: function(data) {
        if(data.responseText != undefined) {
          var temp = $(data.responseText);
          var pI = temp.length;
          while(pI >= 0 && !/p/i.test(temp[--pI].tagName)) ;
          temp = temp[pI].innerHTML.split('\n');
          for(var i in temp) {
            temp[i] = temp[i].trim();
          }
          data = temp.join(' ').replace(/\s*<br>\s*/g,"\n");
          if(data.charCodeAt(0) == 65279) data = data.slice(1);
        }
        if(data && !calledSuccess) {
          calledSuccess=true;
          success(normalizePsalm(data,includeGloriaPatri));
        }
      },
      complete: function(jqXHR, textStatus) {
        if((t != undefined && t.responseText != undefined && t.responseText === "") || textStatus == "error") return;
        var text = t.responseText;
        if(!calledSuccess) {
          calledSuccess=true;
          success(normalizePsalm(text,includeGloriaPatri));
        }
      },
      dataType:"text"
    });
  }
}
function Evaluatable(s,callback,prefix){
  this.string = s.replace(regexQuoteTernary,'$1"$2"');
  this.callback = callback;
  if(this.string.length == s.length) {
    this.eval = this.getString;
    this.isString = function(){return true;}
  } else if(callback||prefix) {
    this.string = ((callback&&'callback')||'') + '("' + (prefix||'') + '" + (' + this.string + '))';
  }
}
Evaluatable.prototype.isString = function(){return false;};
Evaluatable.prototype.getString = function(){return this.string;};
Evaluatable.prototype.eval = function(){
  callback=this.callback;
  return eval(this.string);
};

function splitLine(oLine) {
  var line = oLine.split(' * ');
  if(line.length == 3) {
    var temp = line.splice(0,2);
    line.splice(0,0,temp.join(' ' + sym_flex + ' '));
  }
  return line;
}
var internationalTextBoxKeyDown = (function(){
  var lastKey = 0;
  var dictionaries=
      {222://apostrophe
        {"false":
          {'a':'á',
           'e':'é',
           'i':'í',
           'o':'ó',
           'u':'ú',
           'y':'ý',
           'A':'Á',
           'E':'É',
           'I':'Í',
           'O':'Ó',
           'U':'Ú',
           'Y':'Ý',
           'æ':"ǽ",
           'œ':"oé",
           'Æ':"Ǽ",
           'Œ':"Oé"
           },
        "true":
          {'a':'ä',
           'e':'ë',
           'i':'ï',
           'o':'ö',
           'u':'ü',
           'y':'ÿ',
           'A':'Ä',
           'E':'Ë',
           'I':'Ï',
           'O':'Ö',
           'U':'Ü',
           'æ':"aë",
           'œ':"oë",
           'Æ':"Aë",
           'Œ':"Oë"
          }
        },
        69://e
        {"false":
          {'a':'æ',
           'o':'œ',
           'A':'Æ',
           'O':'Œ'
          },
        "true":
          {'a':'æ',
           'o':'œ',
           'A':'Æ',
           'O':'Œ'
          }
        },
        8://backspace
        {"false":
          {
            '†':"+",
            'æ':"ae",
            'œ':"oe",
            'Æ':"Ae",
            'Œ':"Oe",
            'á':'a',
            'é':'e',
            'í':'i',
            'ó':'o',
            'ú':'u',
            'ý':'y',
            'Á':'A',
            'É':'E',
            'Í':'I',
            'Ó':'O',
            'Ú':'U',
            'Ý':'Y',
            'ä':'a',
            'ë':'e',
            'ï':'i',
            'ö':'o',
            'ü':'u',
            'ÿ':'y',
            'Ä':'A',
            'Ë':'E',
            'Ï':'I',
            'Ö':'O',
            'Ü':'U',
            'Ǽ':"Aé",
            'ǽ':"aé"
          },
        "true":
          {
          }
        }
      };
  return function(e){
    if(typeof(getHeaderLen)=='function' && getHeaderLen(this.value)>0) {
      // Only process as international textbox if the cursor is not within parentheses:
      var lastOpenParen = this.value.lastIndexOf('(',this.selectionStart-1);
      var lastCloseParen = this.value.lastIndexOf(')',this.selectionStart-1);
      if(lastCloseParen < lastOpenParen) return;
    }
    if(e.which == 187 && e.shiftKey) { //if + was entered
      var selEnd=this.selectionEnd;
      var len=1;
      this.value=this.value.slice(0,this.selectionStart) + '†' + this.value.slice(selEnd);
      this.selectionStart=this.selectionEnd=selEnd+len;
      e.preventDefault();
      return;
    }
    var cbEnglish=$("#cbEnglish")[0];
    if(cbEnglish&&cbEnglish.checked)return;
    var dictionary=dictionaries[e.which];
    if(dictionary && this.selectionStart==this.selectionEnd && this.selectionStart>0){
      var previousChar=this.value[this.selectionStart-1];
      var r=dictionary[e.shiftKey][previousChar];
      if(r){
        var selEnd=this.selectionEnd;
        var len=r.length - 1;
        this.value=this.value.slice(0,--this.selectionStart) + r + this.value.slice(selEnd);
        this.selectionStart=this.selectionEnd=selEnd+len;
        e.preventDefault();
        return;
      }
    }
  }
})();

function splitGabc(gabc,offset) {
  var gSyl = [];
  regexGabc.exec('');
  while((match = regexGabc.exec(gabc))) {
    var tone,tones=[];
    regexTones.exec('');
    while((tone=regexTones.exec(match[1]))){
      tones.push(tone[0]);
    }
    gSyl.push({match: match,
               hasSyllable: match[5],
               gabc: '(' + match[1] + ')',
               isClef: match[4],
               isBar: match[3],
               tones: tones,
               index: match.index + offset
              });
  }
  return gSyl;
}
function decompile(mixed,ignoreSyllablesOnDivisiones) {
  regexOuter.exec('');
  var curClef;
  var regRep=/^[cf]b?[1-4]\s*|(\s+)[`,;:]+\s*/gi;
  var text=[];
  var gabc='';
  var match;
  var ws;
  var tws='';
  var verses=[];
  var hasElisions=false;
  var lastVerseI=0;
  var lastClef='';
  var verseHasClef=false;
  var lastVerse=function(){return verses[verses.length-1]||null;}
  var match=regexOuter.exec(mixed);
  var verseReps=0;
  while(match) {
    ws=match[rog.whitespace]||'';
    var m=undefined;
    var syl=match[rog.syl];
    if(gabc.length==0) {
      regexGabc.exec('');
      m=regexGabc.exec(match[rog.gabc]);
      if(m && m[4]) {
        lastClef=m[4];
        if(gabc.length==0)verseHasClef=true;
      }
    }
    if(tws==' '&&!syl) {
      regexGabc.exec('');
      m=regexGabc.exec(match[rog.gabc]);
      if(!m||m[4])text.push(tws);
    } else {
      text.push(tws);
    }
    if(syl && (!ignoreSyllablesOnDivisiones || !match[rog.gabc].match(/^[:;,\s]*$/))){
      var sylR=syl.replace(/<i>([aeiouy])<\/i>/ig,'($1)');
      hasElisions = hasElisions||(syl!=sylR);
      text.push(sylR);
    }
    gabc+=match[rog.gabc] + (ws.replace(/[^\n]*\n[^\n]*/g,'\n')||" ");
    var nextMatch=regexOuter.exec(mixed);
    if(match[rog.gabc]=='::' || !nextMatch) {
      if(nextMatch && lastVerseI>0) {
        text.splice(lastVerseI,0,'\n\n');
        text[lastVerseI-1] = text[lastVerseI-1].replace(/^\s+|\s+$/,'');
        text[lastVerseI+1] = text[lastVerseI+1].replace(/^\s+|\s+$/,'');
      }
      if(!hasElisions) {
        var tempVerse=gabc.replace(/^\s+|\s+$/,'');
        var temp2=tempVerse.replace(regRep,'$1');
        var lastV=lastVerse();
        if(verseHasClef) {
          temp2 = temp2.slice(lastClef.length).replace(/^\s+/,'');
        }
        if(!lastV || temp2!=lastV.replace(regRep,'$1')) {
          if(!verseHasClef && verses.length==0)tempVerse = lastClef + ' ' + tempVerse;
          if(verseReps==1){
            verses.push(verses.pop()+"\n"+tempVerse);
          } else {
            verses.push(tempVerse);
            if(lastVerseI>0) {
              text[lastVerseI]='\n--\n';
            }
            verseReps=1;
          }
        } else {
          if(lastV.match(/^[cf]b?[1-4]/i)) {
            if(!verseHasClef && lastClef)tempVerse = lastClef + ' ' + tempVerse;
          }
          if(tempVerse.length>lastV.length) {
            verses[verses.length-1] = tempVerse;
          }
          ++verseReps;
        }
        lastVerseI=text.length;
      }
      verseHasClef=hasElisions=false;
      gabc='';
    }
    tws=ws;
    match=nextMatch;
  }
  if(tws)text.push(tws);
  regexGabc.exec('');
  var gs =verses.join('\n--\n');
  gSyl=[];
  var offset = 0;
  verses.forEach(
    function(a,b){
      gSyl.push(splitGabc(a,offset));
      offset += a.length + 4;
    });

  //gSyl = splitGabc(gs);
  var s = text.join('').replace(/\s+/g,' ').replace(/^\s+|\s+$|[{}-]/g,'');
  var index=s.indexOf(' ');
  if(index>1) {
    // make the rest of the first word minuscule
    s=s[0] + s.slice(1,index).toLowerCase() + s.slice(index);
  }
  return s;
}
window['getPsalm'] = getPsalm;
window['getPsalmTones'] = getPsalmTones;
window['getEndings'] = getEndings;
window['applyPsalmTone'] = applyPsalmTone;
window['getSyllables'] = getSyllables;
window['addBoldItalic'] = addBoldItalic;
window['decompile'] = decompile;