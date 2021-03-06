import React, { useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/actions";
import { NavLink } from "react-router-dom";
import axios from "axios";




export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories)
  const [Alert, setAlert] = useState(false);
  


  async function deletePost(id) {
    await axios.delete(`http://localhost:3001/category/delete/${id}`);
    alerta();
  }
  
  function alerta(){
    setAlert(true);
    alert("Categorie delete success")
    setTimeout(function(){
      setAlert(false);
      window.location.reload(true);
  }, 1000);
  }

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);


  return (
    <div class="overflow-x-auto w-full">
      <table class="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Categorie</th>
            <th>Description</th>
            <th></th>
            <th>
            <NavLink to={`/CreateCategory`}>
              <button class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-grey hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="ml-3">Create Categorie</span>
              </button>
            </NavLink>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {categories &&
            categories.map((categorie) => {
              return (
                <tr>
                  <td>
                    <div class="flex items-center space-x-3">
                      <div>
                        <div class="font-bold">{categorie.id}</div>
                      </div>
                    </div>
                  </td>
                  <td>{categorie.name}</td>
                  <td>{categorie.description}</td>
                  <th>
                    <NavLink to={`/ModifyCategory/${categorie.id}`}>
                      <button class="btn btn-ghost btn-xs">Modify</button>
                    </NavLink>
                  </th>
                  <th>
                    <button onClick={() => deletePost(categorie.id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 btn-ghost "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </th>
                </tr>
              );
            })}
        </tbody>
        {/* <!-- foot --> */}
      </table>
    </div>
  );
}