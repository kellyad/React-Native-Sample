import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from './MyTextInput.styles';
import Proptypes from 'prop-types';
//import { Icon } from 'native-base';
/**
 * to be wrapped with redux-form Field component
 */
export default function passwordInput(props) {
  const { input, meta, ...inputProps } = props;

  // do not display warning if the field has not been touched or if it's currently being edited
  const validationStyles = meta.touched && !meta.active
    ? meta.valid ? styles.valid : styles.invalid
    : null;

  return (
    <View style={[styles.inputContainer, validationStyles]}>
      
      <TextInput
        {...inputProps}
        underlineColorAndroid='transparent'
        placeholder="password"
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType='go'
        secureTextEntry
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
    </View>
  );
}

passwordInput.propTypes = {
  input: Proptypes.shape({
    onBlur: Proptypes.func.isRequired,
    onChange: Proptypes.func.isRequired,
    onFocus: Proptypes.func.isRequired,
    value: Proptypes.any.isRequired
  }).isRequired,
  meta: Proptypes.shape({
    active: Proptypes.bool.isRequired,
    error: Proptypes.string,
    invalid: Proptypes.bool.isRequired,
    pristine: Proptypes.bool.isRequired,
    visited: Proptypes.bool.isRequired
  }).isRequired
};
