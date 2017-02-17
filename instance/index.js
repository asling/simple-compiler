import {compile} from '../compile/compile';
import {parser} from '../html-parser/html-parser';

var pageHtml = '';
(function loadPage(){
		pageHtml = parser();
})();
console.log(pageHtml);