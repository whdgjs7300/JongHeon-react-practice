import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'


    


    const Detail = (props) => {

        useEffect(()=> {
            let a = setTimeout(() => {
                setAlert(false)
            }, 2000);
            return ()=> {
                clearTimeout(a); // 타이머 제거함수
            }
        },[])

        useEffect(()=>{
            if (isNaN(num) == true ) {
                alert("숫자를 입력하세요")
            }
        },[num])
        
        
        

    let [count, setCount] = useState(0);    
    let [alert, setAlert] = useState(true); //스위치 조작 버튼 **** 동적 UI
    let [num,setNum] = useState('');

    let {id} = useParams();
    let 찾은상품 = props.shoes.find((x)=>{
        return x.id == id;
    });

        return ( 
            <div>
            <div className="container">
            {alert === true ? <div>2초 이내 구매시 할인</div> : null}
            
                {count}
            <button onClick={()=>{ setCount(count+1) }} >버튼</button>
        <div className="row"> 
        <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <input type="text" onChange={(e)=>{
            setNum(e.target.value); 
        }} /> 
        <div className="col-md-6"> 
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p> 
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
        </div> 
    </div> 
    </div>    

            </div>
        );
    }

    export default Detail;