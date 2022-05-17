function build_element(_type,{_class=undefined,_id=undefined,_innerText=undefined,_href=undefined,_aria_expanded=undefined}){
	var element = document.createElement(_type);

	if(_class!=undefined)
		element.setAttribute("class", _class);
	if(_id!=undefined)
		element.setAttribute("id", _id);
	if(_innerText!=undefined)
		element.innerText = _innerText;
	if(_href!=undefined)
		element.setAttribute("href",_href)
	if(_aria_expanded!=undefined)
		element.setAttribute("aria-expanded",_aria_expanded)

	return element
}

function build_sideBar(){
	var father = document.getElementById('rightBar')
	// Button
	var i = build_element("i",{_class:'mdi mdi-close noti-icon'})
	var a = build_element("a",{_href:'javascript:void(0);',_class:'right-bar-toggle float-right'})
	a.appendChild(i)
	var h5 = build_element("h5",{_class:'m-0',_innerText:'Settings'})
	var div = build_element('div',{_class:'ightbar-title px-3 py-4'})
	div.appendChild(a)
	div.appendChild(h5)
	father.appendChild(div)

	// SideBar
	var hr = build_element('hr',{_class:'mt-0'})
	var h6 = build_element("h6",{_class:'text-center',_innerText:'Choose Layouts'})
	hr.appendChild(h6)
	father.appendChild(hr)

	var div2 = build_element('div',{_class:'p-4'})
	div2.innerHTML = '<div class="mb-2">\
                        <img src="assets/images/layouts/layout-1.jpg" class="img-fluid img-thumbnail" alt="">\
                    </div>\
                    <div class="custom-control custom-switch mb-3">\
                        <input type="checkbox" class="custom-control-input theme-choice" id="light-mode-switch" checked />\
                        <label class="custom-control-label" for="light-mode-switch">Light Mode</label>\
                    </div>\
    \
                    <div class="mb-2">\
                        <img src="assets/images/layouts/layout-2.jpg" class="img-fluid img-thumbnail" alt="">\
                    </div>\
                    <div class="custom-control custom-switch mb-3">\
                        <input type="checkbox" class="custom-control-input theme-choice" id="dark-mode-switch" data-bsStyle="assets/css/bootstrap-dark.min.css" \
                            data-appStyle="assets/css/app-dark.min.css" />\
                        <label class="custom-control-label" for="dark-mode-switch">Dark Mode</label>\
                    </div>\
    \
                    <div class="mb-2">\
                        <img src="assets/images/layouts/layout-3.jpg" class="img-fluid img-thumbnail" alt="">\
                    </div>\
                    <div class="custom-control custom-switch mb-5">\
                        <input type="checkbox" class="custom-control-input theme-choice" id="rtl-mode-switch" data-appStyle="assets/css/app-rtl.min.css" />\
                        <label class="custom-control-label" for="rtl-mode-switch">RTL Mode</label>\
                    </div>\
\
                    <a href="http://www.bootstrapmb.com" class="btn btn-primary btn-block mt-3" target="_blank"><i class="mdi mdi-cart mr-1"></i> Purchase Now</a>\
\
                </div>'
    father.appendChild(div2)
}

build_sideBar()



