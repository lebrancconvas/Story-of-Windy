//=============================================================================
// Thai Font Automatic Adjuster
//=============================================================================
/*:
 * @target MZ
 * @plugindesc ปรับตัวอักษรภาษาไทยไปตามยถากรรม
 * License: MIT License
 * @author XthemeCore
 *
 * @help ThaiFontAutoAdjuster.js
 *
 * ปลั๊กอินนี้จะปรับตัวอักษรภาษาไทยให้เป็นไปตามยถากรรม
 * การแสดงผลจะตรงกับที่แสดงในหน้าจอเริ่มเกมและเมนูต่างๆ 
 */
(()=>{"use strict";Utils.containsThaiSpecialCharacters=function(t){return/[ำิีึืัํ่้๊๋์ฺุูๅ]/.test(t)};const t=Window_Base.prototype.processCharacter;Window_Base.prototype.processCharacter=function(e){const i=e.text[e.index],a=e.text[e.index+1],s=e.text[e.index+2];Utils.containsThaiSpecialCharacters(a)&&(e.buffer+=i,Utils.containsThaiSpecialCharacters(s)&&(e.buffer+=a,e.index++),e.index++),t.apply(this,arguments)}})();
