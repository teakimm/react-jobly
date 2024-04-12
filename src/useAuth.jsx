import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import useLocalStorage from "./useLocalStorage";
import JoblyApi from "../api";

/** Custom hook for authentication */
export default function useAuth() {
    const [currUser, setCurrUser] = useState(null);
    const [token, setToken] = useLocalStorage("token");
    const [firstLoading, setFirstLoading] = useState(true);

    /** sets the token on mount and when the token changes. Decodes the token
     * and makes an api call with the token to receive user information
     */
    useEffect(function updateUserInfoOnTokenChange() {

      async function updateUserInfo() {
        try {
          const user = await JoblyApi.getUser(jwtDecode(token).username);
          setCurrUser(user);
        } catch {
          setCurrUser(null);
        }
        setFirstLoading(false);
      }
      JoblyApi.token = token;
      updateUserInfo();
    }, [token]);

    return [currUser, setCurrUser, firstLoading, setToken];
  }