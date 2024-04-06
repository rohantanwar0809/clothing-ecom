// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import CustomButton from '../components/CustomButton';

// const PaymentGateway = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [cvv, setCvv] = useState('');
//   const navigation = useNavigation();

//   const handlePayment = () => {
//     alert('Payment Successful! Your order is confirmed.');
//     // navigation.navigate('Listing' as never); // Go back to Cart Screen
//     navigation.goBack();
//   };

//   const handleCardNumberChange = (text: string) => {
//     const formattedCardNumber = text.slice(0, 16).replace(/\D/g, '');
//     setCardNumber(formattedCardNumber);
//   };

//   // const handleExpiryChange = (text: string) => {
//   //   const formattedExpiry = text.slice(0, 5); // Limit to 5 characters
//   //   // Automatically add '/' after 2nd character if missing
//   //   if (formattedExpiry.length === 2 && formattedExpiry.indexOf('/') === -1) {
//   //     setExpiry(formattedExpiry + '/');
//   //   } else {
//   //     setExpiry(formattedExpiry.replace(/\D/g, '')); // Remove non-numeric characters
//   //   }
//   // };

//   return (
//     <View style={styles.paymentContainer}>
//       <Text style={styles.paymentTitle}>Enter Payment Details</Text>
//       <TextInput
//         value={cardNumber}
//         onChangeText={handleCardNumberChange}
//         placeholder='Card Number'
//         style={styles.paymentInput}
//         keyboardType='numeric'
//       />
//       <View style={styles.expiryCvvRow}>
//         <TextInput
//           value={expiry}
//           onChangeText={setExpiry}
//           placeholder='Expiry (MM-YY)'
//           style={[styles.paymentInput, styles.expiryInput]}
//           keyboardType='numeric'
//         />
//         <TextInput
//           value={cvv}
//           onChangeText={setCvv}
//           placeholder='CVV'
//           style={[styles.paymentInput, styles.cvvInput]}
//           keyboardType='numeric'
//         />
//       </View>
//       <CustomButton
//         title='Pay Now'
//         style={styles.paymentButton}
//         onPress={handlePayment}
//       />
//     </View>
//   );
// };

// export default PaymentGateway;

// const styles = StyleSheet.create({
//   paymentContainer: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   paymentTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   paymentInput: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     marginBottom: 10,
//   },
//   expiryCvvRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   expiryInput: {
//     width: '45%',
//   },
//   cvvInput: {
//     width: '45%',
//   },
//   paymentButton: {
//     marginTop: 20,
//   },
// });

import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View,
  Text,
  TextInput,
} from 'react-native';
// import CreditCardForm, { Button, FormModel } from 'rn-credit-card';
import {
  CardDateTextInput,
  CardNumberTextInput,
} from 'rn-credit-card-textinput';
import MyButton from '../components/CustomButton1';
import { validateExpiryDate } from '../validators';

// const PaymentGateway = () => {
//   const formMethods = useForm<FormModel>({
//     // to trigger the validation on the blur event
//     mode: 'onBlur',
//     defaultValues: {
//       holderName: '',
//       cardNumber: '',
//       expiration: '',
//       cvv: '',
//     },
//   });
//   const { handleSubmit, formState } = formMethods;

//   function onSubmit(model: FormModel) {
//     Alert.alert('Success: ' + JSON.stringify(model, null, 2));
//   }

//   return (
//     <FormProvider {...formMethods}>
//       <SafeAreaView style={styles.container}>
//         <KeyboardAvoidingView
//           style={styles.avoider}
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         >
//           <CreditCardForm
//             LottieView={LottieView}
//             horizontalStart
//             overrides={{
//               labelText: {
//                 marginTop: 16,
//               },
//             }}
//           />
//         </KeyboardAvoidingView>
//         {formState.isValid && (
//           <Button
//             style={styles.button}
//             title={'CONFIRM PAYMENT'}
//             onPress={handleSubmit(onSubmit)}
//           />
//         )}
//       </SafeAreaView>
//     </FormProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   avoider: {
//     flex: 1,
//     padding: 36,
//   },
//   button: {
//     margin: 36,
//     marginTop: 0,
//   },
// });

const PaymentGateway = () => {
  const [cardValue, setCardValue] = useState('');
  const [focusCardNum, setFocusCardNum] = useState<boolean>(false);

  const [cardDateValue, setCardDateValue] = useState('');
  const [focusCardDateNum, setFocusCardDateNum] = useState<boolean>(false);

  const [CVVValue, setCVVValue] = useState('');

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

  return (
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
          onBlur={(e) => {
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
        <MyButton title='Pay Now' disabled={!validatePayment()} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PaymentGateway;
