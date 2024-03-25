// ==UserScript==
// @name PeeringDB Modern
// @description A userscript to modernize and improve PeeringDB UI.
// @version 0.1
// @author Tamer @ Eranium B.V.
// @homepageURL https://github.com/eranium/peeringdb-modern/
// @namespace https://github.com/eranium/
// @match https://www.peeringdb.com/*
// @exclude https://www.peeringdb.com/apidocs/*
// @icon https://www.peeringdb.com/s/favicon.ico
// @run-at document-end
// ==/UserScript==

(function () {
    "use strict";

// Loop through the page to find the ASN field and add a button to BGP.Tools;
    if (document.querySelector('.view_fields')) {
        let list = document.querySelector('.view_fields').getElementsByClassName('row view_row');
        for (let item of list) {
            if (item.getElementsByClassName('view_field col-4 col-sm-5 col-md-4')[0]) {
                if (item.getElementsByClassName('view_field col-4 col-sm-5 col-md-4')[0].innerText.toString() === "ASN") {
                    let asn = item.getElementsByClassName('view_value col-8 col-sm-7 col-md-8')[0];
                    asn.innerHTML = asn.innerText + ' <a href="https://bgp.tools/as/' + asn.innerText + '" target="_blank" class="btn btn-sm" style="font-size: 10px; color: #fff; margin: 0;" rel="nofollow">BGP</a>';
                }
            }
        }
    }

// Because PeeringDB already uses Google Icons, we add fonts as well;
    document.head.innerHTML += `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
`;

// Adding and overriding using custom CSS;
    document.head.innerHTML += `
<style>

html, body {
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  font-style: normal;
}

body {
  background-color: #47464b;
}
a, a:hover, a:visited {
  color: #000;
}
img.logo {
  width: 150px;
  margin-top: 10px;
  padding-left: 5px;
  filter: grayscale(100%);
}
img.checkmark {
  filter: grayscale(100%);
}
div.header {
  background-color: #f1f1f1;
  border-bottom: 2px #e4e4e4 solid;
}
#anon-language-preference {
  display: none;
}
#header {
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  box-shadow: 0 .125rem .25rem rgba(2,6,23,.075);
}
div.landing_info {
  padding-top: 110px;
}
div.list > div.row.header, table.result th {
  background-color: #47464b;
}
div.view_field {
  background-color: #47464b;
}
div.header div.nav a.btn {
  background-color: #6685f6;
}
.btn, .btn-sm, .btn-default, .btn-primary, div.view_value.action .btn-sm {
  background-color: #6685f6;
}
div.list > div.row.header, table.result th {
  background-color: #47464b;
}
div.landing_footer {
  background-color: #47464b;
  padding-top: 50px;
}
div.view_sub {
  color: #000000;
  background-color: #f1f1f1;
}
div.list h5 {
  color: #000000;
}
div.view_row {
  border-bottom: 1px #686868 solid;
}
div.view_info {
	padding-top: 110px;
}
.btn:hover, .btn-pimary:hover, .btn-secondary:hover, .btn-default:hover {
  background-color: #705cd0 !important;
}
@media (min-width: 768px) {
  div.header div.nav {
    margin-top: 20px;
  }
}
div.header div.nav div.user {
  padding-top: 9px;
}
input[type="text"], input[type="password"], #search, select.editable, textarea {
  border: none;
}
</style>
`;

})();
