import React, { useEffect } from 'react'
import { getAllUsers } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { setAllUserDetails } from '../context/actions/allUserActions';
import DataTable from './DataTable';
import Avatar from "../assets/img/avatar.png";

const DBUsers = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("usersssssss")
    console.log(allUsers)
    if (!allUsers) {
      getAllUsers().then((data) => {
        // console.log("user data aa raha hai : ");
        // console.log(data);
        dispatch(setAllUserDetails(data));
        console.log("after dispatch")
        console.log(setAllUserDetails(data))
      });
    }
    console.log("ggggggggggg")
    console.log(allUsers)
  }, []);

  return (
    <div className="flex items-center justify-self-center gap-4 pt-6 w-full">
      <DataTable

      // hello
        data={allUsers}
        title="List of Users"
        columns={[
          {
            title: "Image",
            field: "photoURL",
            render: (rowData) => (
              <img
                src={rowData.photoURL ? rowData.photoURL : Avatar}
                className="w-32 h-16 object-contain rounded-md"
              />
            ),
          },
          {
            title: "Name",
            field: "displayName",
          },
          {
            title: "Email",
            field: "email",
          },
          {
            title: "Verified",
            field: "emailVerified",
            render: (rowData) => (
              <p

                className={`px-2 py-1 w-32 text-center text-primary rounded-md ${
                  rowData.emailVerified ? "bg-emerald-500" : "bg-red-500"
                }`}
              >
                {rowData.emailVerified ? "Verified" : "Not Verified"}
              </p>
            ),
          },

        ]}

      />
    </div>
  );
};

export default DBUsers;