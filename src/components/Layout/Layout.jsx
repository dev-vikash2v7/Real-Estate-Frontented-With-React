import React, { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";
import { BASE_URL } from "../../config";

const Layout = () => {

  useFavourites()
  useBookings()

  const { isAuthenticated, user , getAccessTokenSilently , getAccessTokenWithPopup} = useAuth0();
  const { setUserDetails , userDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {

    const getTokenAndRegsiter = async () => {

      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://eazyhome-backend.vercel.app',
          scope : "openid profile email"
        },
      });

      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));

      // console.log('user detailts ' , userDetails)
      mutate(res)
    };
    // console.log('isauth ' , isAuthenticated , user);

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
