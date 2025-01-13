import * as Yup from "yup";
import { useFormik } from "formik";

const schema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  expiryAt: Yup.date().required("Expiry date is required"),
  user: Yup.array()
    .of(Yup.string().required("Each name must be a string"))
    .required("Users list is required"),
  amount: Yup.number()
    .positive("Amount must be positive").min(10,"Amount must be more then 10")
    .required("Amount is required"),
  maxEnroll: Yup.number()
    .positive("Max enrollment must be positive")
    .required("Max enrollment is required"),
  maxUserCancel: Yup.number().nullable().max(100,"only 100 user to cancle").required(),
});

const Services = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        title: "",
        description: "",
        expiryAt: "",
        user: [
          "Akshar",
          "kirtan",
          "jeel",
          "jeet",
          "aham",
          "adh",
          "dvdv",
          "dvdv",
        ],
        amount: "",
        maxEnroll: "",
        maxUserCancel: "",
      },
      validationSchema: schema,
    });

  console.log(values.user);

  return (
    <>
      <h1>Create Services</h1>
      <form>
        <label htmlFor="title"></label>
        <input
          type="text"
          name="title"
          id="title"
          values={values.title}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Title"
        />
        {touched.title && errors.title && (
          <div className="error">{errors.title}</div>
        )}
        <input
          type="text"
          cols="40"
          rows="5"
          name="description"
          id="description"
          values={values.description}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Description"
        />
        {touched.description && errors.description && (
          <div className="error">{errors.description}</div>
        )}
        <label htmlFor="">Expiry At</label>
        <input
          type="date"
          name="expiryAt"
          id="expiryAt"
          values={values.expiryAt}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="expiryAt"
        />
        {touched.expiryAt && errors.expiryAt && (
          <div className="error">{errors.expiryAt}</div>
        )}
        <label htmlFor="">User able to Attend</label>
        <select
          name="user"
          id="user"
          multiple
          values={values.user}
          onBlur={handleBlur}
          onChange={handleChange}
        >
          {values.user.map((user, index) => (
            <option key={index} value={user}>
              {user}
            </option>
          ))}
        </select>
        {touched.user && errors.user && (
          <div className="error">{errors.user}</div>
        )}
        <input
          type="number"
          name="amount"
          id="amount"
          values={values.amount}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Amount"
        />
        {touched.amount && errors.amount && (
          <div className="error">{errors.amount}</div>
        )}
        <input
          type="number"
          name="maxEnroll"
          id="maxEnroll"
          values={values.maxEnroll}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Max Enroll"
        />
        {touched.maxEnroll && errors.maxEnroll && (
          <div className="error">{errors.maxEnroll}</div>
        )}
        <input
          type="number"
          name="maxUserCancel"
          id="maxUserCancel"
          values={values.maxUserCancel}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="max User Cancel"
        />
        {touched.maxUserCancel && errors.maxUserCancel && (
          <div className="error">{errors.maxUserCancel}</div>
        )}
      </form>
    </>
  );
};

export default Services;
