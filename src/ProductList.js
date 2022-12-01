import React from "react";
import Product from "./Product";

class ProductList extends React.Component{

    handleUpvotes(productId){
        alert(productId + " was upvoted")
        console.log(productId +" was upvoted")
    }
    constructor(props){
        super(props);

        this.handleUpvotes = this.handleUpvotes.bind(this);
    }

     


    render(){
       
        const products = [
            {
            id: 1,
            title: 'Yellow Pail updated state',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: 1,
            },
            {
                id: 2,
                title: 'Blue Pail',
                description: 'Something huge is coming your way this week.',
                url: '#',
                votes: 3,
                },
                {
                    id: 3,
                    title: 'Wonder land',
                    description: 'This quote lives rent free in my head.',
                    url: '#',
                    votes: 36,
                    
                    },
                    {
                        id: 4,
                        title: 'Heart of gold',
                        description: 'This is pure madnes, but i love it .',
                        url: '#',
                        votes: 89,
                        
                        },
                        {
                            id: 5,
                            title: 'We are good together',
                            description: 'Never leave this quote undone.',
                            url: '#',
                            votes: 76,
                            
                            }
            
        
            
        ]

           const sortedProducts = products.sort((a,b)=>(
               b.votes-a.votes
           ))
    
           const productComponent = sortedProducts.map((productList)=>
         (
             <Product key={productList.id}
                    id={productList.id}
                    upvotes={productList.votes}
                    title={productList.title}
                    description={productList.description}
                    onVotes={this.handleUpvotes}
                    
            />
        )
       );

       return (

        <div>
            {productComponent}
        </div>
       )

       
         

    }
    


}


   export default ProductList