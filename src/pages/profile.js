import { useSelector, useDispatch } from 'react-redux';
import { toggleVisibleProfile } from '../store/profle';
import {ProfileFoorm} from '../components';
export const ProfilePage = () => {
  const [x, setX] = useState(false);
  console.log(x);
  return (
    <div>
      <h1>Страница профиля</h1>
      <input type="checkbox" checked={x} onChange={() => isSecureContext(!x)} />
    </div>
  );
};