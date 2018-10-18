(function () {
  var head = document.getElementsByTagName("head")[0], script;
  script = document.createElement("script");
  script.type = "text/x-mathjax-config";
  script[(window.opera ? "innerHTML" : "text")] =
    "MathJax.Hub.Config({\n" +
    "  asciimath2jax: { delimiters: [['@','@']] }\n" +
    "});";
  head.appendChild(script);
  script = document.createElement("script");
  script.type = "text/javascript";
  script.src  = "https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_HTMLorMML-full";
  head.appendChild(script);
})();
