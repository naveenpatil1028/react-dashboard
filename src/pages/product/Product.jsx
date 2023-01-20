import { Link } from 'react-router-dom'
import './product.css'
import Charts from '../../components/chart/Chart'
import {productData} from '../../dummyData'
import { Publish } from '@mui/icons-material'

function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/newProduct'>
        <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
            <Charts data={productData} dataKey="Sales" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
            <div className="productInfoTop">
                <img src="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="productInfoImg" />
                <span className="productName">Apple Iphone</span>
            </div>
            <div className="productInfoBottom">
                <div className="productInfoItem">
                    <span className="productInfoKey">Id:</span>
                    <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Sales:</span>
                    <span className="productInfoValue">1523</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">Active:</span>
                    <span className="productInfoValue">Yes</span>
                </div>
                <div className="productInfoItem">
                    <span className="productInfoKey">InStock:</span>
                    <span className="productInfoValue">No</span>
                </div>
            </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder='Apple Iphone ' />
                <label>Stock</label>
                <select name="inStock" id="inStock">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <label>Active</label>
                <select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://images.pexels.com/photos/238541/pexels-photo-238541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="productUploadImg" />
                    <label htmlFor="file">
                        <Publish/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}}/>
                </div>
                <button className="productButton">Update</button>
                
            </div>
        </form>
      </div>
    </div>
  )
}

export default Product
