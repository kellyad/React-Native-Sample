import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity,Button, View } from 'react-native';
import moment from 'moment';

import MyTextInput from './MyTextInput';
import styles from './MyForm.styles';
import commonStyle from '../../CommonStyle';

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
        component={MyTextInput}
        type="password" 
        validate={[                                                                                                            
          (val) => val ? undefined : 'Password field is required',
          (val) => val && val.length >= 8 ? undefined : 'Password must be at least 8 characters long'
        ]}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Max date</Text>
     
      <View style={{width: 120, backgroundColor: '#FFFFFF'}}>
           
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
