const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple','coral','taffy','punch','crepe']
function changeColor()
{

    const colorIndex= parseInt(Math.random()*colors.length)
    document.body.style.background = colors[colorIndex]
     if(colorIndex==4)
     {
         alert('click on it to change the background color')
     }
}