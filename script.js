
//create array and set elements to decendents of class color-hover div.
document.querySelectorAll('div.color-hover>*').forEach(elem => {
    //create event listener for each div element with color
    elem.addEventListener('mouseover', e => {
        //get mouseover object string
        let colorStr = e.target.className;    //gets 'color red' as an ex.
        //strip off the color and space before actual color name
        let color = colorStr.replace('color ', '');
        //call function with only color name as parameter.
        colorCircle(color);
    })
    
})


function colorCircle (color) {

    const element = document.querySelector('.center');

    const colorTable = {
        red: '#e44236',
        cyan: '#25ccf7',
        violet:'#8b78e6',
        orange:'#ea7773',
        pink:'#bb2cd9',
    }
    
   element.style.background = colorTable[color];
    
}