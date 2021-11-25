import React, { Component } from 'react'
import { IProduct } from '../../../../../services/interfaces/IProduct.interface';
import { ProductService } from '../../../../../services/Product/Product.service';
import ShopItem from './ShopItem/ShopItem.component';
import './shopitems.scss'
type shopProps = {

}
type shopState = {
    products: IProduct[]
}


export default class ShopItems extends Component<shopProps, shopState>{

    productService: ProductService;
    constructor(props: shopProps) {
        super(props);
        this.state = {
            products: []
        }
        this.productService = new ProductService();
      
    }

    public componentDidMount(): void {
        this.loadMoreProducts();
      }
      public loadMoreProducts(): void {
        this.productService.getProducts().then((products) => {
          this.setState({
            products
          })
        });
      }
    
      public renderProducts(): JSX.Element {
        return <>
          {this.state.products.map((product,index) => (
           <ShopItem product={product} key={index}></ShopItem>
        ))
          }
          </>
      }
    render() : JSX.Element {
        return (
            <div>
                <div className="titleBar">
                    <h1>Titel</h1>
                </div>
                <div className="resultsRow">
                    <span className="resultsCounter">{this.state.products.length} resultaten</span>
                </div>
            <div className="shopItemsContainer">
                {this.renderProducts()}
            </div>
            </div>
        )
    }

}
