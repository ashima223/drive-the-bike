m=0;
var y;
function drive()
{
    y=setInterval(run,100);
    
    function run()
    {
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else{
            m+=15;
            var x=document.getElementById("img");
            x.style.marginLeft=m+ 'px';
        }
    }
}

function stop()
{
    clearInterval(y)

}