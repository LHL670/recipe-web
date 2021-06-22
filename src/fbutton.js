import Button from '@material-ui/core/Button';

const changeText=(event)=>
{
    console.log(event.target)
    event.target.innerText="假的拉 點另一個";
}

const FButton=()=> 
{
    var output=[];
    output.push(<Button variant="contained" color="primary" onClick={changeText}>假·Enter</Button>)
    return output;
}

export default FButton;