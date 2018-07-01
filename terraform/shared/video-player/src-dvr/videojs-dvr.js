/**
 * videojs-dvrseekbar
 * @version 0.2.6
 * @copyright 2017 ToolBox-tve
 * @license Apache-2.0
 */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.videojsDvrseekbar=e()}}(function(){return function e(t,n,r){function o(i,l){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(a)return a(i,!0);var d=new Error("Cannot find module '"+i+"'");throw d.code="MODULE_NOT_FOUND",d}var u=n[i]={exports:{}};t[i][0].call(u.exports,function(e){var n=t[i][1][e];return o(n||e)},u,u.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){(function(e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r="undefined"!=typeof window?window.videojs:void 0!==e?e.videojs:null,o=function(e){return e&&e.__esModule?e:{default:e}}(r),a={startTime:0},i=o.default.getComponent("SeekBar");i.prototype.dvrTotalTime=function(e){var t=e.seekable();return t&&t.length?t.end(0)-t.start(0):0},i.prototype.handleMouseMove=function(e){var t=void 0,n=void 0;if((t=n=this.player_.seekable())&&t.length){var r=this.calculateDistance(e)*this.dvrTotalTime(this.player_);for(n=t.start(0)+r;n>=t.end(0);)n-=.1;this.player_.currentTime(n)}},i.prototype.updateAriaAttributes=function(){var e=this.player_.seekable()||[];if(e.length){var t=e.end(0),n=this.player_.getCache().currentTime,r=this.player_.scrubbing?n:this.player_.currentTime(),a=void 0;a=t-r,a<0&&(a=0);var i=o.default.formatTime(a,t),l=Math.round(100*this.getPercent(),2);this.el_.setAttribute("aria-valuenow",l),this.el_.setAttribute("aria-valuetext",(r?"":"-")+i)}};var l=function(e,t){e.addClass("vjs-dvrseekbar"),e.controlBar.addClass("vjs-dvrseekbar-control-bar"),e.controlBar.progressControl&&e.controlBar.progressControl.addClass("vjs-dvrseekbar-progress-control");var n=document.createElement("div"),r=document.createElement("a");n.className="vjs-live-button vjs-control",r.innerHTML=document.getElementsByClassName("vjs-live-display")[0].innerHTML,r.id="liveButton",e.paused()||(r.className="vjs-live-label onair");var a=function(t){e.currentTime(e.seekable().end(0)),e.play()};r.addEventListener?r.addEventListener("click",a,!1):r.attachEvent&&r.attachEvent("onclick",function(){return a.apply(r,[window.event])}),n.appendChild(r);var i=document.getElementsByClassName("vjs-control-bar")[0],l=document.getElementsByClassName("vjs-progress-control")[0];i.insertBefore(n,l),o.default.log("dvrSeekbar Plugin ENABLED!",t)},s=function(e,t){var n=e.seekable(),r=document.getElementById("liveButton");n&&n.length&&(e.duration(e.seekable().end(0)),n.end(0)-e.currentTime()<30?r.className="label onair":r.className="label",e.duration(e.seekable().end(0)))},d=function(e){var t=this;e||(e=a),this.on("timeupdate",function(e){s(t)}),this.on("play",function(e){}),this.on("pause",function(e){document.getElementById("liveButton").className="vjs-live-label"}),this.ready(function(){l(t,o.default.mergeOptions(a,e))})};(o.default.registerPlugin||o.default.plugin)("dvrseekbar",d),d.VERSION="0.2.6",n.default=d,t.exports=n.default}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});