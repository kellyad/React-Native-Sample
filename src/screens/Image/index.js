import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity,Button, View } from 'react-native';
import moment from 'moment';

import MyTextInput from '../../components/MyTextInput';
import passwordInput from '../../components/passwordInput';
import styles from '../../components/MyForm.styles';
import commonStyle from '../../../CommonStyle';

/**
 * Automatically adds the dashes required by the specified phone format and limits the input to ten characters
 */

function MyForm(props) {
  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text>Hi!</Text>
      <Text>welcome back</Text>
      <Field
        name={'UserName'}
        component={MyTextInput}
        placeholder={'UserName'}
      />
      <Field
        name={'password'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        component={passwordInput}
        type="password" 
        validate={[                                                                                                            
          (val) => val ? undefined : 'Password field is required',
          (val) => val && val.length >= 8 ? undefined : 'Password must be at least 8 characters long'
        ]}
      />
      <View style={{width: 120, backgroundColor: '#000000'}}>
           
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>SIGN IN</Text>                                                                                 
      </TouchableOpacity>
      </View>

    </ScrollView>
  );
}


export default reduxForm({
  form: 'signIn'
})(MyForm);
