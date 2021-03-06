import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import CreateCategory  from '../CreateCategory/CreateCategory';
import ProductCreationForm from '../ProductCreationForm/ProductCreationForm';
import Users from "./Users";
import Orders from '../Orders/Orders'
import Search  from "../Search/Search";
import NotFound from '../NotFound/NotFound';
import { getorder} from "../../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import Categories from "../CreateCategory/Categories";
import { ChartPieIcon, ViewGridIcon, ClipboardCheckIcon, SaveIcon, UsersIcon } from '@heroicons/react/solid'


export default function AdminPage(props) {
  const dispatch = useDispatch();
  const [Page, setPage] = useState('course');
  const [products, setProducts] = useState([]);
  const category = useSelector(state => state.categories);
  let URL;
  process.env.NODE_ENV === "development" ? URL = "http://localhost:3001" : URL = "https://54.227.99.93:3001";

  console.log("cat",category)


  useEffect(() => {
    dispatch(getorder());
  }, [dispatch]);


  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get(`${URL}/product/all`);
      setProducts(response.data);
    }
    loadProducts();
  }, [products.length]);


  function HandlePage(e){
   if(e === 'course')setPage('course')
   else if(e === 'Category')setPage('Category')
   else if(e === 'CreateCourse')setPage('CreateCourse')
   else if(e === 'order')setPage('order')
   else if(e === 'Users')setPage('Users')
  }


  return (
      <div className="grid justify-items-center w-full">
          <div className="grid grid-cols-8 w-2/4 justify-items-start bg-white rounded-lg shadow m-4">
              <div className=' col-start-1 col-end-3 w-[240px] m-2 p-2 rounded-lg'>
                  <div className=" w-5/6 bg-gray-50 rounded grey:bg-gray-800 ">
                      <ul className="space-y-2">
                          <li>
                              <button
                                  onClick={() => HandlePage('course')}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-black  hover:bg-secondary">
                                  <ChartPieIcon className="w-6 h-6 text-gray-500" />
                                  <span className="ml-3">Edite Courses</span>
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => HandlePage('Category')}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-black  hover:bg-secondary">
                                  <ViewGridIcon className="w-6 h-6 text-gray-500" />
                                  <span className="ml-3">Categories</span>
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => HandlePage('order')}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-black  hover:bg-secondary">
                                  <ClipboardCheckIcon className="w-6 h-6 text-gray-500" />
                                  <span className="ml-3">View orders</span>
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => HandlePage('CreateCourse')}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey  hover:text-black  hover:bg-secondary">
                                  <SaveIcon className="w-6 h-6 text-gray-500" />
                                  <span className="ml-3">Create course</span>
                              </button>
                          </li>
                          <li>
                              <button
                                  onClick={() => HandlePage('Users')}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:text-black  hover:bg-secondary"
                              >
                                  <UsersIcon className="w-6 h-6 text-gray-500" />
                                  <span className="ml-3">Users</span>
                              </button>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className=''>
                  <div className=" col-start-4 col-end-7 m-2 p-2">
                      {Page === 'course' &&
                          <div>
                              <ProductTable allProducts={products} />
                          </div>}
                      {Page === 'Category' &&
                          <div>
                              <Categories />
                          </div>
                      }
                      {Page === 'order' &&
                          <div>
                              <Orders />
                          </div>}
                      {Page === 'CreateCourse' &&
                          <div>
                              <ProductCreationForm />
                          </div>
                      }
                      {Page === 'Users' &&
                          <div>
                              <Users />
                          </div>
                      }
                  </div>
              </div>

          </div>

      </div>
  );
}