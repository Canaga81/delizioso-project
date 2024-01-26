import { useState, } from "react";
import menuItemData from "../../MenuItemData";
import CardMenuItem from "../CardMenuItem/CardMenuItem";
import Pagination from "../Pagination/Pagination";

const CardMenuItemsCon = () => {

  // Menu Item'i Shop ile evez etdim (useState ile)

  const [shop, setShop] = useState(menuItemData);

  // Pagination

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = shop.slice(firstPostIndex, lastPostIndex);

  // Filter

  const Filter = (x) => {

    const cateFilter = menuItemData.filter((product) => {
      return product.category === x;
    })

    setShop(cateFilter);

  }

  // All Categories Filter

  const AllCategoriesProduct = () => {
    setShop(menuItemData)
  }

  return (
    <div className="w-full h-full mt-28 mb-28">
      <div className="container mx-auto">
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="text-center text-[70px] font-medium font-primary text-[#311F09]">
              Our popular menu
            </h1>
          </div>

          <div className="flexl flex-col gap-8">
            <div className="flex items-center justify-center gap-[30px] flex-wrap">
              <button onClick={() => AllCategoriesProduct()} className="w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300">
                All catagory
              </button>
              <button onClick={() => Filter("dinner")} className="w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300">
                Dinner
              </button>
              <button onClick={() => Filter("lunch")} className="w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300">
                Lunch
              </button>
              <button onClick={() => Filter("dessert")} className="w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300">
                Dessert
              </button>
              <button onClick={() => Filter("drink")} className="w-[200px] h-[60px] text-[16px] lg:w-[200px] lg:h-[60px] bg-transparent text-center lg:text-[20px] text-[#311F09] border-[#311F09] border-solid border-[1px] font-primary font-normal rounded-[150px] hover:bg-[#311F09] hover:text-white transition-all duration-300">
                Drink
              </button>
            </div>
            <div className="flex items-center justify-center mt-16 flex-wrap gap-10">
              {currentPosts.map((item, i) => {
                return (
                  <CardMenuItem
                    key={i}
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    text={item.text}
                    price={item.price}
                    category={item.category}
                  />
                );
              })}
            </div>

            <Pagination
              totalPosts={menuItemData.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMenuItemsCon;
