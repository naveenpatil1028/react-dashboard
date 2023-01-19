import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';

import { userRows } from "D:/react/react-admin/src/dummyData.js";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function UserList() {

    const [data, setData] = useState(userRows)


    const deleteData=(id)=>{
        setData(data.filter((item)=>
            item.id!==id
        ))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
            return (
                <div className='userListUser'>
                    <img className='userListImg' src={params.row.avatar} alt="" />
                    {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transactions',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Actions',
            width: 160,
            renderCell:(params)=>{
                return (
                    <div>
                        <Link to={`/user/${params.row.id}`}>
                        <button className="userListButton">Edit</button>
                        </Link>
                        <DeleteOutline onClick={()=>deleteData(params.row.id)} className="userListDelete"/>
                    </div>
                )
            }
        },
    ];

   

    return (
        <div className='userList'>
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

export default UserList
