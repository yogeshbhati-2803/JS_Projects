var displayArea=document.getElementById('display')
function isOperator(x)
{
    if(!Number(x))
        return true
    else
        return false
}
function buttonClicked(x){
    if(displayArea.innerText=='0')
    {
        if(x!='0' && x!='00')
        {
            if(x=='.' || isOperator(x))
            {
                displayArea.innerText = displayArea.innerText + x
            }
            else 
            {
                displayArea.innerText= x
            }
            
        }
        
    }
    else{
        if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(x))
        {
            displayArea.innerText=displayArea.innerText.replace(displayArea.innerText[displayArea.innerText.length-1],x)
        }
        else{

            displayArea.innerText = displayArea.innerText + x
        }
    }

}