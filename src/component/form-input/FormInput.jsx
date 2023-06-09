import { FormInputLabel, Input, Group} from './frominput.styles';

const FromInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input  className='form-input' {...otherProps} />
      {label && (
        <FormInputLabel
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FromInput;