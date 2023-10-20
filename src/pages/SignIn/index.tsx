import { Wrapper } from './style';

import { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Button from 'components/common/Button';
import Meta from 'components/common/Meta';

import { authAPI } from 'services/api/auth';
import { authStore } from 'services/store/auth';

import { ROUTES } from 'utils/constants/routes';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = authStore((state) => state);

  const onSubmit = useCallback(async () => {
    try {
      const res = await authAPI.signIn({ email: 'rootadmin@yopmail.com', password: '123456' });
      console.log('res: ', res);
      navigate(ROUTES.dashboard);
    } catch (error) {
      console.log('error: ', error);
      alert((error as Error)?.message);
    }
  }, [navigate]);

  if (isLoggedIn) {
    return <Navigate to={ROUTES.dashboard} />;
  }

  return (
    <>
      <Meta title="Demo App - Sign In" />
      <Wrapper>
        <h2 style={{ textAlign: 'center' }}>In SignIn</h2>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="primary" type="button" onClick={onSubmit}>
            Login test
          </Button>
        </div>
      </Wrapper>
    </>
  );
};

export default SignIn;
