import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HiCurrencyRupee } from "react-icons/hi";
import MaterialTable from 'material-table';
// import { ThemeProvider , createTheme} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import DataTable from './DataTable';
import { deleteAProduct, getAllProducts } from "../api";
import { alertNULL, alertSuccess } from "../context/actions/alertAction";
import { setAllProducts } from "../context/actions/productActions";



const DBItems = () => {  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const defaultMaterialTheme = createTheme();
  return (
    <div className='flex items-center justify-center gap-4 pt-6 w-full'>
      <DataTable
        columns={[
          {
            title: "Image",
            field: "imageURL",
            render: (rowData) => (
              <img
                src={rowData.imageURL}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Name",
            field: "product_name",
          },
          {
            title: "Category",
            field: "product_category",
          },
          {
            title: "Price",
            field: "product_price",
            render: (rowData) => (
              <p className="text-xl font-semibold text-textColor flex items-center justify-center ">
                <HiCurrencyRupee className="text-red-400" />
                {parseFloat(rowData.product_price).toFixed(2)}
              </p>
            ),
          },
        ]}
        data={products}
        title="List of Products"
        actions={[
          {
            icon: "edit",
            tooltip: "Edit Data",
            onClick: (event, rowData) => {
              alert("You want to edit " + rowData.productId);
            },
          },
          {
            icon: "delete",
            tooltip: "Delete Data",
            onClick: (event, rowData) => {
              if (
                window.confirm("Are you sure, you want to perform this aciton")
              ) {
                console.log("said yes")
                deleteAProduct(rowData.productId).then((res) => {
                  dispatch(alertSuccess("Product Deleted "));
                  console.log("delete ho gya")
                  setInterval(() => {
                    dispatch(alertNULL());
                  }, 3000);
                  // console.log("delete ho gya")
                  getAllProducts().then((data) => {
                    console.log("new data")
                    dispatch(setAllProducts(data));
                  });
                });
              }
            },
          },
        ]}
      />
    </div>
  );
};

export default DBItems;
