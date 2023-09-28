import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import { Container, FormInput, Button, ButtonPlain, } from '../../components';
import { colors } from '../../theme';

const Register = ({ navigation }) => {
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [retypePassword, setRetypePassword ] = useState('');

  const emailRef = useRef(null);
  const passRef = useRef(null);
  const retypePassRef = useRef(null);

  return (
    <Container style={styles.container}>
      <FormInput 
        placeholder={'Enter your email'}
        clearButtonMode={'while-editing'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={email}
        onChangeText={(text) => setEmail(text)}
        inputRef={emailRef}
        onEndEditing={() => passRef?.current?.focus()}
      />
      <FormInput 
        placeholder={'Password'}
        clearButtonMode={'while-editing'}
        secureTextEntry
        value={password}
        textContentType={'oneTimeCode'}
        onChangeText={(text) => setPassword(text)}
        inputRef={passRef}
        onEndEditing={() => retypePassRef?.current?.focus()}
      />
      <FormInput 
        placeholder={'Re-type Password'}
        clearButtonMode={'while-editing'}
        secureTextEntry
        value={retypePassword}
        textContentType={'oneTimeCode'}
        onChangeText={(text) => setRetypePassword(text)}
        inputRef={retypePassRef}
      />
      <Button
        title={'SUBMIT'}
      />
      <View style={styles.bottomContainer} >
        <Text>Already have an Account?</Text>
        <ButtonPlain
          title={'Login'}
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  bottomContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  linkText: {
    color: colors.primary,
  },
});

export default Register;