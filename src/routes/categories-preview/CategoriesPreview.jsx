import { useContext,Fragment  } from "react";



import { CategoriesContext } from "../../Context/Categories.contex";
import CategoryPreview from "../../component/category-preview/CategoryPreview";


const CategoriesPreview = () => {
  

    const { catgeoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(catgeoriesMap).map((title) => {
        const products = catgeoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
    
    )

}

export default CategoriesPreview;

