import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  View,
  Text,
  TextInput,
} from 'react-native';
import uuid from 'react-native-uuid';
import moment from 'moment';

import {
  CardDateTextInput,
  CardNumberTextInput,
} from 'rn-credit-card-textinput';
import CustomButton from '../components/CustomButton';
import { validateExpiryDate } from '../validators';
import { useNavigation } from '@react-navigation/native';
import PaymentSuccess from '../components/PaymentSuccess';
import { clearCart } from '../store/slices/cartSlice';
import { OrderStatus } from '../types';
import { cartItemsSelector } from '../store/selectors';
import { addOrder } from '../store/slices/orderSlice';

const PaymentGateway = () => {
  const [isConfettiVisible, setIsConfettiVisible] = useState(false);

  const [cardValue, setCardValue] = useState('');
  const [focusCardNum, setFocusCardNum] = useState<boolean>(false);

  const [cardDateValue, setCardDateValue] = useState('');
  const [focusCardDateNum, setFocusCardDateNum] = useState<boolean>(false);

  const [CVVValue, setCVVValue] = useState('');

  const navigation = useNavigation();
  const cartItems = useSelector(cartItemsSelector);
  const dispatch = useDispatch();

  const updateText = (cardNum: string) => {
    setCardValue(cardNum);
  };
  const updateCardDate = (cardNum: string) => {
    setCardDateValue(cardNum);
  };

  function validatePayment() {
    return isDateValid() && cardValue !== '' && CVVValue !== '';
  }

  function isDateValid() {
    return (
      cardDateValue &&
      cardDateValue.length === 5 &&
      validateExpiryDate(cardDateValue)
    );
  }

  const handlePayment = () => {
    dispatch(clearCart());
    setIsConfettiVisible(true);

    const orderId = uuid.v4() as string;
    const currentTimestamp = moment().format('YYYY-MM-DDTHH:mm:ss.SSS[+05:30]');
    const order = {
      id: orderId,
      items: JSON.parse(JSON.stringify(cartItems)),
      status: OrderStatus.PENDING,
      date: currentTimestamp,
    };

    // Dispatch Add Order Action
    dispatch(addOrder(order));
  };

  return isConfettiVisible ? (
    <PaymentSuccess onPress={() => navigation.navigate('Orders' as never)} />
  ) : (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          width: '90%',
        }}
      >
        <CardNumberTextInput
          autoFocus={true}
          focus={focusCardNum}
          onFocus={() => setFocusCardNum(true)}
          onBlur={() => {
            setFocusCardNum(false);
          }}
          label='Card number'
          errorColor={'red'}
          defaultBorderColor={'#ddd'}
          inputWrapStyle={{
            width: '100%',
            height: 60,
          }}
          defaultValue={cardValue}
          placeholder={'Credit card'}
          updateTextVal={(text) => {
            updateText(text);
          }}
        />
        <View className='flex flex-row justify-between'>
          <CardDateTextInput
            errorColor={'red'}
            labelColor={'#ddd'}
            focusColor={'#1c32a0'}
            defaultBorderColor={'#ddd'}
            placeholder={'MM/YY'}
            label={'Expiry date'}
            focus={focusCardDateNum}
            error={
              !isDateValid() && focusCardDateNum
                ? 'Invalid Date Value'
                : undefined
            }
            updateCardDateText={(t) => {
              updateCardDate(t);
            }}
            onFocus={() => setFocusCardDateNum(true)}
            labelStyle={{
              color: '#333',
              fontWeight: '400',
            }}
            inputWrapStyle={{
              borderRadius: 10,
              borderWidth: 2,
            }}
            placeholderTextColor={'#ccc'}
            value={cardDateValue}
            defaultValue={cardDateValue}
            inputStyle={{
              color: '#333',
              fontWeight: 'bold',
            }}
          />
          <View>
            <Text className='text-gray-800 mx-2'>CVV</Text>
            <TextInput
              value={CVVValue}
              onChangeText={setCVVValue}
              keyboardType='numeric'
              maxLength={3}
              placeholder='Enter CVV'
              placeholderTextColor={'#ccc'}
              secureTextEntry={true}
              className='w-auto my-2 p-4 rounded-xl border-gray-200 border-2'
            />
          </View>
        </View>
        <CustomButton
          title='Pay Now'
          disabled={!validatePayment()}
          onPress={handlePayment}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaymentGateway;
