import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Spinner from "../common/Spinner";

const UpdateProduct = ({ details, setProductDetails }) => {
  const [user, loading] = useAuthState(auth);
  const { _id } = details;

  if (loading) {
    <Spinner />;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const CLIENT_API_KEY = `7e411a53cb33bd888f58071eabce8e4e`;

    const formData = new FormData();
    const imgSource = data.img[0];
    formData.append("image", imgSource);

    const url = `https://api.imgbb.com/1/upload?key=${CLIENT_API_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            description: data.description,
            stock: data.stock,
            price: data.price,
            min_Order: data.min_Order,
            img: img,
            status: data.status,
          };

          fetch(`http://localhost:5000/update_Product/${_id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((response) => response.json())
            .then((result) => {
              toast.success("Your Product Updated Successfully done!");
              setProductDetails(null);
            });
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="update-product-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="update-product-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold">Product Update</h3>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control my-4">
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="text"
                  value={user?.displayName || "Admin"}
                  readOnly
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Product Name is Require",
                    },
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="text"
                  placeholder="Description"
                  {...register("description", {
                    required: true,
                    maxLength: 5000,
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <label className="label label-text">Product Image</label>
                <input
                  type="file"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "Image is Require",
                    },
                  })}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Price is Require",
                    },
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="number"
                  placeholder="Minimum Order"
                  {...register("min_Order", {
                    required: {
                      value: true,
                      message: "Minimum Order is Require",
                    },
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <input
                  type="number"
                  placeholder="Stock"
                  {...register("stock", {
                    required: {
                      value: true,
                      message: "Product Stock is Require",
                    },
                  })}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control my-4">
                <label className="label label-text">
                  Published or Unpublished
                </label>
                <input
                  type="checkbox"
                  {...register("status")}
                  className="toggle toggle-primary"
                />
              </div>
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
              <div className="modal-action">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
