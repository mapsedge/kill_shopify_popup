// ==UserScript==
// @name         Kill Shopify Popup
// @namespace    http://tampermonkey.net/
// @version      2024-08-27
// @description  Kill "someone bought..." shopify popup
// @author       Bill Morris
// @match        *://*/*
// @icon         https://avatars.githubusercontent.com/u/41483625?s=400&u=1edbd9c536f74400f8febc3b5f8d6be70d0f2096&v=4
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   const style = document.createElement('style');

    // Set the inner text of the <style> element to include the desired CSS rule
    style.innerText = '.stocksheep_popup_desktop_bottom_left { display: none; }';

    // Append the <style> element to the <head> of the document
    document.head.appendChild(style);
  
})();
