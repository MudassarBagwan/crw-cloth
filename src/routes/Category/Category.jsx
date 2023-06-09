
import { useContext, useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';

import Productcard from '../../component/product-card/product-card';
import { CategoriesContext } from '../../Context/Categories.contex';

import { CategoryContainer, Title } from './Category.style'


const Category = () => {
    const { category } = useParams();
    const { catgeoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(catgeoriesMap[category]);
  
    useEffect(() => {
      setProducts(catgeoriesMap[category]);
    }, [category, catgeoriesMap]);
  
    return (
      <Fragment>
        <Title>{category.toUpperCase()}</Title>
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <Productcard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      </Fragment>
    );
  };
  
  export default Category;