var panel1=document.getElementById('panel-1')
var panel2=document.getElementById('panel-2')
var panel3=document.getElementById('panel-3')
var panel4=document.getElementById('panel-4')
var panel5=document.getElementById('panel-5')
function resetActive()
{
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
}

function SelectPanel(PanelNo)
{
    resetActive()
    if(PanelNo==1)
    {
        panel1.classList.add('active')
    }
    else if(PanelNo==2)
    {
        panel2.classList.add('active')
    }
    else if(PanelNo==3)
    {
        panel3.classList.add('active')
    }
    else if(PanelNo==4)
    {
        panel4.classList.add('active')
    }
    else if(PanelNo==5)
    {
        panel5.classList.add('active')
    }
    
}