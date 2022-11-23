    import { useContext, useEffect, useState } from "react";
    import { useParams } from "react-router-dom";
    import styled from 'styled-components'
    import { Nav } from "react-bootstrap";
    import { Context1 } from "../App";



        const Detail = (props) => {
            let {재고, shoes} = useContext(Context1) 

            useEffect(()=> {
                let a = setTimeout(() => { 
                    setAlert(false)
                }, 2000); 
                return ()=> {
                    clearTimeout(a); // 타이머 제거함수
                }
            },[])

            
            
            
            

        let [count, setCount] = useState(0);    
        let [alert, setAlert] = useState(true); //스위치 조작 버튼 **** 동적 UI
        let [num,setNum] = useState('');
        let [tap,setTap] = useState(0);


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

        <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
            <Nav.Link onClick={()=>{
                setTap(0)
            }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item> 
            <Nav.Link onClick={()=>{
                setTap(1)
            }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link onClick={()=>{
                setTap(2)
            }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item> 
        </Nav> 
        <TapContent shoes={props.shoes} tap={tap} />

        

                </div>
            );
        }
        function TapContent(props) {
            if(props.tap == 0) {
                return <div>내용0</div>
            }else if(props.tap == 1) {
                return <div>내용1</div> 
            }else if (props.tap == 2){ 
                return <div>내용2</div>
            }
    
        }

        export default Detail;