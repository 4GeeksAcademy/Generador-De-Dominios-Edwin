import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const pronoun = [    "my",    "your",    "his",    "her",    "our",    "their",    "this",    "that",    "those",    "these",
    "any",    "some",    "each",    "every",    "no",    "all",    "many",    "few",    "several",    "such"  ];
  
  const adj = [    "cool",    "fast",    "smart",    "funny",    "awesome",    "new",    "old",    "happy",    "bright",
    "dark",    "quick",    "lazy",    "wild",    "crazy",    "silent",    "noisy",    "hot",    "cold",    "simple",    "fancy"  ];
  
  const noun = [    "site",    "page",    "web",    "portal",    "link",    "network",    "domain",    "blog",    "space",    "hub",
    "cloud",    "server",    "name",    "spot",    "zone",    "corner",    "place",    "thing",    "base",    "channel"  ];
  
  const domain = [    ".com",    ".net",    ".org",    ".info",    ".biz",    ".co",    ".io",    ".app",    ".tech",    ".dev",    ".ai",
    ".me",    ".online",    ".store",    ".site",    ".web",    ".cloud",    ".digital",    ".world",    ".design"  ];
  
    let phrase = [pronoun, adj, noun, domain];
    let domains ="";

  for (let index = 0; index <= 3; index++) {
    let numRandom = Math.floor(Math.random()*7);
    console.log(index, numRandom)
    domains += phrase [index] [numRandom]
  }  
  console.log(domains);
  document.getElementById("domains").innerHTML = domains;
};
