function createElement(tagName,attributes,...children) {
 let e  = document.createElement(tagName);
    for(let p in attributes) {
        e.setAttribute(p,attributes[p]);
    }
    for(let child of children) { 
        e.appendChild(child);
    }

    return e;

}