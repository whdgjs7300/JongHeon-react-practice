import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

    const Cart = () => {

        useSelector((state))

        return ( 
            <div>
                <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </thead>
        <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            </tr>
        </Table>
            </div> 
        ); 
    }

    export default Cart;