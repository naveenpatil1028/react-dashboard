import './productList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';

import { productRows } from "D:/react/react-admin/src/dummyData.js";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ProductList() {
    const [data, setData] = useState(productRows)


    const deleteData=(id)=>{
        setData(data.filter((item)=>
            item.id!==id
        ))
    }

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'Product', width: 200, renderCell:(params)=>{
            return (
                <div className='productListUser'>
                    <img className='productListImg' src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stack', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 160,
            renderCell:(params)=>{
                return (
                    <div>
                        <Link to={`/product/${params.row.id}`}>
                        <button className="productListButton">Edit</button>
                        </Link>
                        <DeleteOutline onClick={()=>deleteData(params.row.id)} className="productListDelete"/>
                    </div>
                )
            }
        },
    ];


  return (
    <div className='productList'>
      <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
    </div>
  )
}

export default ProductList
