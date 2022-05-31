import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ details, setProductDeleting }) => {
  const { name, _id } = details;
  const handleDelete = () => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        toast.success("Your Product Delete Successfully done!");
        setProductDeleting(null)
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="delete-confirm-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">
            Are You confirm delete {name}
          </h3>
          <div class="modal-action">
            <button onClick={handleDelete} className="btn btn-primary">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
