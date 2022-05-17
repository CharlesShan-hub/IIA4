document.getElementById("footer").innerHTML = '<div class="container-fluid">\
                        <div class="row">\
                            <div class="col-12">\
                                © <script>document.write(new Date().getFullYear())</script> IIA<span class="d-none d-sm-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by CharlesShan.</span>\
                            </div>\
                        </div>\
                    </div>'

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

function build_footer(){
    var div1 = build_element('div',{_class:'col-12'})
    div1.innerHTML = '© <script>document.write(new Date().getFullYear())</script> IIA<span class="d-none d-sm-inline-block"> - Crafted with <i class="mdi mdi-heart text-danger"></i> by CharlesShan.</span>'
    var div2 = build_element('div',{_class:'row'})
    div2.appendChild(div1)
    var div3 = build_element('div',{_class:'container-fluid'})
    div3.appendChild(div2)
    var father = getElementById('footer')
    father.appendChild(div3)
}
build_footer()