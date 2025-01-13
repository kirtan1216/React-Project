import { useFormik } from "formik";
import * as Yup from "yup";

const onSubmit = () => {
  console.log("Form is submitted");
};

const basicSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  age: Yup.number().positive().integer().required("Required"),
  password: Yup.string()
    .min(5)
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must conrain at least one symbol"
    )
    .matches(/[0-9]/, "Password must one number")
    .matches(/[A-Z]/, "Password must one uppercase letter ")
    .matches(/[a-z]/, "Password must one lowercase latter")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Conform Password is requird"),
});

const BasicForm = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors , touched } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        id="email"
        type="email"
        placeholder="Enter your email"
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="ege">Age</label>
      <input
        onBlur={handleBlur}
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        className={errors.age && touched.age ? "input-error" : ""}
      />
      {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        id="password"
        type="password"
        placeholder="Enter your password"
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && <p className="error">{errors.password}</p>}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        id="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
      />
      {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};
export default BasicForm;
