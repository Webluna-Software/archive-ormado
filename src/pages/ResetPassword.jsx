// // import axios from "axios";
// // import { useRef, useState } from "react";
// // import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
// // import { useParams } from "react-router-dom";


// // const ResetPassword = () => {
// //   const firstPassRef = useRef<HTMLInputElement>(null);
// //   const secondPassRef = useRef<HTMLInputElement>(null);
// //   const {resetToken} = useParams();
// //   const [check, setCheck] = useState(false);
// //   const [inputtype, setInputtype] = useState("password");

  
// //   const loginSubmit = (e) => {
// //     e.preventDefault();

// //     if (!firstPassRef.current?.value || !secondPassRef.current?.value) {
// //       alert("Please, fill in the inputs.", "I can verify when we fill in the blanks.", "warning");
// //     }else{
// //       axios.put(`https://ormadoapi.webluna.org/api/auth/resetpassword/${resetToken}`,{
// //         password:secondPassRef.current?.value
// //       },{  headers: {
// //         'Authorization': `Bearer ${resetToken}`,
// //         'Content-Type': 'application/json',
// //       } })
// //       .then(res=>{
// //         console.log(res.status);
        
// //         if (res.status === 200) {
// //           alert(
// //             "Your password has been successfully changed",
// //             "",
// //             "success"
// //           );
// //         setTimeout(() => {
// //             window.location.assign('/login');
// //         }, 2000);
// //         }else{
// //           alert(
// //             "Something went wrong",
// //             "Please try again",
// //             "error"
// //           );
// //         }
// //       }).catch(err=>console.log(err))
// //     }
    
// //   };
  
  
// //   return (
// //     <div className="login">
// //       <div className="top-intro">
// //         <div className="color d-flex align-items-center">
// //           <Container>
// //             <h1>Reset Password</h1>
// //           </Container>
// //         </div>
// //       </div>
// //       <section className=" mt-5 ">
// //         <h1 className="text-center my-3">Create new password</h1>
// //         <Container>
// //           <div className="d-flex align-items-center justify-content-center">
// //             <Col sm={12} md={5} className="right p-5 border my-5 rounded">
// //               <Form onSubmit={loginSubmit}>
// //                 <Row>
// //                   <Col sm={12} md={12}>
// //                     <Form.Group
// //                       className="mb-3 py-3"
// //                       controlId="formBasicEmail"
// //                     >
// //                       <Form.Label>New password</Form.Label>
// //                       <Form.Control
// //                          type={inputtype}
// //                         placeholder="Enter new password"
// //                         ref={firstPassRef}
// //                       />
// //                     </Form.Group>
// //                   </Col>
// //                   <Col sm={12} md={12}>
// //                     <Form.Group
// //                       className="mb-3 py-3"
// //                       controlId="formBasicEmail"
// //                     >
// //                       <Form.Label>Confirm Password </Form.Label>
// //                       <InputGroup className="mb-1">
// //                         <Form.Control
// //                           placeholder="Enter confirm password"
// //                           type={inputtype}
// //                           ref={secondPassRef}
// //                         />
// //                         <Button
// //                           onClick={() => {
// //                             inputtype === "password"
// //                               ? setInputtype("text")
// //                               : setInputtype("password");
// //                           }}
// //                           className="vbtn"
// //                           type="button"
// //                           id="button-addon2"
// //                         >
// //                           <i
// //                             className={`fa-solid ${
// //                               inputtype === "password"
// //                                 ? "fa-eye"
// //                                 : "fa-eye-slash"
// //                             }`}
// //                           ></i>
// //                         </Button>
// //                       </InputGroup>
// //                     </Form.Group>
// //                   </Col>
// //                 </Row>

// //                 <center>
// //                   <div className="d-flex flex-column">
// //                     <Button
// //                       onClick={() => {
// //                         setCheck(true);
// //                         setTimeout(() => {
// //                           setCheck(false);
// //                         }, 2000);
// //                       }}
// //                       className={`vbtn mt-4 rounded-5 ${
// //                         check ? "disabled" : ""
// //                       }`}
// //                       type="submit"
// //                     >
// //                       {check ? "Checking..." : "Reset"}
// //                     </Button>
                
        
// //                   </div>
// //                 </center>
// //               </Form>
// //             </Col>
// //           </div>
// //         </Container>
// //       </section>
// //     </div>
// //   );
// // };

// // export default ResetPassword;

// import axios from "axios";
// import { useRef, useState } from "react";
// import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const firstPassRef = useRef(null);
//   const secondPassRef = useRef(null);
//   const { resetToken } = useParams();
//   const [check, setCheck] = useState(false);
//   const [inputtype, setInputtype] = useState("password");
//   const navigate = useNavigate();

//   const loginSubmit = (e) => {
//     e.preventDefault();

//     if (!resetToken) {
//       alert("Invalid reset link. Please try requesting a new one.");
//       return;
//     }

//     if (!firstPassRef.current?.value || !secondPassRef.current?.value) {
//       alert("Please, fill in the inputs.");
//     } else if (firstPassRef.current.value !== secondPassRef.current.value) {
//       alert("Passwords do not match.");
//     } else {
//       axios
//         .put(`https://ormadoapi.webluna.org/api/auth/resetpassword/${resetToken}`, {
//           password: secondPassRef.current.value,
//         }, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//         .then((res) => {
//           if (res.status === 200) {
//             alert("Your password has been successfully changed.");
//             setTimeout(() => {
//               navigate('/login');
//             }, 2000);
//           } else {
//             alert("Something went wrong. Please try again.");
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//           alert("An error occurred. Please try again later.");
//         });
//     }
//   };

//   return (
//     <div className="login">
//       <div className="top-intro">
//         <div className="color d-flex align-items-center">
//           <Container>
//             <h1>Reset Password</h1>
//           </Container>
//         </div>
//       </div>
//       <section className="mt-5">
//         <h1 className="text-center my-3">Create new password</h1>
//         <Container>
//           <div className="d-flex align-items-center justify-content-center">
//             <Col sm={12} md={12} className="right p-5 border my-5 rounded">
//               <Form onSubmit={loginSubmit}>
//                 <Row>
//                   <Col sm={12} md={12}>
//                     <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
//                       <Form.Label>New password</Form.Label>
//                       <Form.Control
//                         type={inputtype}
//                         placeholder="Enter new password"
//                         ref={firstPassRef}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col sm={12} md={12}>
//                     <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
//                       <Form.Label>Confirm Password</Form.Label>
//                       <InputGroup className="mb-1">
//                         <Form.Control
//                           placeholder="Enter confirm password"
//                           type={inputtype}
//                           ref={secondPassRef}
//                         />
//                         <Button
//                           onClick={() => setInputtype(inputtype === "password" ? "text" : "password")}
//                           className="vbtn"
//                           type="button"
//                           id="button-addon2"
//                         >
//                           <i
//                             className={`fa-solid ${inputtype === "password" ? "fa-eye" : "fa-eye-slash"}`}
//                           ></i>
//                         </Button>
//                       </InputGroup>
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <center>
//                   <div className="d-flex flex-column">
//                     <Button
//                       className={`vbtn mt-4 rounded-5 ${check ? "disabled" : ""}`}
//                       type="submit"
//                     >
//                       {check ? "Checking..." : "Reset"}
//                     </Button>
//                   </div>
//                 </center>
//               </Form>
//             </Col>
//           </div>
//         </Container>
//       </section>
//     </div>
//   );
// };

// export default ResetPassword;
import axios from "axios";
import { useRef, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const firstPassRef = useRef(null);
  const secondPassRef = useRef(null);
  const { resetToken } = useParams();
  const [check, setCheck] = useState(false);
  const [inputtype, setInputtype] = useState("password");
  const navigate = useNavigate();

  const loginSubmit = (e) => {
    e.preventDefault();

    if (!resetToken) {
      alert("Invalid reset link. Please try requesting a new one.");
      return;
    }

    const newPassword = firstPassRef.current?.value;
    const confirmPassword = secondPassRef.current?.value;

    if (!newPassword || !confirmPassword) {
      alert("Please fill in both password fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Optional: Add client-side password validation here
    // Example:
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(newPassword)) {
    //   alert("Password must be at least 8 characters long and include both letters and numbers.");
    //   return;
    // }

    setCheck(true);

    axios
      .put(
        `https://ormadoapi.webluna.org/api/auth/resetpassword/${resetToken}`,
        {
         password: newPassword
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Your password has been successfully changed.");
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch((err) => {
        if (err.response) {
          console.error("Error response data:", err.response.data);
          alert(`Error: ${err.response.data.message || "An error occurred."}`);
        } else {
          console.error("Error:", err.message);
          alert("An error occurred. Please try again later.");
        }
      })
      .finally(() => {
        setCheck(false);
      });
  };

  return (
    <div className="login">
      <div className="top-intro">
        <div className="color d-flex align-items-center">
          <Container>
            <h1>Reset Password</h1>
          </Container>
        </div>
      </div>
      <section className="mt-5">
        <h1 className="text-center my-3">Create new password</h1>
        <Container>
          <div className="d-flex align-items-center justify-content-center">
            <Col sm={12} md={12} className="right p-5 border my-5 rounded">
              <Form onSubmit={loginSubmit}>
                <Row>
                  <Col sm={12} md={12}>
                    <Form.Group className="mb-3 py-3" controlId="formNewPassword">
                      <Form.Label>New Password</Form.Label>
                      <Form.Control
                        type={inputtype}
                        placeholder="Enter new password"
                        ref={firstPassRef}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={12}>
                    <Form.Group className="mb-3 py-3" controlId="formConfirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <InputGroup className="mb-1">
                        <Form.Control
                          placeholder="Enter confirm password"
                          type={inputtype}
                          ref={secondPassRef}
                          required
                        />
                        <Button
                          onClick={() => setInputtype(inputtype === "password" ? "text" : "password")}
                          className="vbtn"
                          type="button"
                          id="button-addon2"
                        >
                          <i
                            className={`fa-solid ${inputtype === "password" ? "fa-eye" : "fa-eye-slash"}`}
                          ></i>
                        </Button>
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>
                <center>
                  <div className="d-flex flex-column">
                    <Button
                      className={`vbtn mt-4 rounded-5 ${check ? "disabled" : ""}`}
                      type="submit"
                      disabled={check}
                    >
                      {check ? "Checking..." : "Reset"}
                    </Button>
                  </div>
                </center>
              </Form>
            </Col>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ResetPassword;
