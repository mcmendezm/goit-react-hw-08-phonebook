import { useDispatch, useSelector } from 'react-redux';

import { Label, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};
