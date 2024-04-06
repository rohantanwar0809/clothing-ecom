import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import CustomButton from './CustomButton';
import { TouchableOpacityProps } from 'react-native-gesture-handler';

const PaymentSuccess = ({ ...rest }: TouchableOpacityProps) => (
  <>
    <ConfettiCannon count={200} origin={{ x: 10, y: 0 }} />
    <View style={styles.modalContainer}>
      <Text style={styles.modalText}>Payment Successful!</Text>
      <Text style={styles.modalText}>Your order is confirmed.</Text>
      <CustomButton title='Back To Your Cart' {...rest} />
    </View>
  </>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default PaymentSuccess;
