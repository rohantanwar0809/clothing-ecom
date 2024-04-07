import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacityProps,
} from 'react-native';
import LottieView, { AnimationObject } from 'lottie-react-native';

import CustomButton from './CustomButton';

interface LottieAnimationComponentProps extends TouchableOpacityProps {
  source: string | AnimationObject | { uri: string };
  canLoop: boolean;
  subtitleText?: string;
  btnText: string;
}

export default function LottieAnimationComponent({
  source,
  canLoop,
  subtitleText,
  btnText,
  ...rest
}: LottieAnimationComponentProps) {
  return (
    <>
      <SafeAreaView style={styles.containerStyle}>
        <LottieView
          source={source}
          autoPlay
          loop={canLoop}
          style={styles.animationStyles}
        />
        {subtitleText && (
          <Text className='text-xl font-bold text-center mb-4 text-slate-400'>
            {subtitleText}
          </Text>
        )}
      </SafeAreaView>
      <CustomButton className='m-10 mb-44' title={btnText} {...rest} />
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginRight: 20,
  },
  animationStyles: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
