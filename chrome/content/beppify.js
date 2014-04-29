(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                if(node.parentElement.tagName.toLowerCase() != "script") {
                    handleText(node);
                }
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
    
        v = v.replace(/\b(silvio )?(berlusconi)\b/gi,
                function(match,p1,p2,offset,string) {
                    if (p2 == "BERLUSCONI")
                        return "PSICONANO";
                    return "Psiconano";
                });
        v = v.replace(/\b(matteo )?(renzi)\b/gi,
                function(match,p1,p2,offset,string) {
                    if (p2 == "RENZI")
                        return "EBETINO";
                    return "Ebetino";
                });
        v = v.replace(/\b(mario )?(monti)\b/gi, 
                function(match,p1,p2,offset,string) {
                    if (p2 == "MONTI")
                        return "RIGOR MONTIS";
                    return "Rigor Montis";
                });
        v = v.replace(/\b(enrico )?(letta)\b/gi,
                function(match,p1,p2,offset,string) {
                    if (p2 == "letta")
                        return string;
                    if (p2 == "LETTA")
                        return "CAPITAN FINDUS";
                    return "Capitan Findus";
                });
        v = v.replace(/\b(pier luigi )?(bersani)\b/gi,
                function(match,p1,p2,offset,string) {
                    if (p2 == "BERSANI")
                        return "GARGAMELLA";
                    return "Gargamella";
                });
        v = v.replace(/\b(giorgio )?(napolitano)\b/gi,
                function(match,p1,p2,offset,string) {
                    if (p2 == "NAPOLITANO")
                        return "MORFEO";
                    return "Morfeo";
                });
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
