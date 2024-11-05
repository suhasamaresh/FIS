// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import drait from "@/assets/full_logo-wide.png";

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState(""); // For forgot password email input
//   const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
//   const [forgotPassword, setForgotPassword] = useState(false); // For toggling between login and forgot password
//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (username === "user" && password === "password") {
//       router.push("/faculty");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Logic to send email link (like an API call) goes here
//     alert(`Password reset link sent to ${email}`);
//     // After sending the email, reset the state to show the login form again
//     setForgotPassword(false);
//   };

//   return (
//     <div className="relative min-h-screen w-full">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 bg-cover bg-center background-image">
//         <div className="absolute inset-0 bg-white/60" /> {/* Fading effect */}
//       </div>

//       {/* Content Container */}
//       <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
//         {/* Login Card */}
//         <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
//           {/* Institute Logo and Name */}
//           <div className="text-center mb-6">
//             <Image
//               src={drait} // Replace with your actual logo
//               alt="drait logo"
//               width={500} // Adjust width and height as needed
//               height={50}
//               className="h-16"
//             />
//           </div>

//           {/* Ternary operator to toggle between login form and forgot password */}
//           {forgotPassword ? (
//             <form onSubmit={handleForgotPassword} className="space-y-6">
//               {/* Forgot Password Form */}
//               <div>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
//               >
//                 Send Reset Link
//               </button>

//               {/* Button to return to login form */}
//               <button
//                 type="button"
//                 className="w-full mt-4 text-blue-600 hover:underline"
//                 onClick={() => setForgotPassword(false)}
//               >
//                 Back to Login
//               </button>
//             </form>
//           ) : (
//             <form onSubmit={handleLogin} className="space-y-6">
//               {/* Login Form */}
//               <div>
                // <div className="relative">
                //   <input
                //     type="text"
                //     value={username}
                //     onChange={(e) => setUsername(e.target.value)}
                //     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                //     placeholder="Login ID"
                //     required
                //   />
                //   <div className="absolute right-3 top-2.5 text-gray-400">
                //     <svg
                //       className="h-5 w-5"
                //       fill="none"
                //       stroke="currentColor"
                //       viewBox="0 0 24 24"
                //     >
                //       <path
                //         strokeLinecap="round"
                //         strokeLinejoin="round"
                //         strokeWidth="2"
                //         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                //       />
                //     </svg>
                //   </div>
                // </div>
//               </div>

//               <div>
//                 <div className="relative">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Password"
//                     required
//                   />
//                   <div
//                     className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? (
//                       <svg
//                         className="h-5 w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                     ) : (
//                       <svg
//                         className="h-5 w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                         />
//                       </svg>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex space-x-4">
//                 <button
//                   type="button"
//                   className="flex-1 px-2 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
//                   onClick={() => setForgotPassword(true)}
//                 >
//                   FORGOT PASSWORD
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex-1 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
//                 >
//                   LOGIN
//                 </button>
//               </div>

//               {/* Google Sign In Button */}
//               <div className="mt-4">
//                 <button
//                   type="button"
//                   className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//                   onClick={() => router.push("/faculty_reg")}
//                 >
//                   <span className="text-gray-600">Register Teacher</span>
//                 </button>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import drait from "@/assets/full_logo-wide.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); // For forgot password email input
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility
  const [forgotPassword, setForgotPassword] = useState(false); // For toggling between login and forgot password
  const router = useRouter();

  // Mock data for teachers' usernames, passwords, and their display names
  const teachersData: { [key: string]: { password: string; name: string } } = {
    user1: { password: "password1", name: "Dr. John Smith" },
    user2: { password: "password2", name: "Dr. Jane Doe" },
    user3: { password: "password3", name: "Dr. Alice Johnson" },
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the user credentials
    if (
      teachersData[username] &&
      teachersData[username].password === password
    ) {
      const teacherName = teachersData[username].name;
      // Store teacher's name in local storage
      localStorage.setItem("teacherName", teacherName);
      // Redirect to the faculty page
      router.push("/faculty");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleForgotPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
    setForgotPassword(false);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center background-image">
        <div className="absolute inset-0 bg-white/60" /> {/* Fading effect */}
      </div>

      {/* Content Container */}
      <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
        {/* Login Card */}
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-6">
          {/* Institute Logo and Name */}
          <div className="text-center mb-6">
            <Image
              src={drait}
              alt="drait logo"
              width={500}
              height={50}
              className="h-16"
            />
          </div>

          {forgotPassword ? (
            <form onSubmit={handleForgotPassword} className="space-y-6">
              {/* Forgot Password Form */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Send Reset Link
              </button>
              <button
                type="button"
                className="w-full mt-4 text-blue-600 hover:underline"
                onClick={() => setForgotPassword(false)}
              >
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Login Form  User Id*/}
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Login ID"
                  required
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Login Form Password*/}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Password"
                  required
                />
                <div
                  className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                >
                  {showPassword ? (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.486 5 12 5c4.514 0 8.268 2.943 9.542 7-1.274 4.057-5.028 7-9.542 7-4.514 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.486 5 12 5c4.514 0 8.268 2.943 9.542 7-1.274 4.057-5.028 7-9.542 7-4.514 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex-1 px-2 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
                  onClick={() => setForgotPassword(true)}
                >
                  FORGOT PASSWORD
                </button>
                <button
                  type="submit"
                  className="flex-1 px-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  LOGIN
                </button>
              </div>

              {/* For registering new teachers */}
              <div className="mt-4">
                <button
                  type="button"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  onClick={() => router.push("/faculty_reg")}
                >
                  <span className="text-gray-600">Register Teacher</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
