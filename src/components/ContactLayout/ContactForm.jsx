import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number")
    .required("Phone is required"),
  company: yup.string().required("Company name is required"),
  message: yup.string().required("Message cannot be empty"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert(
      "Your message has been sent successfully! We will get back to you soon."
    );
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12">
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          GET IN TOUCH WITH MOON CERAMICS
        </h2>
        <p className="text-gray-500 mt-2">
          Have questions, feedback, or collaboration ideas? <br />
          Fill out the form below or reach us directly via phone or email.
        </p>

        {/* Contact Info */}
        <div className="mt-6 text-sm text-gray-700 space-y-4">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">Office Hours:</p>
            <p className="text-[#C69B7B] text-base">
              Monday - Friday, 8:00 am to 5:00 pm
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">Email:</p>
            <p className="text-[#C69B7B] text-base">contact@moonceramics.com</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">Phone:</p>
            <p className="text-[#C69B7B] text-base">+91 93928 92792</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-base">Location:</p>
            <p className="text-[#C69B7B] text-base">
              Sanjeeva Reddy Nagar, Hyderabad, Telangana, India
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-6 md:p-8 space-y-4 bg-white rounded-lg shadow-md"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              {...register("phone")}
              type="text"
              placeholder="+91 93928 92792"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
            </label>
            <input
              {...register("company")}
              type="text"
              placeholder="Your Company Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.company && (
              <p className="text-red-500 text-xs mt-1">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            {...register("message")}
            placeholder="Write your message here..."
            rows="4"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 cursor-pointer text-white py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
        >
          SEND MESSAGE →
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
