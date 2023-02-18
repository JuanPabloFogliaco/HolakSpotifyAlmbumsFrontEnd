import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import HomeView from "./views/home/home";
import LoginView from "./views/login/login";

function App() {
  const defaultConfig = {
    baseUrl: "http://localhost:8080/api/v1/",
    headers: {
      "Content-Type": "*",
      Acept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    },
  };

  const access_token = localStorage.getItem("access_token");

  function addRequestInterceptorAndDefaults() {
    return axios.interceptors.request.use(
      (config: any) => {
        const access_token = localStorage.getItem("access_token");
        config.headers = defaultConfig.headers;
        config.baseURL = defaultConfig.baseUrl;
        if (access_token !== null) {
          config.headers = {
            ...config.headers,
            Authorization: "Bearer " + access_token,
          };
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  function addResponseInterceptor() {
    return axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalConfig = error.config;
        if (error.response) {
          if (error.response.status === 401 && !originalConfig._retry) {
            if (error.response.status === 404) {
              console.log("404!!!!!!!!!!!!!");
            }

            const rf = await axios.post("https://api.spotify.com/v1/refresh", {
              refresh_token: localStorage.getItem("access_token"),
            });
            console.log("rf", rf);
            if (rf != undefined) {
              originalConfig._retry = true;
              localStorage.setItem("access_token", rf.data);
            }
          }
          if (error.response.status === "ANOTHER_STATUS_CODE") {
            // Do something
            return Promise.reject(error.response.data);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  useEffect(() => {
    addRequestInterceptorAndDefaults();
    addResponseInterceptor();
  }, [access_token]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const access_token = hash.substring(1).split("&")[0].split("=")[1];
      localStorage.setItem("access_token", access_token);
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/" element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
