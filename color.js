var colors = ['#16a005', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9']

function changeColor()
{
    var num = Math.floor(Math.random()*(colors.length))
    document.getElementById('target').style.backgroundColor = colors[num];
}