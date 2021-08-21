/*
Copyright (C) 2021 sixtysixgames

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
/* 
    Created on : 7 Aug 2021, 10:59:41
    Author     : sixtysixgames
*/
//General Letter Frequencies : beginning, middle, end
_e = new Array(
			Math.ceil(1.6),
			Math.ceil((12.41670 + 12.4 + 14.00)/3),
			Math.ceil(19.4)
		);
_t=new Array(
			Math.ceil(15.2),
			Math.ceil((9.69225 + 8.9 + 9.85)/3) ,
			Math.ceil(10.0)
		);
_a =new Array(
			Math.ceil(11.4),
			Math.ceil( (8.20011 + 8.0 + 7.49 )/3) ,
			Math.ceil(2.2)
		);
_i =new Array(
			Math.ceil(6.9),
			Math.ceil((7.68052 +6.7 +6.65)/3) ,
			Math.ceil(1.4)
		);
_n =new Array(
			Math.ceil(2.2),
			Math.ceil((7.64055 +7.0 +6.74)/3) ,
			Math.ceil(7.7)
		);
_o =new Array(
			Math.ceil(6.0),
			Math.ceil((7.14095 +7.6 +7.37)/3) ,
			Math.ceil(4.5)
		);
_s =new Array(
			Math.ceil(6.9),
			Math.ceil((7.06768 +6.2 +6.95)/3) ,
			Math.ceil(10.8)
		);
_r =new Array(
			Math.ceil(2.0),
			Math.ceil((6.68132 +6.1 +6.14)/3) ,
			Math.ceil(6.9)
		);
_l =new Array(
			Math.ceil(2.9),
			Math.ceil((4.48308 +3.6 +3.57)/3) ,
			Math.ceil(2.1)
		);
_d =new Array(
			Math.ceil(3.4),
			Math.ceil((3.63709 +4.6 +3.62)/3) ,
			Math.ceil(12.7)
		);
_h =new Array(
			Math.ceil(8.5),
			Math.ceil((3.50386 +6.5 +4.22)/3) ,
			Math.ceil(2.6)
		);
_c =new Array(
			Math.ceil(3.6),
			Math.ceil((3.44391 +2.2 +3.54)/3) ,
			Math.ceil(0.1)
		);
_u =new Array(
			Math.ceil(1.1),
			Math.ceil((2.87770 +2.7 +3.00)/3) ,
			Math.ceil(1.0)
		);
_m =new Array(
			Math.ceil(4.6),
			Math.ceil((2.81775 +2.5 +3.39)/3) ,
			Math.ceil(1.9)
		);
_f =new Array(
			Math.ceil(3.5),
			Math.ceil((2.35145 +2.2 +2.18)/3) ,
			Math.ceil(3.7)
		);
_p =new Array(
			Math.ceil(2.6),
			Math.ceil((2.03171 +1.6 +2.43)/3) ,
			Math.ceil(0.5)
		);
_y =new Array(
			Math.ceil(1.7),
			Math.ceil((1.89182 +2.0 +1.64)/3) ,
			Math.ceil(5.8)
		);
_g =new Array(
			Math.ceil(1.6),
			Math.ceil((1.81188 +2.0 +1.74)/3) ,
			Math.ceil(3.2)
		);
_w =new Array(
			Math.ceil(7.0),
			Math.ceil((1.35225 +2.3 +1.69)/3) ,
			Math.ceil(1.1)
		);
_v =new Array(
			Math.ceil(0.5),
			Math.ceil((1.24567 +0.8 +1.16)/3) ,
			Math.ceil(0.0)
		);
_b =new Array(
			Math.ceil(4.2),
			Math.ceil((1.06581 +1.3 +1.29)/3) ,
			Math.ceil(0.1)
		);
_k =new Array(
			Math.ceil(0.6),
			Math.ceil((0.39302 +0.7 +0.47)/3) ,
			Math.ceil(1.0)
		);
_x =new Array(
			Math.ceil(0.0),
			Math.ceil((0.21982 +0.1 +0.28)/3) ,
			Math.ceil(0.1)
		);
_j =new Array(
			Math.ceil(0.3),
			Math.ceil((0.19984 +0.1 +0.27)/3) ,
			Math.ceil(0.1)
		);
_q =new Array(
			Math.ceil(0.2),
			Math.ceil((0.09325 +0.1 +0.26)/3) ,
			Math.ceil(0.0)
		);
_z =new Array(
			Math.ceil(0.1),
			Math.ceil((0.05990 + 0.0 + 0.04 )/3) ,
			Math.ceil(0.1)
		);


function rand(i){
	ret = Math.random() * i;
	ret = Math.round(ret);
	return ret;
}

//
var aVowStart = new Array(
"ai", "au", "ea", "ee", "ei", "eu", "oa", "oi", "ou"
);
//add in frequencies of single letters
for(i=0;i<=_a[0];i++){aVowStart[aVowStart.length] = "a";}
for(i=0;i<=_e[0];i++){aVowStart[aVowStart.length] = "e";}
for(i=0;i<=_i[0];i++){aVowStart[aVowStart.length] = "i";}
for(i=0;i<=_o[0];i++){aVowStart[aVowStart.length] = "o";}
for(i=0;i<=_u[0];i++){aVowStart[aVowStart.length] = "u";}
for(i=0;i<=_y[0];i++){aVowStart[aVowStart.length] = "y";}

// vowels in middle: 
var aVowels = new Array(
"e", "a", "o", "i", "u", "y", "ea", "io", "ou", "ie", "ee", "ai", "ia", "oo", "ei", "eo",  "au", "oa", "ui", "eu", "oi", "oe", "eau"
);
//add in frequencies of single letters
for(i=0;i<=_a[1];i++){aVowels[aVowels.length] = "a";}
for(i=0;i<=_e[1];i++){aVowels[aVowels.length] = "e";}
for(i=0;i<=_i[1];i++){aVowels[aVowels.length] = "i";}
for(i=0;i<=_o[1];i++){aVowels[aVowels.length] = "o";}
for(i=0;i<=_u[1];i++){aVowels[aVowels.length] = "u";}
for(i=0;i<=_y[1];i++){aVowels[aVowels.length] = "y";}

//
var aVowEnd = new Array(
"ai", "au", "eau", "ee", "ia", "ie", "oa", "ou", "ue" 
);
//add in frequencies of single letters
for(i=0;i<=_a[2];i++){aVowEnd[aVowEnd.length] = "a";}
for(i=0;i<=_e[2];i++){aVowEnd[aVowEnd.length] = "e";}
for(i=0;i<=_i[2];i++){aVowEnd[aVowEnd.length] = "i";}
for(i=0;i<=_o[2];i++){aVowEnd[aVowEnd.length] = "o";}
for(i=0;i<=_u[2];i++){aVowEnd[aVowEnd.length] = "u";}
for(i=0;i<=_y[2];i++){aVowEnd[aVowEnd.length] = "y";}

// consonant combinations allowed at start of words: 
var aConsStart =  new Array("b", "bl", "br", "c", "ch","chl", "chr", "cl", "cr", "d", "dr", "dw", "f", "fl", "fr", "g", "gh", "gl", "gr", "h", "j", "k", "kn", "l", "m", "n", "p", "ph", "phr", "pl", "pr", "ps", "qu", "r", "rh", "s", "sc", "sch", "scr", "sh", "shr", "sk", "sl", "sm", "sn", "sp", "spl", "spr", "squ", "st", "str", "sw", "t", "th", "thr", "thw", "tr", "tw", "v", "w", "wh", "wr", "z"
);
// add in frequencies of single letters
for(i=0;i<=_b[0];i++){aConsStart[aConsStart.length] = "b";}
for(i=0;i<=_c[0];i++){aConsStart[aConsStart.length] = "c";}
for(i=0;i<=_d[0];i++){aConsStart[aConsStart.length] = "d";}
for(i=0;i<=_f[0];i++){aConsStart[aConsStart.length] = "f";}
for(i=0;i<=_g[0];i++){aConsStart[aConsStart.length] = "g";}
for(i=0;i<=_h[0];i++){aConsStart[aConsStart.length] = "h";}
for(i=0;i<=_j[0];i++){aConsStart[aConsStart.length] = "j";}
for(i=0;i<=_k[0];i++){aConsStart[aConsStart.length] = "k";}
for(i=0;i<=_l[0];i++){aConsStart[aConsStart.length] = "l";}
for(i=0;i<=_m[0];i++){aConsStart[aConsStart.length] = "m";}
for(i=0;i<=_n[0];i++){aConsStart[aConsStart.length] = "n";}
for(i=0;i<=_p[0];i++){aConsStart[aConsStart.length] = "p";}
for(i=0;i<=_q[0];i++){aConsStart[aConsStart.length] = "qu";}
for(i=0;i<=_r[0];i++){aConsStart[aConsStart.length] = "r";}
for(i=0;i<=_s[0];i++){aConsStart[aConsStart.length] = "s";}
for(i=0;i<=_t[0];i++){aConsStart[aConsStart.length] = "t";}
for(i=0;i<=_v[0];i++){aConsStart[aConsStart.length] = "v";}
for(i=0;i<=_w[0];i++){aConsStart[aConsStart.length] = "w";}
for(i=0;i<=_x[0];i++){aConsStart[aConsStart.length] = "x";}
for(i=0;i<=_y[0];i++){aConsStart[aConsStart.length] = "y";}
for(i=0;i<=_z[0];i++){aConsStart[aConsStart.length] = "z";}

// combinations allowed in middle of words:
var aConsMid =  new Array( 
"bb", "bbl", "bbr", "bc", "bd", "bf", "bh", "bj", "bk", "bl", "bm", "bn", "bp", "bqu", "br", "bs", "bt", "bv", "bw",
"cc", "ch","chl", "chr", "ck", "cl", "cqu", "cr", "ct", 
"db", "dc", "dd", "ddl", "ddr", "df", "dg", "dh", "dj", "dk", "dl", "dm", "dn", "dp", "dqu", "dr", "ds", "dt", "dv", "dw", "dz",
"fc", "fd", "ff", "ffl", "ffr", "fg", "fh", "fk", "fl", "fm", "fn", "fp", "fqu", "fr", "fs", "ft", "fw",
"gb", "gc", "gd", "gf", "gg", "ggl","ggr", "gh","ght", "gk", "gl", "gm", "gn", "gp", "gqu", "gr", "gs", "gt", "gv", "gw",
"kb", "kc", "kf", "kg", "kh", "kl", "km", "kn", "kp", "kr", "ks", "kt", "kv", "kw",
"lb", "lc", "ld", "lf", "lg", "lh", "lj", "lk", "ll", "lm", "ln", "lp", "lqu", "lr", "ls", "lt","lth", "lv", "lw", "lz",
"mb","mbl","mbr", "mc", "md", "mf", "mg", "mh", "ml", "mm", "mn", "mp", "mr", "ms", "mt", "mv", "mw", "mz",
"nb", "nc","nch", "ncl", "nd", "ndr", "nf", "ng", "nh", "nj", "nk", "nl", "nm", "nn", "np", "nqu", "nr", "ns", "nt","nth","ntr", "nv", "nw", "nz",
"pb", "pc", "pd", "pf","pfr", "pg", "ph", "pj", "pk", "pl", "pm", "pn", "pp", "ppl", "ppr", "pqu", "pr", "ps", "pt", "pw",
"qu", 
"rb", "rc","rch", "rd", "rf", "rg", "rh", "rj", "rk", "rl", "rm", "rn", "rp", "rqu", "rr", "rs","rst", "rt","rth", "rv", "rw", "rz",
"sb", "sc", "sch", "scr", "sd", "sf", "sg", "sh", "sj", "sk", "sl", "sm", "sn", "sp", "squ", "sr", "ss", "st", "str", "sv", "sw",
"tb", "tc", "tch", "td", "tf", "tg", "th", "thr", "tj", "tk", "tl", "tm", "tn", "tp", "tqu", "tr", "ts", "tt", "ttl", "ttr", "tv", "tw", 
"vl", "vm", "vs",
"wb", "wc", "wd", "wf", "wg", "wh", "wj", "wk", "wl", "wm", "wn", "wp", "wr", "ws", "wt",  "ww",
"zd", "zl", "zz", "zzl"
);
for(i=0;i<=_b[0];i++){aConsMid[aConsMid.length] = "b";}
for(i=0;i<=_c[0];i++){aConsMid[aConsMid.length] = "c";}
for(i=0;i<=_d[0];i++){aConsMid[aConsMid.length] = "d";}
for(i=0;i<=_f[0];i++){aConsMid[aConsMid.length] = "f";}
for(i=0;i<=_g[0];i++){aConsMid[aConsMid.length] = "g";}
for(i=0;i<=_h[0];i++){aConsMid[aConsMid.length] = "h";}
for(i=0;i<=_j[0];i++){aConsMid[aConsMid.length] = "j";}
for(i=0;i<=_k[0];i++){aConsMid[aConsMid.length] = "k";}
for(i=0;i<=_l[0];i++){aConsMid[aConsMid.length] = "l";}
for(i=0;i<=_m[0];i++){aConsMid[aConsMid.length] = "m";}
for(i=0;i<=_n[0];i++){aConsMid[aConsMid.length] = "n";}
for(i=0;i<=_p[0];i++){aConsMid[aConsMid.length] = "p";}
for(i=0;i<=_q[0];i++){aConsMid[aConsMid.length] = "qu";}
for(i=0;i<=_r[0];i++){aConsMid[aConsMid.length] = "r";}
for(i=0;i<=_s[0];i++){aConsMid[aConsMid.length] = "s";}
for(i=0;i<=_t[0];i++){aConsMid[aConsMid.length] = "t";}
for(i=0;i<=_v[0];i++){aConsMid[aConsMid.length] = "v";}
for(i=0;i<=_w[0];i++){aConsMid[aConsMid.length] = "w";}
for(i=0;i<=_x[0];i++){aConsMid[aConsMid.length] = "x";}
for(i=0;i<=_y[0];i++){aConsMid[aConsMid.length] = "y";}
for(i=0;i<=_z[0];i++){aConsMid[aConsMid.length] = "z";}

// combinations of letters allowed at the end of words: 
var aConsEnd =  new Array("b", "bb", "bt", "c", "ch", "ck", "ct", "d", "dd", "f", "ff", "ft", "g", "gg", "gh", "ght", "gn", "l", "ld", "lf", "lk", "ll", "lm", "lp", "lph", "lt", "lth", "m", "mb", "mm", "mn", "mp", "n", "nch", "nd", "ng", "nk", "nn", "nt", "nth", "p", "ph", "pp", "pt", "r", "rb", "rch", "rd", "rf", "rk", "rl", "rm", "rn", "rp", "rr", "rst", "rt", "s", "sh", "sk", "sm", "sp", "ss", "st", "t", "tch", "th", "tt", "w", "wd", "wl", "wn", "x", "xt", "zz"
);
for(i=0;i<=_b[0];i++){aConsEnd[aConsEnd.length] = "b";}
for(i=0;i<=_c[0];i++){aConsEnd[aConsEnd.length] = "c";}
for(i=0;i<=_d[0];i++){aConsEnd[aConsEnd.length] = "d";}
for(i=0;i<=_f[0];i++){aConsEnd[aConsEnd.length] = "f";}
for(i=0;i<=_g[0];i++){aConsEnd[aConsEnd.length] = "g";}
for(i=0;i<=_h[0];i++){aConsEnd[aConsEnd.length] = "h";}
for(i=0;i<=_j[0];i++){aConsEnd[aConsEnd.length] = "j";}
for(i=0;i<=_k[0];i++){aConsEnd[aConsEnd.length] = "k";}
for(i=0;i<=_l[0];i++){aConsEnd[aConsEnd.length] = "l";}
for(i=0;i<=_m[0];i++){aConsEnd[aConsEnd.length] = "m";}
for(i=0;i<=_n[0];i++){aConsEnd[aConsEnd.length] = "n";}
for(i=0;i<=_p[0];i++){aConsEnd[aConsEnd.length] = "p";}
for(i=0;i<=_q[0];i++){aConsEnd[aConsEnd.length] = "que";}
for(i=0;i<=_r[0];i++){aConsEnd[aConsEnd.length] = "r";}
for(i=0;i<=_s[0];i++){aConsEnd[aConsEnd.length] = "s";}
for(i=0;i<=_t[0];i++){aConsEnd[aConsEnd.length] = "t";}
for(i=0;i<=_v[0];i++){aConsEnd[aConsEnd.length] = "v";}
for(i=0;i<=_w[0];i++){aConsEnd[aConsEnd.length] = "w";}
for(i=0;i<=_x[0];i++){aConsEnd[aConsEnd.length] = "x";}
for(i=0;i<=_y[0];i++){aConsEnd[aConsEnd.length] = "y";}
for(i=0;i<=_z[0];i++){aConsEnd[aConsEnd.length] = "z";}

var sConsonants = "bcdfghjklmnpqrstvwxz";
var sYEConsonants = "bcdfgklmnprstvxz";
var sVowels = "aeiouy";
var sAlphabet = "abcdefghijklmnopqrstuvwxyz";

function getConsonants( num ){
// return combination of consonants
	var ret = "";
	
	for(var i=0;i<=num;i++){
		ret += sConsonants.charAt(rand(sConsonants.length-1));
		if(ret.charAt(ret.length-1) == "q") return ret+"u";
	}
	
	return ret;
}

function isVowel(l){
	if (sVowels.indexOf(l) > -1) return true;
	else return false;
}

function validVows(str){
	var ret;
	ret = aVowels[rand(aVowels.length-1)];
	l1 = str.charAt(str.length-1);
	l2 = str.charAt(str.length-2);
	while (
					(l2 == "q" && (ret.charAt(0) == "u" || ret.charAt(0) == "y")) ||
					(l1 == "y" && ret.charAt(0) == "y") ||
					(l1 == "j" && ret.charAt(0) == "y")
				)
	{
		ret = aVowels[rand(aVowels.length-1)];
	}
	
	return ret;
}

function validCons(str, aCons){
	var ret;
	ret = aCons[rand(aCons.length-1)];

	l = str.charAt(str.length-1);
	while (
					(ret.charAt(0) == "k" && !isVowel(str.length-2)) ||
					((ret.charAt(0) == "h" || ret.charAt(0) == "w" || ret.charAt(0) == "y") && (l=="i" || l=="y")) ||
			 		(l == "y" && ret.charAt(0) == "y") ||
			 		(l == "i" && ret.charAt(0) == "j") ||
			 		(l == "u" && ret.charAt(0) == "w") ||
			 		(l == "u" && ret.charAt(0) == "j") ||
			 		(l == "u" && ret.charAt(0) == "q") ||
			 		(l == "y" && ret.charAt(0) == "x") 
				)
	{
		ret = aCons[rand(aCons.length-1)];
	}
	
	return ret;
}

var notK = "clnrs"; // letters that can precede a k

function getWord(){
	var str = "";

  //start of word
  if (rand(3)==0){
  // start word with vowels
  	str += aVowStart[rand(aVowStart.length-1)];
  } else {
  	str += aConsStart[rand(aConsStart.length-1)];
  	str += validVows(str);
  }
  
  //middle of word
  var r = rand(1);
  for(var j = 0; j < r; j++){
  	str += validCons(str, aConsMid);
  	str += validVows(str);
  }
  
  //end of word
  str += validCons(str, aConsEnd);
  
  //put an e or a y on the end if they go
  ll = str.charAt(str.length-1);
  if ((sYEConsonants.indexOf(ll) >= 0 && rand(3)==0) || ll == "v"){
  	//add y or e if it's a v or randomly if something else
  	str += (rand(4)==0) ? "y" : "e" ;
  }
  
  ll = str.charAt(str.length-1);
  if( ll != "e" && ll != "y" && rand(2)==0){
  	// end word with vowels at 33% chance
  	str += aVowEnd[rand(aVowEnd.length-1)];
  }

	return str;
}


function getWords(){
  
  var str ="<table width='90%' align='center' border='1' cellspacing=0><tr>";
  
  for (var td=0;td<5;td++){
  	str += "<td width='20%'>";
  	for(var i=0;i<10;i++){
  		
			str += getWord();
		 	str += "<br>";
  	}
  	
  	str += "</td>";
  }
  
  str += "</tr></table>";
  
  return str;
}


