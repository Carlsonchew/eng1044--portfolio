// nav.js — shared navigation. Runs on every page.
// To rename a nav item, edit PAGES here; all pages update automatically.

var PAGES = [
  { id: 'home',       file: 'index.html',             label: 'Home' },
  { id: 'toc',        file: 'b-toc.html',              label: 'b. Contents' },
  { id: 'roadmap',    file: 'c-roadmap.html',          label: 'c. Roadmap' },
  { id: 'outline',    file: 'd-outline.html',          label: 'd. Outline' },
  { id: 'response',   file: 'e-written-response.html', label: 'e. Written Response' },
  { id: 'draft',      file: 'f-draft.html',            label: 'f. Draft' },
  { id: 'sources',    file: 'g-sources.html',          label: 'g. Sources' },
  { id: 'output',     file: 'h-output.html',           label: 'h. Output' },
  { id: 'reflection', file: 'i-reflection.html',       label: 'i. Reflection' }
];

function buildTopbar(path) {
  var parts = (path || 'portfolio/index.html').split('/');
  var file  = parts.pop();
  var dirs  = parts.map(function(d){ return '<span class="path-seg">' + d + '/</span>'; }).join('');
  return '<div class="topbar"><span class="topbar-dot"></span>' + dirs + '<span class="path-current">' + file + '</span></div>';
}

function buildNav(current) {
  var links = PAGES.map(function(p){
    var cls = (p.id === current) ? ' class="active"' : '';
    return '<a href="' + p.file + '"' + cls + '>' + p.label + '</a>';
  }).join('');
  return '<nav class="sitenav"><div class="nav-inner">' +
    '<a class="nav-brand" href="index.html">PROJECT<span>.</span>PORTFOLIO</a>' +
    '<div class="nav-links">' + links + '</div>' +
    '</div></nav>';
}

document.addEventListener('DOMContentLoaded', function(){
  var tb = document.getElementById('topbar-mount');
  var nv = document.getElementById('nav-mount');
  if (tb) tb.outerHTML = buildTopbar(window.CURRENT_PATH);
  if (nv) nv.outerHTML = buildNav(window.CURRENT_PAGE || 'home');
});
