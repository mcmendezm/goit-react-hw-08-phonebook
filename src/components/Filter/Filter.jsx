import { useDispatch, useSelector } from 'react-redux';
import { Label, Input } from './Filter.styled';
import { changeFilter } from '../../redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Container } from '../../pages/Auth.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Container>
      <h2>My contacts</h2>
      <Label>
        Find by name
        <Input type="text" value={filter} onChange={handleChange} />
      </Label>
    </Container>
  );
};
