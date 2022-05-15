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

function build_title(text){
	return build_element("li",{_class:"menu-title",_innerText:text})
}

function build_content({_a_href=undefined,_i_class=undefined,_s_innerText=undefined,_is_mod=false}){
	var li = build_element("li",{})
	var a = build_element("a",{_href:_a_href,_class:"waves-effect"})
	var i = build_element("i",{_class:_i_class})
	var s = build_element("span",{_innerText:_s_innerText})
	a.appendChild(i)
	a.appendChild(s)
	li.appendChild(a)
	if(_is_mod){
		var u = build_element("ul",{_class:"sub-menu",_id:"ModsSideList",_aria_expanded:false})
		li.appendChild(u)
	}
	return li
}

function build_main(){
	var elements = []
	elements.push(build_title("Main"))
	elements.push(build_content({_a_href:"main.html",_i_class:"ti-home",_s_innerText:"Dashboard"}))
	//elements.push(build_content({_a_href:"main.html",_i_class:"ti-calendar",_s_innerText:"Calendar"}))
	elements.push(build_content({_a_href:"javascript: void(0);",_i_class:"ti-package",_s_innerText:"Mods",_is_mod:true}))
	return elements
}

function build_setting(){
	var elements = []
	elements.push(build_title("Setting"))
	elements.push(build_content({_a_href:"main.html",_i_class:"ti-setting",_s_innerText:"Setting"}))
	return elements
}

function build_sideBar(){
	var side_menu_ul = build_element("ul",{_class:"metismenu list-unstyled",_id:"side-menu"})

	build_main().forEach(function(item, index){
		side_menu_ul.appendChild(item)
	})

	//build_setting().forEach(function(item, index){
	//	side_menu_ul.appendChild(item)
	//})

	document.getElementById("sidebar-menu").appendChild(side_menu_ul)
}

build_sideBar();
