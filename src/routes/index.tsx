import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import anim from '../assets/loading.json';
import { useAuth } from '../contexts/auth';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();
  if (loading) {
    return (
      <View style={styles.container}>
        <LottieView source={anim} autoPlay />
      </View>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
