import React from 'react'
import "./product.css"
import {Link} from "react-router-dom"
import Chart from "../../chart/Chart"
import {productData} from "../../../DummyData"
import {Publish} from "@mui/icons-material"

function Product() {
  return (
    <div className='product' >
        <div className="productTitleContainer">
            <h1 className="productTitle">Product</h1>
            <Link to="/newProduct" >
                <button className='productAddButton' >Create</button>
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productData} dataKey="Sales" title="Sales Performance"     />
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?/" alt="mov" className="productInfoImg"  />
                    <span className="productName">Apple Airpods</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">In stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder="Apple Airpods" />
                    
                    <label>In Stock</label>
                    <select name='instock' id="idStock" >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>

                    <label>Active</label>
                    <select name='active' id="active" >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?/" alt="mov" className="productUploadImg" />

                        <label for="file" >
                            <Publish/>
                        </label>
                        <input type="file" id="file" style={{display: "none"}} />
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
        </div>
  )
}

export default Product