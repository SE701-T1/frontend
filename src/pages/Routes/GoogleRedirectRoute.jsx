import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import LoadingComponent from '../../components/Loading/LoadingComponent';

function GoogleRedirectRoute() {
  const navigate = useNavigate();
  const { setJwt } = useContext(AuthContext);

  useEffect(() => {
    try {
      const accessToken = window.location.hash.match(/#access_token=([^&]+)/)[1];
      if (!accessToken) {
        navigate('/login', { replace: true });
      }

      axios
        .post(`${process.env.REACT_APP_BACKEND_ENDPOINT}/api/users/login`, null, {
          headers: {
            id_token: accessToken,
          },
        })
        .then(({ data }) => {
          setJwt(data);
        })
        .catch(() => {
          setJwt('');
        });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      navigate('/login', { replace: true });
    }
  }, []);

  return <LoadingComponent />;
}

export default GoogleRedirectRoute;
