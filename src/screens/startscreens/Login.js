import React, { useState, useEffect, useRef, } from 'react';
import { View, Text, StyleSheet, Alert, } from 'react-native';
import { Container, FormInput, Button, ButtonPlain, } from '../../components';
import { colors } from '../../theme';
import useAuthStore from '../../stores/Auth';
import { authType } from '../../stores/types';

const Login = ({ navigation }) => {
  const { authStatus, authUser, authError, signInWithEmail, } = useAuthStore();
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');

  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    if (authUser) {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Login');
    }
  }, [authUser]);

  useEffect(() => {
    if (authStatus === authType.SIGNIN_FAIL) {
      Alert.alert(authError)
    }
  }, [authStatus]);

  const onSubmit = () => {
    if (!email) {
      Alert.alert('Please enter an email')
    } else if (!password) {
      Alert.alert('Please enter a password')
    } else {
      signInWithEmail({
        email,
        password,
      })
    }
  }

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
        onChangeText={(text) => setPassword(text)}
        inputRef={passRef}
      />
      <Button
        title={'SUBMIT'}
        onPress={() => onSubmit()}
      />
      <View style={styles.bottomContainer} >
        <Text>Don't have an Account?</Text>
        <ButtonPlain
          title={'Register'}
          onPress={() => navigation.navigate('Register')}
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


export default Login;