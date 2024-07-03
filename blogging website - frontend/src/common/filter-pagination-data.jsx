 import axios from "axios";

// export const filterPaginationData = async({ create_new_arr=false,state,data,page, countRoute,data_to_send={ } }) =>{

//     let obj;

//     if(state!= null && !create_new_arr){
//         obj ={...state,results: [...state.results, ...data], page:page}
//     }
//     else{
//        await axios
//        .post(import.meta.env.VITE_SERVER_DOMAIN + countRoute,data_to_send)
//        .then(({ data :{totalDocs }})=>{
//         obj ={results: data,page:1,totalDocs}
//        })
//        .catch(err =>{
//         console.log(err)
//        })
//     }
//     return obj;

// }

export const filterPaginationData = async ({ state, data, page, countRoute, data_to_send }) => {
    // Initialize state if it's not already an object
    if (!state || typeof state !== 'object') {
      state = { results: [], totalDocs: 0, page: 1 };
    }
    
    // Ensure state.results is an array
    if (!Array.isArray(state.results)) {
      state.results = [];
    }
  
    // Merge the new data with the existing state
    const newResults = [...state.results, ...data];
    const totalDocs = await getTotalDocs(countRoute, data_to_send);
  
    return {
      results: newResults,
      page,
      totalDocs,
    };
  };
  
  const getTotalDocs = async (countRoute, data_to_send) => {
    try {
      const { data } = await axios.post(import.meta.env.VITE_SERVER_DOMAIN + countRoute, data_to_send);
      return data.totalDocs;
    } catch (err) {
      console.log(err);
      return 0;
    }
  };