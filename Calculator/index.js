var displayArea=document.getElementById('display')
function isOperator(x)
{
    if(x=='+' || x=='*' || x=='-' || x=='/' || x=='%' )
        return true
    else
        return false
}
function buttonClicked(x){
        
    if(x!='CLR' && x!='DEL' && x!='=')
    {

        if(displayArea.innerText==='0')
        {
            if(x!='0' && x!='00')
            {
                if(x=='.' || isOperator(x))
                {
                    displayArea.innerText = displayArea.innerText + x;
                }
                else 
                {
                    displayArea.innerText= x;
                }
                
            }
            
        }
        else{
            if(isOperator(displayArea.innerText[displayArea.innerText.length-1]) && isOperator(x))
            {
                displayArea.innerText=displayArea.innerText.slice(0,-1) + x;
            }
            else{
    
                displayArea.innerText = displayArea.innerText + x;
            }
        }
    }
    else{
        if(x==='CLR')
        {
            displayArea.innerText = '0';
        }
        else if(x==='DEL')
        {
            if(displayArea.innerText.length==1)
            {
                displayArea.innerText=0
            }
            else{

                displayArea.innerText =displayArea.innerText.slice(0,-1);
            }
            
        }
        else if(x === '=')
        {
            try{

                displayArea.innerText =eval(displayArea.innerText);
            }
            catch{
                displayArea.innerText='0';
            }
        }
    }

}