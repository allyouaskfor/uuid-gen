document.addEventListener("DOMContentLoaded", () => {
    scroll();   // Scroll the document into position as Textastic app on iOS renders the document too low.
    uuid();
    iv();     // Generate a new UUID everytime the document loads.
});

function scroll() {
    window.scrollBy(1, 1);
}

const ud = document.getElementById("idp");
ud.addEventListener("click", () => {
    uuid();
    iv();
})

// Generate UUID
function uuid() {
    let result, i, j;
    result = '';
    for ( j = 0; j < 32; j++ ) {
        if( j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
        i = Math.floor( Math.random() * 16 ).toString( 16 );
        result = result + i;
    }
    ud.innerHTML = result;
}

// Toggle letter-case of UUID.
const cc = document.querySelector("#cc");
cc.addEventListener("click", () => {
    if (ud.innerHTML === ud.innerHTML.toUpperCase()) {
       ud.innerHTML = ud.innerHTML.toLowerCase();
       iv();
    } else {
       ud.innerHTML = ud.innerHTML.toUpperCase();
       iv();
    };
});

// Update input box to UUID displayed
const input = document.querySelector("input");            
function iv() {
    input.value = ud.innerHTML;
    console.log(ndsh);
}

/*
*   Taken from:
*   https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
*/
const cpy = document.querySelector(".cpy");
cpy.addEventListener("click", str => {
    const ta = document.createElement("textarea");
    ta.value = ud.innerHTML;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    const select =
        document.getSelection().rangeCound > 0
            ? document.getSelection().getRangeAt(0)
            : false;
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    if (select) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(select);
    }
});
/* END TAKEN CODE */