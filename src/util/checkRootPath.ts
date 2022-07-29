import { useLocation } from 'react-router-dom';

const checkRootPath = () => {
  const { pathname } = useLocation();

  return pathname === '/';
};

export default checkRootPath;
