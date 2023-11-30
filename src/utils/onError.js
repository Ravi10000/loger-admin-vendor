import toast from 'react-hot-toast';

const onError = (error, _formData, _context, msg) => {
  console.error({ error });
  toast.error(msg ?? error?.response?.data?.message ?? 'Something Went Wrong');
};

export default onError;
