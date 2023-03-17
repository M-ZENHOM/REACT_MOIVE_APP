import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { getAllUserData, userLogout } from "../RTK/slices/userSlice";

const useFirebaseAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, photo } = useSelector((state) => state.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else {
        dispatch(userLogout());
        navigate("/");
      }
    });
  }, []);

  const GoogleAuthHandler = () => {
    !name
      ? signInWithPopup(auth, googleProvider)
          .then((result) => {
            setUser(result.user);
            navigate("/home");
          })
          .catch((error) => {
            alert(error.message);
          })
      : signOut(auth)
          .then(() => {
            dispatch(userLogout());
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
          });
  };
  const facebookAuthHandler = () => {
    !name
      ? signInWithPopup(auth, facebookProvider)
          .then((result) => {
            setUser(result.user);
            navigate("/home");
          })
          .catch((error) => {
            alert(error.message);
          })
      : signOut(auth)
          .then(() => {
            dispatch(userLogout());
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
          });
  };

  const setUser = (user) => {
    dispatch(
      getAllUserData({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email,
      })
    );
  };
  return {
    GoogleAuthHandler,
    facebookAuthHandler,
    name,
    photo,
  };
};

export default useFirebaseAuth;
