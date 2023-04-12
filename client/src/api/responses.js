import { toast } from "react-toastify";

const successRes = (text) => {
  toast.success(text, {
    autoClose: 2000,
  });
};

const errorRes = (text) => {
  toast.error(text, {
    autoClose: 2000,
  });
};

const loadingRes = (text) => {
  toast.info(text, {
    autoClose: 1500,
  });
};

export { successRes, loadingRes, errorRes };
