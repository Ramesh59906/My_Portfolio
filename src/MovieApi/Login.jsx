import { Button, CircularProgress, Grid,  TextField, Typography, Container, Paper } from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
// import '../css/Title.css'

export default function LoginForm() {
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [ShowPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const [Error, setError] = useState({
        username: false,
        password: false,
    });

    let navigate = useNavigate();

    const handleSubmit = () => {
        const ValidateUser = {
            username: UserName === "" ? true : '',
            password: Password === "" ? true : Password.length <= 7 ? "wrong" : "",
        };
        setError(ValidateUser);

        if ((UserName !== "" && Password !== "") && (Object.values(ValidateUser).every(val => val !== "wrong"))) {
            setLoading(true);
            const formData = new URLSearchParams();
            formData.append('username', UserName);
            formData.append('password', Password);

            axios.post("http://192.168.1.41:8000/login", formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then((res) => {
                setLoading(false);
                if (res.data.detail === "Password must be at least 8 characters long") {
                    setError({ ...Error, password: "wrong" });
                } else if (res.data) {
                    localStorage.setItem("Name", res.data.name);
                    localStorage.setItem("Role", res.data.role);
                    localStorage.setItem("user_id", res.data.id);
                    localStorage.setItem("Token", res.data.access_token);
                    res.data.emp_id && localStorage.setItem("EmpID", res.data.emp_id);

                    if (res.data.role === 'Owner' || 'Customer') {
                        navigate('/Index');
                    } else {
                        Swal.fire({
                            title: "Access Denied",
                            text: "You do not have permission to access this page.",
                            icon: "error",
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    }
                }
            }).catch(err => {
                setLoading(false);
                if (err.response && err.response.data) {
                    const { detail } = err.response.data;
                    if (detail === "Incorrect Password") {
                        Swal.fire({
                            title: "Password is incorrect",
                            text: "Try Again!!",
                            timer: 1500,
                            showConfirmButton: false,
                            icon: "warning"
                        });
                    } else if (detail[0]?.msg === "value is not a valid email address") {
                        Swal.fire({
                            title: "Value is not a valid email address",
                            text: "Try Again!!",
                            timer: 1500,
                            showConfirmButton: false,
                            icon: "warning"
                        });
                    } else if (detail === "Incorrect Email") {
                        Swal.fire({
                            title: "Incorrect Email",
                            text: "Try Again!!",
                            timer: 1500,
                            showConfirmButton: false,
                            icon: "warning"
                        });
                    }
                } else {
                    Swal.fire({
                        title: "Database not connected",
                        icon: "error",
                    });
                }
            });
        }
    };

    const handleTogglePassword = () => {
        setShowPassword(!ShowPassword);
    };

    return (
        <Grid className='login' container sx={{ p: 5, display: "flex", justifyContent: "center", alignItems: "center" ,height:'90vh'}}>
            <Grid xs={6}>
                <Container component="main" maxWidth="xs" sx={{ paddingTop: '20px', }}>
                    <Paper elevation={3}>
                        <Typography variant="h4" align="center" sx={{ fontWeight: 700 }}>Login </Typography>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                            <button style={{
                                border: '1px solid #000',
                                color: '#000',
                                background: 'transparent',
                                padding: '10px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                            }}>
                                 <svg className='svg' width="21" height="21" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_95)">
                                        <path d="M10.7136 2.26324C7.68514 3.31382 5.07344 5.30787 3.26207 7.95248C1.4507 10.5971 0.535135 13.7529 0.649864 16.9563C0.764593 20.1597 1.90357 23.2419 3.89949 25.7502C5.89541 28.2584 8.64307 30.0605 11.7389 30.8918C14.2487 31.5394 16.8783 31.5678 19.4016 30.9747C21.6874 30.4612 23.8007 29.3629 25.5346 27.7874C27.3391 26.0975 28.649 23.9477 29.3233 21.5691C30.0562 18.9826 30.1866 16.2624 29.7045 13.6176H15.6105V19.464H23.7728C23.6097 20.3965 23.2601 21.2865 22.745 22.0807C22.2299 22.8749 21.5599 23.5571 20.775 24.0863C19.7783 24.7456 18.6547 25.1892 17.4764 25.3887C16.2947 25.6084 15.0826 25.6084 13.9008 25.3887C12.7031 25.141 11.57 24.6467 10.5738 23.9371C8.97347 22.8042 7.7718 21.1948 7.14032 19.3385C6.49817 17.4475 6.49817 15.3973 7.14032 13.5063C7.58982 12.1807 8.3329 10.9738 9.3141 9.97566C10.437 8.81239 11.8585 7.98089 13.4229 7.57237C14.9872 7.16385 16.6338 7.1941 18.1821 7.6598C19.3916 8.03108 20.4976 8.67977 21.412 9.55416C22.3323 8.63855 23.2511 7.72058 24.1683 6.80023C24.6419 6.30533 25.1581 5.83411 25.6245 5.32737C24.2288 4.02849 22.5905 3.0178 20.8034 2.35322C17.5491 1.17159 13.9884 1.13983 10.7136 2.26324Z" fill="white" />
                                        <path d="M10.7135 2.26323C13.988 1.13906 17.5488 1.16998 20.8033 2.35084C22.5907 3.01994 24.2283 4.03549 25.6221 5.3392C25.1485 5.84594 24.6489 6.31953 24.1658 6.81206C23.2471 7.72925 22.3291 8.64328 21.4119 9.55415C20.4975 8.67976 19.3915 8.03107 18.182 7.65979C16.6343 7.19245 14.9877 7.16045 13.423 7.5673C11.8582 7.97415 10.4358 8.80413 9.31167 9.96618C8.33047 10.9644 7.58739 12.1713 7.13789 13.4968L2.22913 9.69623C3.98617 6.21193 7.02837 3.54672 10.7135 2.26323Z" fill="#E33629" />
                                        <path d="M0.926798 13.4613C1.19064 12.1537 1.62867 10.8874 2.22917 9.69623L7.13794 13.5063C6.49578 15.3973 6.49578 17.4475 7.13794 19.3385C5.50247 20.6014 3.86622 21.8707 2.22917 23.1462C0.725879 20.1539 0.267401 16.7444 0.926798 13.4613Z" fill="#F8BD00" />
                                        <path d="M15.6104 13.6152H29.7045C30.1866 16.26 30.0562 18.9802 29.3232 21.5668C28.6489 23.9453 27.3391 26.0951 25.5345 27.785C23.9504 26.5489 22.3591 25.3223 20.7749 24.0863C21.5603 23.5565 22.2307 22.8736 22.7458 22.0785C23.2609 21.2835 23.6102 20.3926 23.7728 19.4593H15.6104C15.6081 17.5128 15.6104 15.564 15.6104 13.6152Z" fill="#587DBD" />
                                        <path d="M2.22681 23.1462C3.86385 21.8833 5.50011 20.6141 7.13557 19.3385C7.76831 21.1955 8.97169 22.805 10.5738 23.9371C11.5731 24.6434 12.7086 25.1337 13.9079 25.3768C15.0897 25.5965 16.3018 25.5965 17.4835 25.3768C18.6618 25.1774 19.7854 24.7337 20.7821 24.0744C22.3662 25.3105 23.9575 26.5371 25.5417 27.7732C23.8081 29.3496 21.6947 30.4487 19.4087 30.9628C16.8854 31.556 14.2558 31.5276 11.746 30.8799C9.76092 30.3499 7.90675 29.4156 6.29968 28.1355C4.59869 26.785 3.2094 25.0831 2.22681 23.1462Z" fill="#319F43" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_95">
                                        <rect width="30.3098" height="30.3098" fill="white" transform="translate(0.00463867 0.527283)" />
                                        </clipPath>
                                    </defs>
                                    </svg>
                                Continue with Google
                            </button>
                        </div>
                        <Typography align="center" sx={{ margin: '20px 0' }}>-OR-</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                       placeholder='Name'
                                        value={UserName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        error={Error.username}
                                        helperText={Error.username && "Enter valid Name"}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField className='input'
                                    variant="outlined"
                                    placeholder='Password'
                                    
                                    fullWidth
                                    type="password"
                                    value={Password}
                                    onChange={e => setPassword(e.target.value)}
                                    error={Boolean(Error.password)}
                                    helperText={Error.password && "Password is Requird"}
                                    show={ShowPassword ? "text" : "password"}
                                                        InputProps={{
                                                            endAdornment: (
                                                                < disableRipple onClick={handleTogglePassword}>
                                                                    {ShowPassword ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                                                                </disableRipple>
                                                            ),
                                                        }}
                                />
                                </Grid>
                                <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2 ,background:'#27563A',borderRadius:'3px'}}
                                onClick={handleSubmit}
                                disabled={loading}
                            >
                                {loading ? <CircularProgress size={24} /> : 'Login'}
                            </Button>
                            <p>Don’t have an account? <Link to='/Register' >Register</Link></p>
                            </Grid>
                            </Grid>
                    </Paper>
                </Container>
            </Grid>
            <Grid xs={6}></Grid>
        </Grid>
    )
}