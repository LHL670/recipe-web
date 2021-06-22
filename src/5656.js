import React, { useState,useState } from 'react'
import './adrink.css'
import $ from "jquery";

var pathname = window.location.pathname.split( '/' );

var drinkid = pathname[2];

var num = 0;

const [itemDataBlack,setitemDataBlacks] = useState([]);
const [id,setid]=useState('');
const [id_value,setid_value]=useState('NULL');
useEffect(() => {
    getdata();
  }, [id_value]);


  const updateSearch=e=>{
    setid(e.target.value);
    //console.log(search);
  }

  const getSearch =e =>{
    e.preventDefault();
    setid_value(id);
    setid('');
  }
const getdata =  () => {
$.ajax(
  {
    url: 'http://54.88.4.245/api_drink_intro.php ',
    type: 'post',
    cache: false,
    async: false,
    dataType: 'json',
    success: function(data)
    {
      if(data)
      {
        $.each(data, function(i, item)
        {
            if(item.D_ID === drinkid)
            {
                setitemDataBlacks(item);
                var inner = 
                {
                    img : item.Picture,
                    title : item.D_NAME,
                    id : item.D_ID,
                    vol : item.Volume,
                    cal : item.Cal,
                    pri : item.Price,
                }
                num=num+1;
                itemDataBlack.push(inner);
            }
          
        });
      }
    }
  });
}
  

export default function DrinkExample (){
    const volume = [];
    for(var i=0;i<num;i++){
        var pic=itemDataBlack[i].img;
    }

    for(var j=0;j<num;j++){
        if(drinkid===itemDataBlack[j].id){
            for(var k=0;k<num;k++){
                volume[k]=itemDataBlack[j].vol;
            }
        }
    }
    
    console.log(drinkid);

    return (
      <>
        
        <h1></h1>
        <div>
        <img className="drinkimg" src="https://images.newtalk.tw/resize_action2/600/album/news/516/5fe9a97be54bb.jpg"></img>
        </div>
  
        <h1>   </h1>
        
        <input type='button' value='加入心願清單' className="hopebt"  />
  
        <h1>   </h1> 
       
        <table class="tb1">
        <colgroup span="4"></colgroup>
        <tr>
            <th id="name" colspan="1">食材資訊</th>
        </tr>
        <tr>
            <th>原料名稱</th>
        </tr>
        <tr>
            <td>檸檬</td>
        </tr>
        <tr>
            <td>果糖</td>
        </tr>
        </table>

        <table class="tb2">
        <colgroup span="3"></colgroup>
        <tr>
            <th id="name" colspan="3">商品資訊</th>
        </tr>
        <tr>
            <th>容量</th>
            <th>熱量</th>
            <th>價錢</th>
        </tr>
        <tr>
            <td>{volume[0]}</td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td>{volume[1]}</td>
            <td></td>
            <td></td>
        </tr>
        </table>
        
      </>
    )
  }